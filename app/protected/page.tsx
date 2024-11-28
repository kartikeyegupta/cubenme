import { createClient } from "@/utils/supabase/server";
import { Loader } from "@/components/loader";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) {
    return redirect("/sign-in");
  }

  if (userData?.user) {
    const { id: userId } = userData.user;

    const { data: userProfile, error: profileError } = await supabase
      .from("user_profiles")
      .select("user_type")
      .eq("user_id", userId)
      .single();
      if (profileError) {
        return redirect("/sign-in");
      }
      if (userProfile.user_type === "member") {
        return redirect("/protected/members");
      }
      if (userProfile.user_type === "pledge") {
        return redirect("/protected/pledges");
      }
  }


  return (
    <Loader>
    </Loader>
  );
}
