import { projectsPageData, projectDetailData } from "@/app/utils/axios";
import ClientProjectsGallery from "../ClientProjects";
import ProjectDetailGallery from "../ProjectDetailGallery";

const CATEGORY_SLUGS = [
    'residential', 'horeca-commercial', 'nouvelles-constructions',
    'residentielle', 'horeca-et-commerce'
];

export default async function ProjectPage({ params }) {
    const { locale, slug } = await params;
    const slugLower = slug.toLowerCase();
    const isCategory = CATEGORY_SLUGS.includes(slugLower);

    if (isCategory) {
        const data = await projectsPageData(locale, slugLower);
        return <ClientProjectsGallery data={data} locale={locale} />;
    }

    // It's a project detail slug
    const data = await projectDetailData(locale, slugLower);
    return (
        <ProjectDetailGallery
            projectImages={data?.data?.project_images || []}
            subProject={data?.data?.subProject}
            slug={slugLower}
        />
    );
}