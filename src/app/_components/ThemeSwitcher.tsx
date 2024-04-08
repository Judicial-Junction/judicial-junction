// app/components/ThemeSwitcher.tsx
"use client";
import { MoonFilledIcon, SunFilledIcon } from "@/app/_components/icons";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div onClick={onChange}>
      {theme == "dark" ? (
        <SunFilledIcon size={24} />
      ) : (
        <MoonFilledIcon size={24} />
      )}
    </div>
  );
}
