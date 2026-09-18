import type { Metadata } from "next";
import React from "react";
import Hero from "./components/Hero";
import GetInTouch from "@/components/GetInTouch";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Crux Publishing House",
  description:
    "Contact Crux Publishing House to discuss your manuscript, publishing goals, audiobook production, or a free consultation with our team.",
  path: "/contact",
});

const page = () => {
  return (
    <section>
      <Hero />
      <GetInTouch
        title="Let us know if anything needed. Searching of any guidance from an expert?"
        subtitle="Send Us a Message"
        paragraphs={["Fill in the form below, and one of our publishing consultants will get back to you within one business day. We're looking forward to hearing your story.", "We typically respond within 1 business day. Your information is kept strictly confidential. We'd Love to Hear From You Every Book Starts With a Conversation", "We know reaching out can feel like a big step. But it doesn't have to be complicated. Just tell us where you are with your book and what you're hoping to achieve, we'll figure out the rest together."]}
      />
    </section>
  );
};

export default page;
