import { demolitionPageData, planningPageData } from "@/app/utils/axios";
import ClientDemolition from "./ClientDemolition";
import { generateSEOMetadata } from "@/app/utils/seo";


export async function generateMetadata({ params }) {
    const { locale } =await params;
    const res = await demolitionPageData(locale);
    return generateSEOMetadata(res?.data, locale);
}

export default async function DemolitionPage({ params }) {
    const { locale } = await params;
    const data = await demolitionPageData(locale);
    return <ClientDemolition data={data} />;
}
