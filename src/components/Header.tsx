"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { Menu, X } from "lucide-react"; // optional: or use any icon library
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const pathname = usePathname();
  const navRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const controls = useAnimation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact Us" },
  ];

  // Animate nav indicator
  useEffect(() => {
    const activeRef = navRefs.current[pathname];
    if (activeRef) {
      const rect = activeRef.getBoundingClientRect();
      const containerRect = activeRef.parentElement!.getBoundingClientRect();
      const desiredWidth = rect.width;
      const offsetLeft =
        rect.left - containerRect.left + (rect.width - desiredWidth) / 2;

      setIndicatorStyle({
        left: offsetLeft,
        width: desiredWidth,
      });
    }
  }, [pathname]);

  // Animate header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        controls.start({
          top: 0,
          right: 0,

          borderRadius: "0rem",
        });
      } else {
        controls.start({
          top: "1rem",
          right: "1rem",
        
          borderRadius: "0.75rem",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.header
      animate={controls}
      initial={{
        top: "1rem",
        borderRadius: "0.75rem",
      }}
      className="bg-white w-full sm:w-fit sm:right-12 mx-auto right-0 dark:bg-gray-900 border fixed z-50 px-4 sm:px-6 md:px-10"
      style={{ position: "fixed" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#0892e2]"></Link>

          {/* Desktop Nav */}
          <div className="relative hidden md:flex items-center space-x-4">
            <motion.div
              className="absolute border-b-[2.5px] -top-3 rounded-t-md bg-gray-50 dark:bg-transparent border-b-sky-400 h-[4rem]"
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            <motion.div
              className="absolute top-[3.2rem] left-0 w-full h-[2px] dark:bg-sky-400 rounded-md dark:shadow-[0_20px_40px_rgba(56,189,248,0.4)] blur-sm"
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

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 dark:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="md:hidden flex flex-col gap-3 pb-4 pt-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-2 py-2 rounded-md text-sm font-medium ${
                  pathname === item.path
                    ? "text-sky-600 dark:text-sky-300"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
