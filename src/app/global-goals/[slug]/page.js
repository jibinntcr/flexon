import NextPageMount from "../../../components/NextPageMount.js";
import { sdgs } from "../../../data/content.js";

export function generateStaticParams() {
  return sdgs.map((goal) => ({
    slug: goal.slug
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const goal = sdgs.find((s) => s.slug === resolvedParams?.slug);
  if (!goal) {
    return {
      title: "Global Goal Detail"
    };
  }
  return {
    title: `Goal ${goal.number}: ${goal.title}`,
    description: goal.explanation
  };
}

export default async function GlobalGoalDetailPage({ params }) {
  const resolvedParams = await params;
  return (
    <NextPageMount
      pageKey="global-goal-detail"
      param={resolvedParams?.slug || ""}
    />
  );
}

