import NextPageMount from "../../components/NextPageMount.js";

export const metadata = {
  title: "Event Policies"
};

export default function EventPoliciesPage() {
  return <NextPageMount pageKey="policy" param="events" />;
}

