"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { navItems } from "./nav-items";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Navbar() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div className="fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2 rounded-none border bg-neutral-900 bg-opacity-80 backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.3rem] sm:w-[41.5rem] sm:rounded-full"></motion.div>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-neutral-300 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navItems.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
            >
              <Link
                className={cn(
                  "flex w-full items-center justify-center px-3 py-3 transition delay-75 hover:z-10 hover:text-neutral-300",
                  { "hover:text-neutral-300": activeSection === link.name },
                  { "text-neutral-800": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
                target={link.target}
              >
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-blue-500"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
