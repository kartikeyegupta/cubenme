import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // This will refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const user = await supabase.auth.getUser();
  

  // protected routes
  if (request.nextUrl.pathname.startsWith("/protected") && user.error) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) {
    console.error("Error fetching user:", userError.message);
    return;
  }

  if (userData?.user) {
    const { id: userId } = userData.user;

    const { data: userProfile, error: profileError } = await supabase
      .from("user_profiles")
      .select("user_type")
      .eq("user_id", userId)
      .single();
      if (profileError) {
        return;
      }
      if (request.nextUrl.pathname.startsWith("/protected/pledges") && userProfile.user_type === "member") {
        return NextResponse.redirect(new URL("/protected/members", request.url));
      }
      if (request.nextUrl.pathname.startsWith("/protected/members") && userProfile.user_type === "pledge") {
        return NextResponse.redirect(new URL("/protected/pledges", request.url));
      }
  }
  if (request.nextUrl.pathname === "/" && !user.error) {
    return NextResponse.redirect(new URL("/protected", request.url));
  }

  return response;
};
