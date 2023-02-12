import { NavBar } from "~/components/navbar";
import { Waypoint } from 'react-waypoint';

const PdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  const googleDocsViewerUrl = `https://docs.google.com/gview?url=${pdfUrl}&embedded=true`;

  return (
    <iframe
      title="resume"
      src={googleDocsViewerUrl}
      width="100%"
      height="100%"
    />
  );
};

const aboutMyself = "Hello World";

const Sidebar = () => {
  <div> </div>
};

export default function About() {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex">
        <div className="min-w-200 text-slate-900 dark:text-slate-200">
          <nav className="relative">
            <div className="sticky">
              <ul className="text-slate-900 dark:text-slate-200">
                <li>About Me
                  <ul className="text-slate-900 dark:text-slate-400">
                    <li className="pl-4">Contact Details</li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="max-w-3xl mx-auto text-slate-900 dark:text-slate-200 divide-y">
          <div className="pb-4">
            <h2 className="text-4xl pb-4">
              About Me
            </h2>
            <p className="">
              Hi, I'm Ulysses.
              I graduated from the University of Warwick in 2020 with a Bachelor of Science in Management with Finance (First-Class Honors), where I took a mix of courses in Business, Finance, Economics, and Computer science
              and recently graduated from the National University of Singapore (NUS) with a Master of Computing (Highest Distinction).
              I'm interested in distributed systems, logic, and programming languages amongst other areas of computer science. I'm an incoming Data Engineering intern at Binance.
            </p>
          </div>
          <div className="pb-4">
            <h2 className="text-4xl pt-4 pb-4">
              Work Experience
            </h2>
          </div>
          <div className="pb-4">
            <h2 className="text-4xl pt-4 pb-4">
              Projects
            </h2>
          </div>
          <div className="pb-4">
            <h2 className="text-4xl pt-4 pb-4">
              Education
            </h2>
          </div>
          <div className="pb-4">
            <h2 className="text-4xl pt-4 pb-4">
              Skills
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
