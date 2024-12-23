"use server";

// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/shared/config/providers/ThemeProvider";
import { cn } from "@/shared/utils/shadcn-utils";
import "@/shared/config/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html suppressHydrationWarning>
        <head />
        <body className={cn(`min-h-screen bg-background antialiased`)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            {/* <SpeedInsights />
            <Analytics /> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}