export function generateSEOMetadata(data, locale = "en") {
    // Use banner_data for home page
    const banner = data?.banner_data ?? null;
    // Use service for service pages
    const service = data?.service ?? null;

    // Choose source: banner first, then service
    const source = banner || service || {};

    const title =
        locale === "fr"
            ? source?.french_page_meta_title || source?.service_detail_meta_title || "Default Title"
            : source?.page_meta_title || source?.service_detail_meta_title || "Default Title";

    const description =
        locale === "fr"
            ? source?.french_page_meta_description || source?.service_detail_meta_description || "Default Description"
            : source?.page_meta_description || source?.service_detail_meta_description || "Default Description";

    const keywords =
        locale === "fr"
            ? source?.french_page_meta_keywords || source?.service_detail_meta_keywords || "default, keywords"
            : source?.page_meta_keywords || source?.service_detail_meta_keywords || "default, keywords";

    const robots =
        locale === "fr"
            ? source?.french_page_meta_robots || source?.service_detail_meta_robots || "index, follow"
            : source?.page_meta_robots || source?.service_detail_meta_robots || "index, follow";

    const canonical =
        locale === "fr"
            ? source?.french_page_meta_canonical || source?.service_detail_meta_canonical || `https://thedigitechmedia.com/${locale}/`
            : source?.page_meta_canonical || source?.service_detail_meta_canonical || `https://thedigitechmedia.com/${locale}/`;

    const ogTitle =
        locale === "fr"
            ? source?.french_page_meta_og_title || source?.service_detail_meta_og_title || title
            : source?.page_meta_og_title || source?.service_detail_meta_og_title || title;

    const ogDescription =
        locale === "fr"
            ? source?.french_page_meta_og_description || source?.service_detail_meta_og_description || description
            : source?.page_meta_og_description || source?.service_detail_meta_og_description || description;

    const ogImage =
        locale === "fr"
            ? source?.french_page_meta_og_image
                ? [{ url: source.french_page_meta_og_image }]
                : source?.service_detail_meta_og_image
                    ? [{ url: source.service_detail_meta_og_image }]
                    : []
            : source?.page_meta_og_image
                ? [{ url: source.page_meta_og_image }]
                : source?.service_detail_meta_og_image
                    ? [{ url: source.service_detail_meta_og_image }]
                    : [];

    const ogUrl =
        locale === "fr"
            ? source?.french_page_meta_og_url || source?.service_detail_meta_og_url || canonical
            : source?.page_meta_og_url || source?.service_detail_meta_og_url || canonical;

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
