import { projectDetailData, projectsPageData } from "@/app/utils/axios";
import ClientProjectsGallery from "../ClientProjects";
import ProjectDetailGallery from "../ProjectDetailGallery";
import { generateProjectSEOMetadata } from "@/app/utils/generateProjectSEOMetadata";

export async function generateMetadata({ params }) {
    const { locale, slug } = params;
    const slugLower = slug.toLowerCase();

    let data;
    let isDetailPage = false;

    if (
        slugLower === "residential" ||
        slugLower === "horeca-commercial" ||
        slugLower === "nouvelles-constructions" ||
        slugLower === "residentielle" ||
        slugLower === "horeca-et-commerce"
    ) {
        // Projects listing page
        data = await projectsPageData(locale, slugLower);
    } else {
        // Project detail page
        data = await projectDetailData(locale, slugLower);
        isDetailPage = true;
    }

    return generateProjectSEOMetadata(data?.data, locale, isDetailPage);
}
export default async function ProjectPage({ params }) {
    const { locale, slug } = params;
    const slugLower = slug.toLowerCase();

    let data;
    let isDetailPage = false;

    if (
        slugLower === "residential" ||
        slugLower === "horeca-commercial" ||
        slugLower === "nouvelles-constructions" ||
        slugLower === "residentielle" ||
        slugLower === "horeca-et-commerce"
    ) {
        data = await projectsPageData(locale, slugLower);
    } else {
        data = await projectDetailData(locale, slugLower);
        isDetailPage = true;
    }

    return (
        <>
            {isDetailPage ? (
                <ProjectDetailGallery
                    projectImages={data?.data?.project_images || []}
                    subProject={data?.data?.subProject}
                    slug={slugLower}
                />
            ) : (
                <ClientProjectsGallery data={data} locale={locale} />
            )}
        </>
    );
}
