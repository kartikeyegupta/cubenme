import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8">
      <form className="flex-1 flex flex-col w-full max-w-sm">
        <h1 className="text-2xl font-medium text-center mb-2">Sign in</h1>
        <p className="text-sm text-foreground text-center mb-6">
          Don't have an account?{" "}
          <Link className="text-foreground font-medium underline" href="/sign-up">
            Sign up
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="firstname.lastname@duke.edu" required />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-2">
            <Label htmlFor="password">Password</Label>
            <Link
              className="text-xs text-foreground underline"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
          <SubmitButton pendingText="Signing In..." formAction={signInAction}>
            Sign in
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}


