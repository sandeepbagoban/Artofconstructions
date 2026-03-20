module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/[locale]/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/layout.js [app-rsc] (ecmascript)"));
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/app/utils/api.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ABOUTUS",
    ()=>ABOUTUS,
    "BASEURL",
    ()=>BASEURL,
    "CONTACTUS",
    ()=>CONTACTUS,
    "DEMOLITION",
    ()=>DEMOLITION,
    "DOMAIN",
    ()=>DOMAIN,
    "HOMEPAGE",
    ()=>HOMEPAGE,
    "PLANNING",
    ()=>PLANNING,
    "PROJECTDETAIL",
    ()=>PROJECTDETAIL,
    "PROJECTS",
    ()=>PROJECTS,
    "RENOVATION",
    ()=>RENOVATION
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const DOMAIN = "https://www.cms.artconstruction.be/";
const BASEURL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: DOMAIN + "api/"
});
const HOMEPAGE = "home-page";
const ABOUTUS = "about-us";
const CONTACTUS = "/contact-us";
const RENOVATION = "service-details/renovation";
const PLANNING = "service-details/planning";
const DEMOLITION = "service-details/demolition";
const PROJECTS = "project-details";
const PROJECTDETAIL = "project-image-gallery";
}),
"[project]/src/app/utils/axios.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aboutPageData",
    ()=>aboutPageData,
    "demolitionPageData",
    ()=>demolitionPageData,
    "homePageData",
    ()=>homePageData,
    "planningPageData",
    ()=>planningPageData,
    "projectDetailData",
    ()=>projectDetailData,
    "projectsPageData",
    ()=>projectsPageData,
    "renovationPageData",
    ()=>renovationPageData,
    "submitContactForm",
    ()=>submitContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/api.js [app-rsc] (ecmascript)");
;
;
async function homePageData(locale = "en") {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BASEURL"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HOMEPAGE"]}?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", {
            message: error.message,
            config: error.config,
            response: error.response?.data
        });
        return {
            error: true,
            message: error.message
        };
    }
}
async function aboutPageData(locale = "en") {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BASEURL"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ABOUTUS"]}?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", {
            message: error.message,
            config: error.config,
            response: error.response?.data
        });
        return {
            error: true,
            message: error.message
        };
    }
}
async function renovationPageData(locale = "en") {
    try {
        // const res = await api.get(RENOVATION);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BASEURL"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RENOVATION"]}?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", {
            message: error.message,
            config: error.config,
            response: error.response?.data
        });
        return {
            error: true,
            message: error.message
        };
    }
}
async function planningPageData(locale = "en") {
    try {
        // const res = await api.get(PLANNING);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BASEURL"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PLANNING"]}?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", error.message);
        return [];
    }
}
async function demolitionPageData(locale = "en") {
    try {
        // const res = await api.get(DEMOLITION);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BASEURL"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEMOLITION"]}?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", error.message);
        return [];
    }
}
async function projectsPageData(locale = "en", slug) {
    try {
        // const res = await api.get(PROJECTS);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BASEURL"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROJECTS"]}/${slug}?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", error.message);
        return [];
    }
}
async function projectDetailData(locale = "en", slug) {
    try {
        // const res = await api.get(PROJECTS);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BASEURL"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROJECTDETAIL"]}/${slug}?lang=${locale}`);
        // const response = await BASEURL.get(`${PROJECTDETAIL}/nouv-pro-1?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", error.message);
        return [];
    }
}
const submitContactForm = async (formData)=>{
    try {
        const response = await api.post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONTACTUS"], {
            your_name: formData.your_name,
            email_id: formData.email_id,
            subject: formData.subject,
            message: formData.message
        });
        return response.data;
    } catch (error) {
        console.error("Contact form submission error:", error.message);
        throw error;
    }
};
}),
"[project]/src/app/[locale]/about/ClientAbout.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/[locale]/about/ClientAbout.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/[locale]/about/ClientAbout.js <module evaluation>", "default");
}),
"[project]/src/app/[locale]/about/ClientAbout.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/[locale]/about/ClientAbout.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/[locale]/about/ClientAbout.js", "default");
}),
"[project]/src/app/[locale]/about/ClientAbout.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$about$2f$ClientAbout$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/[locale]/about/ClientAbout.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$about$2f$ClientAbout$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/[locale]/about/ClientAbout.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$about$2f$ClientAbout$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/utils/generateAboutSEOMetadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/generateAboutSEOMetadata.js
__turbopack_context__.s([
    "generateAboutSEOMetadata",
    ()=>generateAboutSEOMetadata
]);
function generateAboutSEOMetadata(data, locale = "en") {
    const banner = data?.banner_data ?? {};
    const title = locale === "fr" ? banner?.french_page_meta_title || banner?.page_meta_title || "Default About Title" : banner?.page_meta_title || "Default About Title";
    const description = locale === "fr" ? banner?.french_page_meta_description || banner?.page_meta_description || "Default About Description" : banner?.page_meta_description || "Default About Description";
    const keywords = locale === "fr" ? banner?.french_page_meta_keywords || banner?.page_meta_keywords || "default, about, keywords" : banner?.page_meta_keywords || "default, about, keywords";
    const robots = locale === "fr" ? banner?.french_page_meta_robots || banner?.page_meta_robots || "index, follow" : banner?.page_meta_robots || "index, follow";
    const canonical = locale === "fr" ? banner?.french_page_meta_canonical || banner?.page_meta_canonical || `https://artofconstructions.vercel.app/${locale}/about` : banner?.page_meta_canonical || `https://artofconstructions.vercel.app/${locale}/about`;
    const ogTitle = locale === "fr" ? banner?.french_page_meta_og_title || banner?.page_meta_og_title || title : banner?.page_meta_og_title || title;
    const ogDescription = locale === "fr" ? banner?.french_page_meta_og_description || banner?.page_meta_og_description || description : banner?.page_meta_og_description || description;
    const ogImage = locale === "fr" ? banner?.french_page_meta_og_image ? [
        {
            url: banner.french_page_meta_og_image
        }
    ] : banner?.page_meta_og_image ? [
        {
            url: banner.page_meta_og_image
        }
    ] : [] : banner?.page_meta_og_image ? [
        {
            url: banner.page_meta_og_image
        }
    ] : [];
    const ogUrl = locale === "fr" ? banner?.french_page_meta_og_url || banner?.page_meta_og_url || canonical : banner?.page_meta_og_url || canonical;
    return {
        title,
        description,
        keywords,
        robots,
        alternates: {
            canonical
        },
        openGraph: {
            title: ogTitle,
            description: ogDescription,
            url: ogUrl,
            siteName: "Artconstruction",
            images: ogImage,
            locale,
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title: ogTitle,
            description: ogDescription,
            images: ogImage.length ? [
                ogImage[0].url
            ] : []
        }
    };
}
}),
"[project]/src/app/[locale]/about/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/axios.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$about$2f$ClientAbout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[locale]/about/ClientAbout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$generateAboutSEOMetadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/generateAboutSEOMetadata.js [app-rsc] (ecmascript)");
;
;
;
;
async function generateMetadata({ params }) {
    const { locale } = params;
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aboutPageData"])(locale);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$generateAboutSEOMetadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateAboutSEOMetadata"])(res?.data, locale);
}
async function AboutPage({ params }) {
    const { locale } = params;
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aboutPageData"])(locale);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$about$2f$ClientAbout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        data: data
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/about/page.js",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/[locale]/about/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/about/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1e7d835a._.js.map