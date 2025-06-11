"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#0892e2]"></Link>

          {/* Desktop Nav */}
          <div className="relative hidden md:flex space-x-2">
            {/* Animated background indicator */}
            <motion.div
              className="absolute border-b-[2.5px] -top-2 rounded-t-md bg-gray-50 border-b-sky-400  h-[3.8rem]  text-slate-900 "
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            {navItems.map((item) => (
              <div
                key={item.path}
                ref={(el) => (navRefs.current[item.path] = el)}
                className="px-3 py-2"
              >
                <Link
                  href={item.path}
                  className={`relative z-10 px-2 py-1 rounded-md ${
                    pathname === item.path
                      ? "text-slate-900 font-medium"
                      : "text-gray-600 font-semibold hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle (no changes here) */}
          <div className="md:hidden">{/* ... your button here ... */}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
