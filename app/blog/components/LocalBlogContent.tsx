import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import type { BlogContentBlock } from "@/data/BlogData";

export default function LocalBlogContent({ blocks }: { blocks: BlogContentBlock[] }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "heading": {
        const Heading = block.level;
        return <Heading key={index}>{block.text}</Heading>;
      }
      case "paragraphs":
        return (
          <div key={index}>
            {block.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
          </div>
        );
      case "list":
        return (
          <ul key={index} className="my-4 list-disc space-y-2 pl-6">
            {block.listItems.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        );
      case "table":
        return (
          <div key={index} className="my-7 overflow-x-auto rounded-xl border border-[#e4d9b9] bg-[#fff9e9] shadow-[0_8px_24px_rgba(80,64,24,0.08)]">
            <table
              style={{ margin: 0 }}
              className="w-full min-w-[520px] table-fixed border-separate border-spacing-0 text-left"
            >
              <colgroup>
                {Array.from({ length: block.columns }, (_, columnIndex) => (
                  <col key={columnIndex} style={{ width: `${100 / block.columns}%` }} />
                ))}
              </colgroup>
              {block.caption ? (
                <caption className="caption-top border-b border-[#e4d9b9] bg-[#f3ebd2] px-5 py-4 text-left font-semibold text-[#1f6c45]">
                  {block.caption}
                </caption>
              ) : null}
              <thead className="bg-[#018752] text-[#fff9e9]">
                <tr>
                  {block.headers.map((header, headerIndex) => (
                    <th key={headerIndex} scope="col" className="border-b-2 border-[#fdd118] px-5 py-3.5 text-sm font-semibold tracking-wide first:rounded-tl-sm last:rounded-tr-sm">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`transition-colors hover:bg-[#f2f0d4] ${rowIndex % 2 === 1 ? "bg-[#fbf5df]" : "bg-[#fffdf3]"}`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border-b border-[#e9dfc5] px-5 py-4 align-top text-sm leading-6 text-[#5b5548] last:border-b-0">
                        {cellIndex === 0 ? (
                          <span className="font-semibold text-[#1f6c45]">{cell}</span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "faqs":
        return (
          <section
            key={index}
            className="my-10 rounded-xl border border-[#e4d9b9] bg-[#f3ebd2] px-5 py-6 sm:px-8 sm:py-8"
            aria-labelledby={`blog-faq-heading-${index}`}
          >
            <h2
              id={`blog-faq-heading-${index}`}
              className="goneva mb-6 text-2xl leading-tight text-[#018752] sm:text-3xl"
            >
              {block.heading}
            </h2>
            <div className="divide-y divide-[#ded1ac]">
              {block.items.map((item, faqIndex) => (
                <details key={faqIndex} className="group py-5 first:pt-0 last:pb-0">
                  <summary className="dm-sans flex cursor-pointer list-none items-start justify-between gap-4 rounded-md text-base font-semibold leading-6 text-[#1f6c45] marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#018752] [&::-webkit-details-marker]:hidden">
                    <span>
                      <span className="mr-2 text-[#b99c27]">{faqIndex + 1}.</span>
                      {item.question}
                    </span>
                    <FaChevronDown
                      aria-hidden="true"
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-[#018752] transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="dm-sans mt-3 pr-8 text-[0.95rem] leading-7 text-[#5b5548]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        );
      case "image":
        return (
          <Image
            key={index}
            src={block.image.url}
            alt={block.image.alt}
            width={block.image.width ?? 1200}
            height={block.image.height ?? 630}
            sizes="(max-width: 1023px) 100vw, 760px"
            className="h-auto max-w-full"
          />
        );
    }
  });
}
