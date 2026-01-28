
import { homePageData } from "../utils/axios";
import { generateHomeSEOMetadata } from "../utils/generateHomeSEOMetadata";
import ClientHome from "./home/ClientHome";

export async function generateMetadata({ params }) {
    const { locale } = params;
    const data = await homePageData(locale);
    return generateHomeSEOMetadata(data?.data, locale);
}

export default async function HomePage({ params }) {
    const { locale } = params;
    const data = await homePageData(locale);

    return <ClientHome data={data} />;
}
