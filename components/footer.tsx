import { Github, Linkedin, Twitter } from "lucide-react"

import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 p-5 md:px-10">
      <div className="mx-10vw container relative max-w-[700px]">
        <div className="flex justify-between">
          <div className="text-sm">
            {/* <span>All rights reserved</span> */}
            <span className="">© Ulysses Kee 2023</span>
          </div>
          {/* <div className="text-base">Ulysses Kee</div> */}
          {/* <p className="mt-6 max-w-md text-2xl text-muted-foreground"> */}
          {/*   Software engineer interested in making the world a better place */}
          {/* </p> */}
          <div className="flex items-center gap-4">
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Icons.gitHub className="h-4 w-4" />
            </a>
            <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <Icons.twitter className="h-4 w-4 fill-current" />
            </a>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
