
"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function TextThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="default"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <p className="rotate-0 scale-100 text-sm italic leading-tight tracking-tighter text-muted-foreground transition-all dark:-rotate-90 dark:scale-0">Day</p>
      <p className="absolute rotate-90 scale-0 text-sm italic leading-tight tracking-tighter text-muted-foreground transition-all dark:rotate-0 dark:scale-100">Night</p>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
