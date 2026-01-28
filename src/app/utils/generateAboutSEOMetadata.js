// utils/generateAboutSEOMetadata.js
export function generateAboutSEOMetadata(data, locale = "en") {
    const banner = data?.banner_data ?? {};

    const title =
        locale === "fr"
            ? banner?.french_page_meta_title || banner?.page_meta_title || "Default About Title"
            : banner?.page_meta_title || "Default About Title";

    const description =
        locale === "fr"
            ? banner?.french_page_meta_description || banner?.page_meta_description || "Default About Description"
            : banner?.page_meta_description || "Default About Description";

    const keywords =
        locale === "fr"
            ? banner?.french_page_meta_keywords || banner?.page_meta_keywords || "default, about, keywords"
            : banner?.page_meta_keywords || "default, about, keywords";

    const robots =
        locale === "fr"
            ? banner?.french_page_meta_robots || banner?.page_meta_robots || "index, follow"
            : banner?.page_meta_robots || "index, follow";

    const canonical =
        locale === "fr"
            ? banner?.french_page_meta_canonical || banner?.page_meta_canonical || `https://thedigitechmedia.com/${locale}/about`
            : banner?.page_meta_canonical || `https://thedigitechmedia.com/${locale}/about`;

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
