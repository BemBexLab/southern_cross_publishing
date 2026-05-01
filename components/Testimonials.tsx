import React from 'react'

const testimonials = [
  {
    name: 'Elizabeth',
    location: 'Chicago',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    name: 'Catherine',
    location: 'New York',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    name: 'Victoria',
    location: 'Washington, DC',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#f7f0d7] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1220px]">
        <div className="mx-auto max-w-[660px] text-center">
          <p className="montserrat text-[1.35rem] italic font-medium text-[#232323]">
            Read Testimonials
          </p>
          <h2 className="goneva mt-2 text-[2rem] leading-none text-[#018752] sm:text-[2.35rem] lg:text-[2.7rem]">
            From Our Happy Customers
          </h2>
          <p className="montserrat mx-auto mt-4 max-w-[540px] text-[0.9rem] leading-[1.35] text-[#5f5b4d] sm:text-[0.95rem]">
            Lorem ipsum dolor sit amet consectetur. Congue eget auctor turpis
            pharetra. Odio consectetur eget scelerisque sodales. Aliquam
            ullamcorper elementum donec mi semper justo. Enim cursus pulvinar
            elementum id mauris.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[10px] bg-white px-6 py-5 shadow-[0_18px_40px_rgba(185,176,126,0.18)]"
            >
              <div className="text-[1.05rem] tracking-[0.14em] text-[#f2bf17]">
                ★★★★★
              </div>

              <p className="montserrat mt-5 max-w-[245px] text-[0.84rem] leading-[1.4] text-[#7a766a]">
                {testimonial.body}
              </p>

              <div className="mt-10">
                <h3 className="montserrat text-[0.88rem] font-bold text-[#202020]">
                  {testimonial.name}
                </h3>
                <p className="montserrat mt-1 text-[0.68rem] text-[#9b978c]">
                  {testimonial.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between lg:mt-14">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2ba870] text-[#2ba870] transition hover:bg-[#2ba870] hover:text-[#f7f0d7]"
          >
            ←
          </button>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#d7d2b6]" />
            <span className="h-[2px] w-8 bg-[#2ba870]" />
            <span className="h-px w-8 bg-[#d7d2b6]" />
            <span className="h-px w-8 bg-[#d7d2b6]" />
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2bf17] text-[#1b6f4c] transition hover:opacity-90"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
