import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { DemoGithub } from "@/components/github-card"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        {/* <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1> */}
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Hello, I'm Ulysses
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          You've found my home on the internet. Welcome to my digital garden!{" "}
          <br className="hidden sm:inline" />
          I'm a software engineer from Singapore and currently working at
          Binance.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      <div className="flex gap-4">
        <DemoGithub />
      </div>
    </section>
  )
}
