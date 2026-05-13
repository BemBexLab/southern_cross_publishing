const heroImageSrc = "/contact/Contact Us_Mesa de trabajo 1 1.svg";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#f6efd6] px-4 pt-30 sm:px-6 sm:pt-22 lg:px-8 lg:pt-24 xl:overflow-visible"
      style={{
        backgroundImage: `url("/ebook-services/Mask group.webp")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:gap-2">
        <div className="max-w-2xl pb-2 text-center sm:pb-4 xl:pb-16 xl:text-left xl:translate-y-20">
          <h1 className="goneva mx-auto max-w-[11ch] text-4xl leading-[0.96] text-[#078c52] sm:text-5xl lg:text-6xl xl:mx-0 xl:max-w-2xl xl:text-7xl">
            Contact Southern Cross Publishing
          </h1>

          <p className="montserrat mx-auto mt-6 max-w-xl text-base leading-[1.35] text-[#5d5d55] sm:mt-7 sm:text-lg md:text-xl xl:mx-0 xl:mt-8 xl:leading-[1.2]">
            Tell us where you are with your book, we&apos;ll take it from there.
            No pressure, no obligations. Just an honest conversation about how
            we can help.
          </p>
        </div>

        <div className="relative flex min-h-[220px] items-end justify-center sm:min-h-[300px] md:min-h-[360px] xl:min-h-[520px]">
          <div className="absolute left-1/2 top-4 h-[115%] w-[115%] -translate-x-1/2 rounded-full sm:top-6 xl:top-8 xl:h-[120%] xl:w-[120%]" />

          <div className="relative z-10 w-full translate-y-1 sm:translate-y-2 md:translate-y-3 xl:translate-y-8">
            {heroImageSrc ? (
              <img
                src={heroImageSrc}
                alt=""
                className="mx-auto h-auto w-full max-w-md object-contain object-bottom sm:max-w-lg md:max-w-xl xl:max-w-4xl"
              />
            ) : (
              <div
                className="mx-auto h-[220px] w-full max-w-md sm:h-[300px] sm:max-w-lg md:h-[360px] md:max-w-xl xl:h-[560px] xl:max-w-4xl"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
