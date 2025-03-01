"use client";

import * as React from "react";
import { cn } from "@/shared/utils/shadcn-utils";

const TypographyH5 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h5
      ref={ref}
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
});

TypographyH5.displayName = "TypographyH5";

export default TypographyH5;