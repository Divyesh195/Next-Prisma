"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import * as React from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Navbar() {
  const { setTheme } = useTheme();
  return (
    <div className="py-4 border-b flex justify-center items-center backdrop-blur-sm sticky top-0 px-[5vw] max-w-[1400px] mx-auto">
      <p className="text-xl font-bold mr-auto md:mr-0">STEAM95</p>

      <ul className="md:flex items-center gap-5 text-lg hidden mx-auto">
        <li className="hover:-translate-y-0.5 transition-all duration-200 font-semibold cursor-pointer">
          Home
        </li>
        <li className="hover:-translate-y-0.5 transition-all duration-200 font-semibold  cursor-pointer">
          About Us
        </li>
        <li className="hover:-translate-y-0.5 transition-all duration-200 font-semibold  cursor-pointer">
          Pricing
        </li>
        <li className="hover:-translate-y-0.5 transition-all duration-200 font-semibold  cursor-pointer">
          Trending
        </li>
        <li className="hover:-translate-y-0.5 transition-all duration-200 font-semibold  cursor-pointer">
          Contact Us
        </li>
      </ul>
      {/* Dark Mode + Sing In button  */}
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button className="hidden md:block">Sing In</Button>
      </div>

      {/* Mobile sheet  */}
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <div className="h-5 my-auto">
              <Menu />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="mt-2"></SheetTitle>

            <div className="flex flex-col justify-between h-full mt-5">
              <div className="flex flex-col justify-between gap-2 text-lg m-2">
                <Link
                  href="#"
                  className="hover:underline hover:font-bold cursor-pointer border text-center py-2 rounded-md"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="hover:underline hover:font-bold cursor-pointer border text-center py-2 rounded-md"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="hover:underline hover:font-bold cursor-pointer border text-center py-2 rounded-md"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="hover:underline hover:font-bold cursor-pointer border text-center py-2 rounded-md"
                >
                  Trending
                </Link>
                <Link
                  href="#"
                  className="hover:underline hover:font-bold cursor-pointer border text-center py-2 rounded-md"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mb-2 mx-2 justify-center gap-5">
                <Button>Sing In</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
