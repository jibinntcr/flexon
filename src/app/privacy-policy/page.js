import NextPageMount from "../../components/NextPageMount.js";

export const metadata = {
  title: "Privacy Notice"
};

export default function PrivacyPolicyPage() {
  return <NextPageMount pageKey="policy" param="privacy" />;
}

