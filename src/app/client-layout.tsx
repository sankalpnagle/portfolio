"use client";

import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import SideCard from "@/components/SideCard";
import MovingGradientBg from "@/components/MovingGradientBg";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MovingGradientBg />
      <Header />
      <div className="flex flex-col-reverse sm:flex-row sm:mt-32 mt-24 gap-x-6 gap-y-4 w-11/12 mx-auto mb-10">
        <aside className="sm:w-[45%] sm:mt-0 mt-16  w-full ">
          <SideCard />
        </aside>
        <AnimatePresence mode="wait">
          <main className="w-full sm:mt-0 mt-4">{children}</main>
        </AnimatePresence>
      </div>
    </>
  );
}
