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

  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // if it not mounted return null
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 px-2">
      {/* Icons */}
      {theme === "dark" ? (
        <Moon />
      ) : (
        <Sun />
      )}
      {/* Toggle Switch */}
      <Switch
        id="dark-mode-toggle"
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
      />
    </div>
  );
}
