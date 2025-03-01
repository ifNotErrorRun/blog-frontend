"use client";

import * as React from "react";
import { cn } from "@/shared/utils/shadcn-utils";

const TypographyH4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h4
      ref={ref}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
});

TypographyH4.displayName = "TypographyH4";

export default TypographyH4;