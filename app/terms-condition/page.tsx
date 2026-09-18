import type { Metadata } from "next";
import TermsHero from "@/components/TermsHero";
import LazyTermsContent from "./components/LazyTermsContent";
import Link from "next/link";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms and Conditions",
  description:
    "Review the Crux Publishing House terms and conditions for using our website and publishing services.",
  path: "/terms-condition",
});

const page = () => {
  return (
    <section className="overflow-x-clip bg-white">
      <TermsHero
        title={`Terms and Conditions`}
      />
      <LazyTermsContent />
    </section>
  );
};

export default page;
