// utils/generateHomeSEOMetadata.js
export function generateHomeSEOMetadata(data, locale = "en") {
    const banner = data?.banner_data ?? {};

    const title =
        locale === "fr"
            ? banner?.french_page_meta_title || banner?.page_meta_title || "Default Home Title"
            : banner?.page_meta_title || "Default Home Title";

    const description =
        locale === "fr"
            ? banner?.french_page_meta_description || banner?.page_meta_description || "Default Home Description"
            : banner?.page_meta_description || "Default Home Description";

    const keywords =
        locale === "fr"
            ? banner?.french_page_meta_keywords || banner?.page_meta_keywords || "default, keywords"
            : banner?.page_meta_keywords || "default, keywords";

    const robots =
        locale === "fr"
            ? banner?.french_page_meta_robots || banner?.page_meta_robots || "index, follow"
            : banner?.page_meta_robots || "index, follow";

    const canonical =
        locale === "fr"
            ? banner?.french_page_meta_canonical || banner?.page_meta_canonical || `https://thedigitechmedia.com/${locale}/`
            : banner?.page_meta_canonical || `https://thedigitechmedia.com/${locale}/`;

    const ogTitle =
        locale === "fr"
            ? banner?.french_page_meta_og_title || banner?.page_meta_og_title || title
            : banner?.page_meta_og_title || title;

    const ogDescription =
        locale === "fr"
            ? banner?.french_page_meta_og_description || banner?.page_meta_og_description || description
            : banner?.page_meta_og_description || description;

    const ogImage =
        locale === "fr"
            ? banner?.french_page_meta_og_image
                ? [{ url: banner.french_page_meta_og_image }]
                : banner?.page_meta_og_image
                    ? [{ url: banner.page_meta_og_image }]
                    : []
            : banner?.page_meta_og_image
                ? [{ url: banner.page_meta_og_image }]
                : [];

    const ogUrl =
        locale === "fr"
            ? banner?.french_page_meta_og_url || banner?.page_meta_og_url || canonical
            : banner?.page_meta_og_url || canonical;

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
