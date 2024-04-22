"use client";

import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";

export function Header() {

  return (
    <header className="bg-gray-100 py-2 dark:bg-gray-900 z-10 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex gap-2 items-center text-xl hover:underline"
        >
          Camcorder
        </Link>

        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
