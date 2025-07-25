"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { cn } from "@/lib/utils";

interface SpotlightBackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightBackgroundWrapper = ({
  children,
  className,
}: SpotlightBackgroundWrapperProps) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-black/[0.96] bg-grid-white/[0.02]",
        className
      )}
    >
      <Spotlight />
      <div className="relative z-10">{children}</div>
    </section>
  );
};
