import { aboutPageData } from "../../utils/axios";
import ClientAbout from "./ClientAbout";
import { generateAboutSEOMetadata } from "../../utils/generateAboutSEOMetadata";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const res = await aboutPageData(locale);
  return generateAboutSEOMetadata(res?.data, locale);
}

export default async function AboutPage({ params }) {
  const { locale } = params;
  const data = await aboutPageData(locale);
  return <ClientAbout data={data} />;
}
