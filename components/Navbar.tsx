"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex flex-col w-full mt-8 gap-4">
      <div className="flex w-full items-center justify-center">
        <p className="text-3xl font-bold">Suryatej Ponnapalli</p>
      </div>
      <div className="flex flex-row text-sm font-extralight gap-2 items-center justify-center">
        <div>Home</div>
        <div>Projects</div>
        <div>Achievements</div>
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
}
