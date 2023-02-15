import { Link } from "@remix-run/react";

const navLinks = [
  // { title: "Projects", type: "component", route: "/projects" },
  { title: "Resume", type: "pdf", route: "/resume" },
  { title: "About", type: "component", route: "/about" },
  { title: "Notes", type: "component", route: "/notes" },
];

export function NavBar() {
  return (
    <div className="px-5 py-5 md:px-20 md:py-9 md:flex">
      <nav className="text-primary mx-auto md:max-w-8xl items-center justify-between">
        <div className="flex justify-center gap-4 align-middle">
          <Link
            to="/"
            className="dark:text-white block whitespace-nowrap text-2xl font-medium hover:underline underline-offset-8"
          >
            <h1>Ulysses Kee</h1>
          </Link>
        </div>
        <ul className="hidden md:flex">
          {navLinks.map((item) => {
            switch (item.type) {
              case "component": {
                return (
                  <li className="px-5 py-2" key={item.title}>
                    <Link
                      to={`${item.route}`}
                      className="block text-lg whitespace-nowrap font-medium hover:underline focus:underline focus:outline-none active dark:text-white underline-offset-8"
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              }
              case "pdf": {
                return (
                  <li className="px-5 py-2" key={item.title}>
                    {/* <Link to={item.route} reloadDocument */}
                    {/*   className="block text-lg whitespace-nowrap font-medium hover:underline focus:underline focus:outline-none active dark:text-white underline-offset-8"> */}
                    {/*   {item.title} */}
                    {/* </Link> */}
                    <a href="/resume.pdf" // hard-coded path for fix - Link component does not work
                      className="block text-lg whitespace-nowrap font-medium hover:underline focus:underline focus:outline-none active dark:text-white underline-offset-8">
                      {item.title}
                    </a>
                  </li>
                )
              }
            }
          })}
        </ul>
        <div className="flex items-center justify-center"></div>
      </nav>
    </div>
  );
}
