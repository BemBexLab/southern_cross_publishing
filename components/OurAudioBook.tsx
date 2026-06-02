import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const descriptionParagraphs = [
  "If you have already published a print or eBook and want to reach the growing audience of listeners, we convert your existing book into a fully produced audiobook without disrupting what you have already built.",
  "If you are publishing a new book and want audiobook production to run alongside your print and eBook release, we coordinate the timelines so all three formats launch together or in close succession.",
  "If you have already recorded your own narration and simply need professional editing, mastering, and distribution, we step in at the stage you need us, you do not have to start from scratch.",
  "We work across all genres including: Fiction, non-fiction, memoirs, biographies, self help, health and wellness, children's books, business guides, and personal development.",
];

const OurAudioBook = () => {
  return (
    <section className="bg-[#f7f1d7]">
      <div className="mx-4 flex items-center py-12 sm:mx-8 sm:py-16 lg:mx-12 lg:min-h-screen lg:py-0 xl:mx-16">
        <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 xl:gap-12">
          <div className="mx-auto w-full lg:mx-0">
            <h2 className="goneva w-full max-w-none text-2xl leading-tight text-[#018752] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              Our Audiobook Production Service Is Built for Authors Who Want It
              Done Properly
            </h2>

            <div className="mt-6 w-full max-w-none space-y-3 text-lg leading-relaxed text-[#66665d] sm:mt-7 lg:mt-4 lg:text-lg lg:leading-snug">
              {descriptionParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <a
              href="/contact"
              className="montserrat mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#FDD118] px-6 text-sm font-bold text-[#018752] transition hover:bg-[#efbf17] sm:mt-10 sm:w-auto sm:px-8 sm:text-base"
            >
              Get a Free Publishing Quote
              <FaArrowRight className="h-4 w-4 shrink-0" />
            </a>
          </div>

          <div className="relative mx-auto flex w-full max-w-xl justify-center sm:max-w-2xl md:max-w-3xl lg:mx-0 lg:max-w-4xl lg:justify-end">
            <div className="relative aspect-[1.03/0.96] w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl lg:translate-x-2 xl:max-w-4xl">
              <Image
                src="/audiobook-service/Frame%201000001662.svg"
                alt="Illustration of an audiobook author working at a desk"
                fill
                sizes="(max-width: 1024px) 92vw, 48vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAudioBook;
