import { Github, Linkedin, Twitter } from "lucide-react"

import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"
import { TextThemeToggle } from "./text-theme-toggle"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 px-5 py-1">
      <div className="mx-10vw container relative max-w-[700px]">
        <div className="flex items-center justify-between">
          <div className="flex-1 text-sm">
            {/* <span>All rights reserved</span> */}
            <span className="text-sm leading-tight tracking-tighter text-muted-foreground">© Ulysses Kee 2023</span>
          </div>
          <div className="">
          <TextThemeToggle />
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Icons.gitHub className="h-4 w-4 text-muted-foreground" />
            </a>
            <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <Icons.twitter className="h-4 w-4 fill-current text-muted-foreground" />
            </a>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4 fill-current text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
