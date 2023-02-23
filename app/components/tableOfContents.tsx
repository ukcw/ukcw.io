import { useState } from "react";
import useHeadingsData from "~/hooks/useHeadingsData";
import useIntersectionObserver from "~/hooks/useIntersectionObserver";

const Headings = ({ headings, activeId }: { headings: any[], activeId: string }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id} /*className={heading.id === activeId ? "bg-pink-500" : ""}*/>
        <a href={`#${heading.id}`} className="font-semibold" onClick={(e) => {
          e.preventDefault();
          document.querySelector(`#${heading.id}`)!.scrollIntoView({
            behavior: "smooth"
          });
        }}>{heading.title}</a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child: any) => (
              <li key={child.id} /*className={`pl-4 font-thin ${child.id === activeId ? "bg-pink-500" : ""}`}*/>
                <a href={`#${child.id}`} onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${child.id}`)!.scrollIntoView({
                    behavior: "smooth"
                  });
                }}>{child.title}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

// https://www.emgoto.com/react-table-of-contents/
const TableOfContents = () => {
  const [activeId, setActiveId] = useState("");
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <div className="mx-auto max-w-3xl">
      <nav aria-label="Table of Contents" className="sticky top-10">
        <Headings headings={nestedHeadings} activeId={activeId} />
      </nav>
    </div>
  )
};

export default TableOfContents;
