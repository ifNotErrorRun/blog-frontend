"use client";
import { cn } from "@/shared/utils/shadcn-utils";

const TypographyH3 = ({
  children,
  className,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      {...props}
      className={cn("scroll-m-20 text-2xl font-semibold tracking-tight align-bottom whitespace-nowrap h-10 leading-10", className)}
    >
      {children}
    </h3>
  );
};

export default TypographyH3;