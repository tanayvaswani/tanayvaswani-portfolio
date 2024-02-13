"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <motion.div
      className="bg-root absolute inset-0 -z-50 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:68px_68px] [mask-image:radial-gradient(ellipse_80%_30%_at_50%_10%,#000_60%,transparent_100%)]"
      initial={{ scale: 1, opacity: 0, x: 0 }}
      animate={{ scale: 1, opacity: 100, x: 0 }}
      transition={{
        ease: "easeOut",
        duration: 1,
        x: { duration: 1 },
        delay: 0.2,
      }}
    />
  );
}
