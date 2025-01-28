"use server";

import { ThemeProvider } from "@/shared/config/providers/ThemeProvider";
import { cn } from "@/shared/utils/shadcn-utils";
import "@/shared/config/styles/globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ko" suppressHydrationWarning>
        <head />
        <body className={cn(`min-h-screen bg-background antialiased`)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
