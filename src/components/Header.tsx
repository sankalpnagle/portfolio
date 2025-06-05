"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface HoverEffectProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const HoverEffect = ({
  children,
  className = "",
  onClick,
}: HoverEffectProps) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onClick}
    >
      <motion.div
        className="relative px-3 py-2"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div className="relative z-10 transition-colors duration-200">
          {children}
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          initial={false}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact Us" },
  ];

  const NavLink = ({ path, label }: { path: string; label: string }) => {
    const isActive = pathname === path;
    const [isHovered, setIsHovered] = useState(false);

    return (
      <Link href={path} className="relative">
        <motion.div
          className="relative px-3 py-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2, ease: "linear" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span
            className={`relative z-10 transition-colors duration-200 ${
              isActive
                ? "font-[500] text-white"
                : "text-gray-600 font-semibold hover:text-gray-900"
            }`}
          >
            {label}
          </span>
          <AnimatePresence>
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-lg  bg-[#0892e2] z-0"
                layoutId="nav-bg-active"
                style={{ opacity: 1 }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            )}
            {isHovered && !isActive && (
              <motion.div
                className="absolute inset-0 rounded-lg bg-sky-400 z-0"
                layoutId="nav-bg-hover"
                style={{ opacity: 0.01 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.04 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="bg-white shadow-md fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="relative">
            <motion.div
              className="relative px-3 py-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                className="text-2xl font-bold text-[#0892e2] hover:text-gray-900"
                layoutId="logo"
              ></motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.path} path={item.path} label={item.label} />
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.div className="md:hidden" whileTap={{ scale: 0.95 }}>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-200 ${
                        pathname === item.path ? "font-semibold bg-gray-50" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
