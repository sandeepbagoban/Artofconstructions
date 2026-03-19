import { projectDetailData, projectsPageData } from "@/app/utils/axios";
import ClientProjectsGallery from "../ClientProjects";
import ProjectDetailGallery from "../ProjectDetailGallery";
import { generateProjectSEOMetadata } from "@/app/utils/generateProjectSEOMetadata";
import { notFound } from "next/navigation";

function parseParams(params) {
  try {
    if (params.value) {
      return JSON.parse(params.value);
    }
    return params;
  } catch (err) {
    console.error("Failed to parse params.value", err);
    return {};
  }
}

export async function generateMetadata({ params }) {
  const parsed = parseParams(params);
  const { locale, slug } = parsed;

  if (!slug) {
    return {};
  }

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

  return generateProjectSEOMetadata(data?.data, locale, isDetailPage);
}

export default async function ProjectPage({ params }) {
  const parsed = parseParams(params);
  const { locale, slug } = parsed;

  if (!slug) {
    return notFound(); // Next.js 404
  }

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