import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface Project {
  title: string
  description: string
  repository: string
  useTitle: boolean
}

function getRepositoryName(project: Project) {
  if (project.repository.endsWith("/CP5105_Ulysses.pdf")) {
    return "CP5105"
  } else if (project.useTitle) {
    return project.title
  }
  return project.repository.split("/").slice(-1)
}

export default function IndexPage() {
  return (
    <section className="container grid max-w-[700px] items-center gap-6 pb-8 pt-16 md:pt-32">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        {/* <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1> */}
        <h1 className="text-base leading-tight tracking-tighter">
          Hello, I&apos;m Ulysses
        </h1>
        <p className="text-base tracking-tighter text-muted-foreground">
          You&apos;ve found my home on the internet. I&apos;m fascinated by software and remarkable user interfaces as
          they form the medium for our interaction with any built system. Distributed systems, programming languages,
          logic, and artificial intelligence form my theoretical interests.
        </p>
        <p className="text-base tracking-tighter text-muted-foreground">
          I currently work as a <span className="underline underline-offset-4">Research Engineer</span> at Chainlink Labs.
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
        <Link href={siteConfig.links.resume} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <p className="h-5 fill-current font-extrabold tracking-tighter text-muted-foreground ">
              Resume
            </p>
            <span className="sr-only">Resume</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-4 pt-5">
        <h2 className="text-sm leading-tight tracking-tighter">
          Projects
        </h2>
        {siteConfig.projects?.length ? (
          <nav className="flex flex-col gap-6">
            {siteConfig.projects?.map(
              (item, index) =>
                item.repository && (
                  <Link
                    key={index}
                    href={item.repository}
                    className="flex flex-col space-y-1.5 !no-underline"
                    // className={cn(
                    //   "flex items-center text-sm font-medium text-muted-foreground",
                    //   item.disabled && "cursor-not-allowed opacity-80"
                    // )}
                  >
                    <span className="text-base underline underline-offset-4">
                      {getRepositoryName(item)}
                    </span>
                    <span className="text-base leading-tight tracking-tighter text-muted-foreground">
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
