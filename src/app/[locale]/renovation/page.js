// app/[locale]/renovation/page.js
import { renovationPageData } from "../../utils/axios";
import ClientRenovation from "./ClientRenovation";
import { generateSEOMetadata } from "../../utils/seo";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const res = await renovationPageData(locale);
  return generateSEOMetadata(res?.data, locale);
}

export default async function RenovationPage({ params }) {
  const { locale } = params;
  const data = await renovationPageData(locale);
  return <ClientRenovation data={data} />;
}
