"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const pathname = usePathname();
  const navRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });

  const navItems = [
    { path: "/", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const activeRef = navRefs.current[pathname];
    if (activeRef) {
      const rect = activeRef.getBoundingClientRect();
      const containerRect = activeRef.parentElement!.getBoundingClientRect();

      // Smaller width (e.g., 60% of actual width)
      const desiredWidth = rect.width * 1;
      const offsetLeft =
        rect.left - containerRect.left + (rect.width - desiredWidth) / 2;

      setIndicatorStyle({
        left: offsetLeft,
        width: desiredWidth,
      });
    }
  }, [pathname]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#0892e2]"></Link>

          {/* Desktop Nav */}
          <div className="relative hidden md:flex items-center space-x-4">
            {/* Animated background indicator */}
            <motion.div
              className="absolute border-b-[2.5px] -top-2 rounded-t-md bg-gray-50 dark:bg-gray-800 border-b-sky-400 h-[3.8rem] text-slate-900 dark:text-slate-100"
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            {navItems.map((item) => (
              <div
                key={item.path}
                ref={(el) => {
                  navRefs.current[item.path] = el;
                }}
                className="px-3 py-2"
              >
                <Link
                  href={item.path}
                  className={`relative z-10 px-2 py-1 rounded-md ${
                    pathname === item.path
                      ? "text-slate-900 dark:text-slate-100 font-medium"
                      : "text-gray-600 dark:text-gray-300 font-semibold hover:text-gray-900 dark:hover:text-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle (no changes here) */}
          <div className="md:hidden  flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
