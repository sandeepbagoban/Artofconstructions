import { projectsPageData } from '@/app/utils/axios';
import ClientProjectsGallery from './ClientProjects';

export default async function ProjectsIndexPage({ params }) {
    const { locale } = await params;

    // Use the first real category slug from your API
    const data = await projectsPageData(locale, 'residential');

    return <ClientProjectsGallery data={data} locale={locale} />;
}