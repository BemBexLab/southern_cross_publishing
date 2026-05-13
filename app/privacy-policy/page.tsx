import LazyPrivacyContent from "./components/LazyPrivacyContent";
import TermsHero from "@/components/TermsHero";
import Link from "next/link";

const page = () => {
  return (
    <section className="overflow-x-clip bg-white">
      <TermsHero
              title={`Privacy Policy`}
              description={
                <>
                  <h2 className="goneva text-4xl">Introduction:</h2>
                  <p>
                    Southern Cross Publishing (“Company,” “we,” “our,” or “us”) is
                    committed to protecting the privacy and security of individuals
                    who access our website or engage with our services. This Privacy
                    Policy explains how we collect, use, store, and disclose personal
                    information obtained through your interaction with{" "}
                    <Link className="hover:underline" href="/">Southern Cross Publishing</Link>.<br />
                    By accessing our website or using our services, you acknowledge
                    that you have read and understood this Privacy Policy and agree to
                    its terms.
                  </p>
                </>
              }
            />
      <LazyPrivacyContent />
    </section>
  );
};

export default page;
