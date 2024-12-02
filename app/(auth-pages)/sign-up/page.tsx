import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Select as CNSelect, SelectItem, SelectTrigger, SelectValue,  SelectContent, SelectLabel} from "@/components/ui/select";
import { SmtpMessage } from "../smtp-message";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  const toggleAnimation = () => {
  };
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );

  }

  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="name">Name</Label>
          <Input name="name" placeholder="Nathan Shenkerman" required />
          <Label htmlFor="email">Email (Use Duke Email)</Label>
          <Input name="email" placeholder="firstname.lastname@duke.edu" required />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <Label htmlFor="major">Major(s)</Label>
          <Input name="major" placeholder="ECE/CS" required />

          <Label htmlFor="grad_year"> Graduation Year </Label>
          <CNSelect name="grad_year" required>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="202_" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2026">2026</SelectItem>
              <SelectItem value="2027">2027</SelectItem>
              <SelectItem value="2028">2028</SelectItem>
            </SelectContent>
          </CNSelect>
          <Label htmlFor="user_type"> User Type </Label>
          <CNSelect name="user_type" required>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Roles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="member">Member</SelectItem>
              <SelectItem value="pledge">Pledge</SelectItem>
            </SelectContent>
          </CNSelect>
          <Label htmlFor="startup_int">Startup Interest</Label>
          <Input name="startup_int" placeholder="Gov Tech" required />

          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}
