import { useEffect, useState } from "react";

const getNestedHeadings = (headingElements: any) => {
  const nestedHeadings: any[] = [];

  headingElements.forEach((heading: HTMLHeadingElement, index: number) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
};

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState<any[]>([]);

  useEffect(() => {
    const headingElements: any[] = Array.from(
      document.querySelectorAll("h2, h3")
    );

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

export default useHeadingsData;
