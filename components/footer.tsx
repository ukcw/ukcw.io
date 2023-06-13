import { Github, Linkedin, Twitter } from "lucide-react"

import { Icons } from "@/components/icons"

export function Footer() {
  return (
    <footer className="mt-20 px-10 pt-20 pb-16 border-t border-gray-200">
      <div className="relative mx-10vw">
        <div className="relative mx-auto max-w-3xl lg:max-w-7xl">
          <div className="font-medium text-3xl">Ulysses Kee</div>
          <p className="max-w-md mt-6 text-2xl text-muted-foreground">
            Software engineer interested in making the world a better place
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="https://github.com/ukcw">
              <Icons.gitHub className="h-6 w-6 text-primary" />
            </a>
            <a href="https://twitter.com/ukcw_">
              <Icons.twitter className="h-6 w-6 fill-current" />
            </a>
            <a href="https://www.linkedin.com/in/ulysses-kee/">
              <Linkedin className="h-6 w-6 fill-current" />
            </a>
          </div>
          <div className="lg:flex lg:gap-2 mt-24 text-lg lg:mt-44">
            {/* <span>All rights reserved</span> */}
            <span className="block lg:inline">© Ulysses Kee 2023</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
