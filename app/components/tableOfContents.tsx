import useHeadingsData from "~/hooks/useHeadingsData";

const Headings = ({ headings }: { headings: any[] }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id} >
        <a href={`#${heading.id}`} className="font-semibold" onClick={(e) => {
          e.preventDefault();
          document.querySelector(`#${heading.id}`)!.scrollIntoView({
            behavior: "smooth"
          });
        }}>{heading.title}</a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child: any) => (
              <li key={child.id} className="pl-4 font-thin">
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
  const { nestedHeadings } = useHeadingsData();

  return (
    <div className="">
      <nav aria-label="Table of Contents" className="sticky top-10">
        <Headings headings={nestedHeadings} />
      </nav>
    </div>
  )
};

export default TableOfContents;
