import React from "react";
import Image from "next/image";

const LookingForSelfPublishing = () => {
  return (
    <section className="bg-[#EBE5CC] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-[1240px] lg:hidden">
        <h2 className="goneva w-full text-[2rem] leading-[1.05] text-[#018752] sm:text-[2.45rem] md:text-[2.85rem]">
          Looking for a Self Publishing Company in Australia That Actually Delivers?
        </h2>

        <div className="relative mt-8 flex justify-center">
          <Image
            src="/home/Illustration for Web-02-01 1.svg"
            alt="Illustration of a writer with books, a pencil, and an open book"
            width={520}
            height={500}
            className="h-auto w-full max-w-[360px] object-contain sm:max-w-[430px] md:max-w-[470px]"
            sizes="(min-width: 768px) 470px, (min-width: 640px) 430px, 360px"
          />
        </div>

        <div className="montserrat mt-8 max-w-[720px] space-y-4 text-[1rem] leading-[1.35] text-[#2e2d28] sm:text-[1.02rem] sm:leading-[1.4] md:text-[1.05rem] md:leading-[1.45]">
          <p>
            Southern Cross Publishing was created around one simple belief: that good stories shouldn't stay locked inside the person who lived them. We've walked alongside hundreds of authors across Australia and around the world, helping them move from scattered notes and rough drafts to polished, professionally published books that genuinely connect with readers. Not because those authors were extraordinary. Because they showed up, and we did the rest.
          </p>
          <p>
            What we offer isn't just a service. It's a partnership. From the moment you reach out, you have a dedicated team in your corner, people who care about your book almost as much as you do. We take care of the manufacturing, the design, formatting, distribution, and marketing, so your only job is to trust the process and stay excited about what you're creating.
          </p>
          <p>
            The authors who publish are no different from the ones who don't, except that they made the call. If your story has been waiting long enough, this is the sign you were looking for.
          </p>
          <p>
            Reach out to Southern Cross Publishing, and let's get your book written, built, and out into the world.
          </p>
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1240px] items-center gap-10 md:gap-12 lg:grid lg:items-stretch lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="relative flex justify-center lg:justify-start lg:self-stretch">
          <Image
            src="/home/Illustration for Web-02-01 1.svg"
            alt="Illustration of a writer with books, a pencil, and an open book"
            width={520}
            height={500}
            className="h-auto w-full max-w-[520px] object-contain lg:h-full lg:max-h-[660px] lg:object-left"
            sizes="(min-width: 1024px) 520px"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="goneva w-full max-w-none text-[3rem] leading-[1.05] text-[#018752]">
            Looking for a Self Publishing Company in Australia That Actually Delivers?
          </h2>

          <div className="montserrat mt-7 max-w-[680px] space-y-4 text-[1.05rem] leading-[1.18] text-[#2e2d28]">
            <p>
            Southern Cross Publishing was created around one simple belief: that good stories shouldn't stay locked inside the person who lived them. We've walked alongside hundreds of authors across Australia and around the world, helping them move from scattered notes and rough drafts to polished, professionally published books that genuinely connect with readers. Not because those authors were extraordinary. Because they showed up, and we did the rest.
          </p>
          <p>
            What we offer isn't just a service. It's a partnership. From the moment you reach out, you have a dedicated team in your corner, people who care about your book almost as much as you do. We take care of the manufacturing, the design, formatting, distribution, and marketing, so your only job is to trust the process and stay excited about what you're creating.
          </p>
          <p>
            The authors who publish are no different from the ones who don't, except that they made the call. If your story has been waiting long enough, this is the sign you were looking for.
          </p>
          <p>
            Reach out to Southern Cross Publishing, and let's get your book written, built, and out into the world.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookingForSelfPublishing;
