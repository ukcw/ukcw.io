import { Link } from '@remix-run/react'
import TableOfContents from '~/components/tableOfContents'

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:flex">
      <TableOfContents />
      <div className="max-w-3xl mt-5 lg:mt-0 mx-auto text-primary">
        <div className="pb-4 divide-y">
          <h2 id="about-me" className="text-4xl pb-4">
            About Me
          </h2>
          <p className="pt-4">
            Hi, I'm Ulysses. I graduated from the University of Warwick in 2020
            with a Bachelor of Science in Management with Finance (First-Class
            Honors), where I took a mix of courses in Business, Finance,
            Economics, and Computer Science and recently graduated from the
            National University of Singapore (NUS) with a Master of Computing
            (Highest Distinction). I'm interested in distributed systems, logic,
            and programming languages amongst other areas of computer science.
            I'm currently a Data Engineering intern at Binance.
          </p>
        </div>
        <div className="pb-4 divide-y">
          <h2 id="work-experience" className="text-4xl pt-4 pb-4">
            Work Experience
          </h2>
          <div className="pt-4">
            <div>
              <h3 id="binance" className="text-2xl">
                Binance
              </h3>
              <p className="pt-2">
                <span className="italic">Data Engineering Intern</span> &middot;
                Feb 2023 - May 2023
              </p>
              <ul className="pt-2 list-disc list-inside">
                <li>Details to be added</li>
              </ul>
            </div>
            <div className="pt-4">
              <h3
                id="singapore-blockchain-innovation-programme"
                className="text-2xl"
              >
                Singapore Blockchain Innovation Programme (NUS-SBIP)
              </h3>
              <p className="pt-2">
                <span className="italic">Software Engineering Intern</span>{' '}
                &middot; Aug 2022 - Feb 2023
              </p>
              <ul className="pt-2 list-disc list-inside">
                <li>
                  Working on improving the frontend UI of Verazt, a static
                  analysis tool used to automatically find security bugs and
                  vulnerabilities in smart contracts.
                </li>
                <li>
                  Working on the visualization of call graphs for analysing the
                  structure of Solidity smart contracts in React.
                </li>
                <li>
                  Working on the parsing of semantic tests from the official
                  Solidity repository into internal Rust data structures using
                  the pest parser.
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <h3 id="cloudflare" className="text-2xl">
                Cloudflare
              </h3>
              <p className="pt-2">
                <span className="italic">Software Development Intern</span>{' '}
                &middot; Dec 2021 - May 2022
              </p>
              <ul className="pt-2 list-disc list-inside">
                <li>
                  Developed FlareTools, a web-based application using React and
                  Cloudflare Workers, to help internal teams and partners gain
                  better visibility over product configurations, and copy
                  configuration records and settings easily.
                </li>
                <li>
                  Developed a set of REST API services deployed on Cloudflare
                  Workers which was used to interface with the Cloudflare v4
                  APIs.
                </li>
                <li>
                  Presented my project in a global company-wide meeting and
                  published a{' '}
                  <a
                    className="underline-offset-auto"
                    href="https://blog.cloudflare.com/internship-experience-software-development-intern/"
                  >
                    blog
                  </a>{' '}
                  about it.
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <h3 id="canopy" className="text-2xl">
                Canopy
              </h3>
              <p className="pt-2">
                <span className="italic">Data Analyst</span> &middot; Jul 2020 -
                Jun 2021
              </p>
              <ul className="pt-2 list-disc list-inside">
                <li>
                  Worked with Python to clean and transform parsed raw data into
                  a standardized format used for downstream financial analysis
                  and processing.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pb-4 divide-y">
          <h2 id="projects" className="text-4xl pt-4 pb-4">
            Projects
          </h2>
          <div className="pt-4">
            <div>
              <h3 id="distributed-game" className="text-2xl">
                P2P Distributed Game
              </h3>
              {/* <p className="pt-2"><span className="italic">Data Engineering Intern</span> &middot; Feb 2023 - Mar 2023</p> */}
              <ul className="pt-2 list-disc list-inside">
                <li>
                  Designed and developed a peer-to-peer distributed maze game in
                  Java using Java RMI and implemented mutual exclusion between
                  threads via locks.
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <h3 id="definitional-interpreter" className="text-2xl">
                Definitional Interpreter
              </h3>
              {/* <p className="pt-2"><span className="italic">Software Engineering Intern</span> &middot; Aug 2022 - Feb 2023</p> */}
              <ul className="pt-2 list-disc list-inside">
                <li>
                  Developed a definitional interpreter and type checker for
                  Scilla (an intermediate-level language smart contract language
                  developed for the Zilliqa blockchain) in JavaScript.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pb-4 divide-y">
          <h2 id="education" className="text-4xl pt-4 pb-4">
            Education
          </h2>
          <div className="pt-4">
            <div>
              <h3 id="national-university-of-singapore" className="text-2xl">
                National University of Singapore (NUS)
              </h3>
              <p className="pt-2">
                <span className="italic">
                  Master of Computing (Highest Distinction)
                </span>{' '}
                &middot; Jan 2021 - Jan 2023
              </p>
              <p className="pt-2 font-bold">
                <Link to="/CP5105_Ulysses.pdf" reloadDocument>
                  Thesis: Algorithmic Trading with Case Based Reasoning and
                  Multi-Agent Systems
                </Link>
              </p>
              <p className="pt-2 font-bold">Relevant Coursework</p>
              <p className="pt-2">
                Data Structures and Algorithms &middot; Computer Organisation
                &middot; Operating Systems &middot; Artificial Intelligence,
                Software Engineering &middot; Fundamentals of Logic &middot;
                Programming Languages Implementation &middot; Distributed
                Systems &middot; Big Data Systems for Data Science
              </p>
            </div>
            <div className="pt-4">
              <h3 id="university-of-warwick" className="text-2xl">
                University of Warwick
              </h3>
              <p className="pt-2">
                <span className="italic">
                  Bachelor of Science in Management with Finance (First-Class
                  Honours)
                </span>{' '}
                &middot; Aug 2022 - Feb 2023
              </p>
              <p className="pt-2 font-bold">Relevant Coursework</p>
              <p className="pt-2">
                Econometrics &middot; Database Systems &middot; Data Science
                &middot; Investment Management &middot; Statistics
              </p>
            </div>
          </div>
        </div>
        <div className="pb-4 divide-y">
          <h2 id="skills" className="text-4xl pt-4 pb-4">
            Skills
          </h2>
          <div className="pt-4">
            <ul className="pt-2 list-disc list-inside">
              <li>Full-Stack Development</li>
              <li>
                <span className="font-bold">Databases:</span> MySQL &middot;
                PostgreSQL
              </li>
              <li>
                <span className="font-bold">Languages:</span> Python &middot;
                JavaScript/TypeScript &middot; Java &middot; Rust &middot; SQL
                &middot; HTML/CSS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
