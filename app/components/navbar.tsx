import { Link } from "@remix-run/react";

const navLinks = [
  { title: "Projects", route: "/projects" },
  { title: "Résumé", route: "/resume" },
  { title: "About", route: "/about" },
];

export function NavBar() {
  return (
    <div className="px-20 py-9 lg:py-12">
      <nav className="text-primary mx-auto flex max-w-8xl items-center justify-between">
        <div className="flex justify-center gap-4 align-middle">
          <Link
            to="/"
            className="text-white block whitespace-nowrap text-2xl font-medium hover:underline underline-offset-8"
          >
            <h1>Ulysses Kee</h1>
          </Link>
        </div>
        <ul className="hidden lg:flex">
          {navLinks.map((item) => (
            <li className="px-5 py-2" key={item.title}>
              <Link
                to={`${item.route}`}
                className="block text-lg whitespace-nowrap font-medium hover:underline focus:underline focus:outline-none active text-white underline-offset-8"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center"></div>
      </nav>
    </div>
  );
}
