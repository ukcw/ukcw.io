import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { GithubCard } from "@/components/github-card"
import { Icons } from "@/components/icons"

function getRepositoryName(repository: string) {
  if (repository.endsWith("/CP5105_Ulysses.pdf")) {
    return "CP5105"
  }
  return repository.split("/").slice(-1)
}

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
          You've found my home on the internet.
          <br className="hidden sm:inline" />
          I'm a software engineer from Singapore and currently working at
          Binance.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Icons.gitHub className="h-5 w-5 fill-current text-muted-foreground" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Icons.twitter className="h-5 w-5 fill-current text-muted-foreground" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
        <Link href={siteConfig.links.cv} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <p className="h-5 w-5 fill-current text-muted-foreground font-extrabold tracking-tighter ">
              CV
            </p>
            <span className="sr-only">CV</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-4 pt-10">
        <h2 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          Projects
        </h2>
        {siteConfig.projects?.length ? (
          <nav className="flex flex-col  gap-6">
            {siteConfig.projects?.map(
              (item, index) =>
                item.repository && (
                  <Link
                    key={index}
                    href={item.repository}
                    // className={cn(
                    //   "flex items-center text-sm font-medium text-muted-foreground",
                    //   item.disabled && "cursor-not-allowed opacity-80"
                    // )}
                  >
                    <span className="font-bold underline underline-offset-4">
                      {getRepositoryName(item.repository)}
                    </span>
                    <br className="hidden sm:inline" />
                    <span className="text-muted-foreground">
                      {item.description}
                    </span>
                  </Link>
                )
            )}
          </nav>
        ) : null}
      </div>
    </section>
  )
}
