"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2 px-2 h-6" aria-hidden="true">
        <div className="w-4 h-4" />
        <Switch aria-label="Toggle dark mode" />
      </div>
    );
  }

  const isDarkMode = theme === "dark";

  return (
    <div className="flex items-center space-x-2 px-2">
      {theme === "dark" ? <Moon /> : <Sun />}
      <Switch
        id="dark-mode-toggle"
        aria-label="Toggle dark mode"
        checked={isDarkMode}
        onCheckedChange={() => setTheme(isDarkMode ? "light" : "dark")}
      />
    </div>
  );
}