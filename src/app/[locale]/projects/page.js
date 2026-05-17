import { projectsPageData } from '@/app/utils/axios';
import ClientProjectsGallery from './ClientProjects';

export default async function ProjectsIndexPage({ params }) {
    const { locale } = await params;

    // Try each category slug until one works
    const categorySlugs = ['residential', 'horeca-et-commerce', 'nouvelles-constructions', 'residentielle', 'horeca-commercial'];
    
    let data = null;
    for (const slug of categorySlugs) {
        data = await projectsPageData(locale, slug);
        if (data?.data?.project_tabs?.length) break;
    }

    return <ClientProjectsGallery data={data} locale={locale} />;
}