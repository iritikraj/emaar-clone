"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface EmaarDistinctionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  category?: string;
}

export function EmaarDistinctionsScroll({
  icon: Icon,
  title,
  description,
  gradient,
  category,
}: EmaarDistinctionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center px-4 sm:px-0"
    >
      <div
        className={cn(
          "relative card group/card h-60 w-full max-w-xs rounded-xl shadow-xl flex flex-col justify-between p-4 overflow-hidden",
          "cursor-pointer border transition-all duration-500 ease-in-out",
          "bg-white/30 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800",
          "backdrop-blur-md hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.1)]"
        )}
      >
        {/* Glowing Border Layer */}
        <div
          className={cn(
            "absolute inset-0 rounded-xl pointer-events-none transition duration-500 opacity-0 group-hover/card:opacity-100",
            "border-2",
            gradient,
            "shadow-[0_0_30px_4px_rgba(255,255,255,0.08)]"
          )}
          style={{
            boxShadow: "0 0 20px 4px rgba(255, 255, 255, 0.1)",
            mixBlendMode: "overlay",
            filter: "blur(1px)",
          }}
        />

        {/* Gradient Top Bar */}
        <div
          className={`absolute top-0 left-0 w-full h-32 rounded-t-xl bg-gradient-to-br ${gradient} opacity-90 dark:opacity-80`}
        />

        {/* Icon & Title */}
        <div className="z-10 flex items-center space-x-4 mb-2 relative">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} shadow-lg flex items-center justify-center`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex w-full text-left flex-col text-black dark:text-white z-10">
            <p className="font-semibold text-base tracking-tight">{title}</p>
            {category && <p className="text-xs opacity-80">{category}</p>}
          </div>
        </div>

        {/* Description */}
        <div className="z-10 text-sm mt-auto">
          <p className="text-gray-700 dark:text-gray-300 font-normal">
            {description}
          </p>
        </div>

        {/* Soft Shine Layer */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-gray-200/10 dark:from-zinc-800/30 dark:to-zinc-900/20 opacity-80 group-hover/card:opacity-90 transition duration-300 pointer-events-none" />

        {/* Optional Glow Overlay on Hover */}
        <div className="absolute -inset-1 rounded-2xl pointer-events-none opacity-0 group-hover/card:opacity-30 transition-all duration-500 ease-in-out" style={{
          boxShadow: "0 0 60px 10px rgba(255,255,255,0.2)",
        }} />
      </div>
    </motion.div>
  );
}
