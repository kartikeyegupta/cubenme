import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Image from "next/image"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "The Cube LLC Official NME Portal",
  description: "The most efficient way to educating new members",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-10 sm:gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10">
                <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center p-3 px-5 text-sm">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center font-semibold mb-3 sm:mb-0">
                    <Link href="/">
                      <Image src="/cube.png" alt="Logo" width={50} height={50} className="cursor-pointer" />
                    </Link>
                    <p className="text-center sm:text-left"> Not a member?</p>
                    <Button asChild className="w-full sm:w-auto">
                      <Link href="https://www.thecube.llc/">Learn More </Link>
                    </Button>
                  </div>
                  <div className="w-full sm:w-auto mt-3 sm:mt-0 flex justify-center sm:justify-end">
                    {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                  </div>
                </div>
              </nav>
              <div className="flex flex-col gap-10 sm:gap-20 w-full px-4 sm:px-5 max-w-5xl">
                {children}
              </div>

              <footer className="w-full flex flex-col sm:flex-row items-center justify-center border-t mx-auto text-center text-xs gap-4 sm:gap-8 py-8 sm:py-16 px-4">
                <Image
                  src="/cube.png"
                  alt="CUBE Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto mb-2 sm:mb-0"
                />
                <p className="mb-2 sm:mb-0">
                  Powered by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Supabase
                  </a>
                </p>
                <p className="mb-2 sm:mb-0">© 2024 The Cube at Duke University. All rights reserved.</p>
                <div className="mt-2 sm:mt-0">
                  <ThemeSwitcher />
                </div>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
