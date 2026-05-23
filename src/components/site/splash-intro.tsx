"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const SESSION_KEY = "supertech-splash-seen";
const DISPLAY_MS = 2200;
const FADE_MS = 600;

export function SplashIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      seen = false;
    }

    if (seen) {
      setShow(false);
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore quota / privacy mode
      }
      setShow(false);
    }, DISPLAY_MS);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    if (!show) {
      document.body.style.overflow = "";
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash-intro"
          role="presentation"
          aria-hidden
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: FADE_MS / 1000, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
        >
          {/* Single subtle ambient halo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_45%,rgba(15,108,189,0.06)_0%,transparent_70%)]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
            }}
            className="relative flex flex-col items-center px-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
              }}
              className="relative"
            >
              {/* Soft halo behind the logo — fully behind, so logo itself stays crisp */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 scale-150 rounded-full bg-sky-300/20 blur-3xl"
              />
              <Image
                src={siteConfig.logoPath}
                alt={`${siteConfig.name} logo`}
                width={420}
                height={420}
                priority
                quality={100}
                sizes="(max-width: 640px) 55vw, (max-width: 1024px) 40vw, 30vw"
                className="h-auto w-[clamp(12rem,35vmin,24rem)] object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 }
              }}
              className="mt-6 flex flex-col items-center gap-1.5"
            >
              <span
                className="font-display text-[clamp(1.4rem,4.6vmin,2.6rem)] font-extrabold uppercase leading-none tracking-[0.18em] drop-shadow-[0_3px_10px_rgba(27,182,230,0.28)]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#062a4d 0%,#0a4277 22%,#0f6cbd 55%,#1bb6e6 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent"
                }}
              >
                SUPERTECH
              </span>
              <span className="flex items-center gap-3 font-display text-[clamp(0.78rem,2.2vmin,1.25rem)] font-bold uppercase leading-none tracking-[0.34em] text-navy-700">
                <span aria-hidden className="h-px w-6 bg-gradient-to-r from-transparent to-[#1bb6e6]" />
                Water Solution
                <span aria-hidden className="h-px w-6 bg-gradient-to-l from-transparent to-[#1bb6e6]" />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{
                opacity: 1,
                scaleX: 1,
                transition: {
                  duration: (DISPLAY_MS - 300) / 1000,
                  ease: [0.65, 0, 0.35, 1],
                  delay: 0.3
                }
              }}
              style={{ transformOrigin: "0% 50%" }}
              className="mt-8 h-[3px] w-[clamp(8rem,30vmin,18rem)] rounded-full bg-gradient-to-r from-primary-700 via-primary-500 to-sky-400 shadow-[0_2px_12px_rgba(15,108,189,0.4)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
