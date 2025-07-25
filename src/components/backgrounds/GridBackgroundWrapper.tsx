'use client';

import React from "react";
import { cn } from "@/lib/utils";

interface GridBackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const GridBackgroundWrapper = ({
  children,
  className,
}: GridBackgroundWrapperProps) => {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial mask */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {/* Content */}
      <div className="relative z-20">{children}</div>
    </section>
  );
};
