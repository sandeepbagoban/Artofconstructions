// utils/generateProjectSEOMetadata.js
export function generateProjectSEOMetadata(data, locale = "en") {
    const details = data?.project_details ?? [];
    // pick first project with a meta title or just the first one
    const project = details.find(p => p?.project_meta_title) || details[0] || {};

    const title =
        locale === "fr"
            ? project?.french_project_meta_title || project?.project_meta_title || "Default Project Title"
            : project?.project_meta_title || "Default Project Title";

    const description =
        locale === "fr"
            ? project?.french_project_meta_description || project?.project_meta_description || "Default Project Description"
            : project?.project_meta_description || "Default Project Description";

    const keywords =
        locale === "fr"
            ? project?.french_project_meta_keywords || project?.project_meta_keywords || "default, keywords"
            : project?.project_meta_keywords || "default, keywords";

    const robots =
        locale === "fr"
            ? project?.french_project_meta_robots || project?.project_meta_robots || "index, follow"
            : project?.project_meta_robots || "index, follow";

    const canonical =
        locale === "fr"
            ? project?.french_project_meta_canonical || project?.project_meta_canonical || `https://thedigitechmedia.com/${locale}/projects/${data?.banner_data?.project_slug}`
            : project?.project_meta_canonical || `https://thedigitechmedia.com/${locale}/projects/${data?.banner_data?.project_slug}`;

    const ogTitle =
        locale === "fr"
            ? project?.french_project_meta_og_title || project?.project_meta_og_title || title
            : project?.project_meta_og_title || title;

    const ogDescription =
        locale === "fr"
            ? project?.french_project_meta_og_description || project?.project_meta_og_description || description
            : project?.project_meta_og_description || description;

    const ogImage =
        locale === "fr"
            ? project?.french_project_meta_og_image
                ? [{ url: project.french_project_meta_og_image }]
                : project?.project_meta_og_image
                    ? [{ url: project.project_meta_og_image }]
                    : []
            : project?.project_meta_og_image
                ? [{ url: project.project_meta_og_image }]
                : [];

    const ogUrl =
        locale === "fr"
            ? project?.french_project_meta_og_url || project?.project_meta_og_url || canonical
            : project?.project_meta_og_url || canonical;

    return {
        title,
        description,
        keywords,
        robots,
        alternates: { canonical },
        openGraph: {
            title: ogTitle,
            description: ogDescription,
            url: ogUrl,
            siteName: "Artconstruction",
            images: ogImage,
            locale,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: ogTitle,
            description: ogDescription,
            images: ogImage.length ? [ogImage[0].url] : [],
        },
    };
}
