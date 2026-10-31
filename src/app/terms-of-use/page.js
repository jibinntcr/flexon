import NextPageMount from "../../components/NextPageMount.js";

export const metadata = {
  title: "Terms of Use"
};

export default function TermsOfUsePage() {
  return <NextPageMount pageKey="policy" param="terms" />;
}

