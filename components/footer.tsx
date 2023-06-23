import { Github, Linkedin, Twitter } from "lucide-react"

import { Icons } from "@/components/icons"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 p-5 md:px-10">
      <div className="mx-10vw relative">
        <div className="flex justify-between">
          <div className="text-base">
            {/* <span>All rights reserved</span> */}
            <span className="">© Ulysses Kee 2023</span>
          </div>
          {/* <div className="text-base">Ulysses Kee</div> */}
          {/* <p className="mt-6 max-w-md text-2xl text-muted-foreground"> */}
          {/*   Software engineer interested in making the world a better place */}
          {/* </p> */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/ukcw">
              <Icons.gitHub className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/ukcw_">
              <Icons.twitter className="h-5 w-5 fill-current" />
            </a>
            <a href="https://www.linkedin.com/in/ulysses-kee/">
              <Linkedin className="h-5 w-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
