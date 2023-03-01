import { useState } from 'react'
import useHeadingsData from '~/hooks/useHeadingsData'
import useIntersectionObserver from '~/hooks/useIntersectionObserver'

const renderHeading = (
  heading: { level: number; id: string; title: string },
  activeId: string
) => {
  switch (heading.level) {
    case 0:
      return (
        <li
          key={heading.id}
          className={`px-5 first:pt-1 last:pb-1 ${
            heading.id === activeId
              ? 'dark:bg-slate-200 dark:text-slate-900'
              : ''
          }`}
        >
          <a
            href={`#${heading.id}`}
            className="font-semibold"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector(`#${heading.id}`)!.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            {heading.title}
          </a>
        </li>
      )
    case 1:
      return (
        <li
          key={heading.id}
          className={`px-5 pl-9 font-thin ${
            heading.id === activeId ? 'bg-slate-200 dark:text-slate-900' : ''
          }`}
        >
          <a
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector(`#${heading.id}`)!.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            {heading.title}
          </a>
        </li>
      )
  }
}

const Headings = ({
  headings,
  activeId,
}: {
  headings: any[]
  activeId: string
}) => (
  <ul className="border-slate-900 text-primary dark:border-slate-200 border rounded">
    {headings.map((heading) => renderHeading(heading, activeId))}
  </ul>
)

/*
for parent and child headings
<ul className="border-slate-900 dark:border-slate-200 border rounded dark:bg-slate-200">
    {headings.map((heading) => (
      <li
        key={heading.id}
        className={`px-5 first:pt-1 last:pb-1 ${
          heading.id === activeId
            ? 'bg-slate-200 dark:text-slate-900'
            : 'bg-gray-900/95'
        }`}
      >
        <a
          href={`#${heading.id}`}
          className="font-semibold"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector(`#${heading.id}`)!.scrollIntoView({
              behavior: 'smooth',
            })
          }}
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child: any) => (
              <li
                key={child.id}
                className={`pl-4 font-thin ${
                  child.id === activeId
                    ? 'bg-slate-200 dark:text-slate-900'
                    : ''
                }`}
              >
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(`#${child.id}`)!.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
  */

// https://www.emgoto.com/react-table-of-contents/
const TableOfContents = () => {
  const [activeId, setActiveId] = useState('')
  const { nestedHeadings } = useHeadingsData()
  useIntersectionObserver(setActiveId)

  const flattenHeadings = (headings: any[]) => {
    console.log('head', headings)
    return headings.reduce((currentValue, heading) => {
      const arr = []
      arr.push({ level: 0, id: heading.id, title: heading.title })

      if (heading.items.length > 0) {
        heading.items.forEach((subheading: any) => {
          arr.push({ level: 1, id: subheading.id, title: subheading.title })
        })
      }

      return currentValue.concat(arr)
    }, [])
  }
  console.log(flattenHeadings(nestedHeadings))
  return (
    <div className="mx-auto max-w-3xl lg:mr-10">
      <nav aria-label="Table of Contents" className="sticky top-10 ">
        <Headings
          headings={flattenHeadings(nestedHeadings)}
          activeId={activeId}
        />
      </nav>
    </div>
  )
}

export default TableOfContents
