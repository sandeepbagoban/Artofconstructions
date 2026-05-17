import { projectsPageData, projectDetailData } from "@/app/utils/axios";
import ClientProjectsGallery from "../ClientProjects";
import ProjectDetailGallery from "../ProjectDetailGallery";

// These are your fr_project_slug values from the API
const CATEGORY_SLUGS = [
    'residential', 'horeca-et-commerce', 'nouvelles-constructions',
    'residentielle', 'horeca-commercial'
];

export default async function ProjectPage({ params }) {
    const { locale, slug } = await params;
    const slugLower = slug.toLowerCase();

    if (CATEGORY_SLUGS.includes(slugLower)) {
        const data = await projectsPageData(locale, slugLower);
        return <ClientProjectsGallery data={data} locale={locale} />;
    }

    // project_type_slug → detail page
    const data = await projectDetailData(locale, slugLower);
    return (
        <ProjectDetailGallery
            data={data?.data}
            slug={slugLower}
            locale={locale}
        />
    );
}