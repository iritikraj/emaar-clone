import React from "react";
import { cn } from "@/lib/utils";

interface DotBackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const DotBackgroundWrapper = ({
  children,
  className,
}: DotBackgroundWrapperProps) => {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Dot Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Radial mask for fade effect */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </section>
  );
};
