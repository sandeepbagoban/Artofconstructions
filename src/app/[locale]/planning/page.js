// app/[locale]/planning/page.js
import { planningPageData } from "../../utils/axios";
import ClientPlanning from "./ClientPlanning";
import { generateSEOMetadata } from "../../utils/seo";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const res = await planningPageData(locale);
  return generateSEOMetadata(res?.data, locale);
}

export default async function PlanningPage({ params }) {
  const { locale } = params;
  const data = await planningPageData(locale);
  return <ClientPlanning data={data} />;
}
