"use client";

import { motion } from "framer-motion";

const transition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

const viewport = { once: true, margin: "-72px" } as const;

export function RevealSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.section>
  );
}

export function RevealDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
