import TermsHero from "@/components/TermsHero";
import LazyTermsContent from "./components/LazyTermsContent";
import Link from "next/link";

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
