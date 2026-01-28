import axios from "axios";
import {
    ABOUTUS,
    BASEURL,
    CONTACTUS,
    DEMOLITION,
    HOMEPAGE,
    PLANNING,
    PROJECTS,
    RENOVATION,
    PROJECTDETAIL
} from "./api";

// Create a reusable axios instance
// const api = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL || "https://thedigitechmedia.com/theArt/public/",
// });



// Homepage API (pass locale dynamically)
export async function homePageData(locale = "en") {
    try {
        const response = await BASEURL.get(`${HOMEPAGE}?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", {
            message: error.message,
            config: error.config,
            response: error.response?.data,
        });
        return { error: true, message: error.message };
    }
}

export async function aboutPageData(locale = "en") {
    try {
        const response = await BASEURL.get(`${ABOUTUS}?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", {
            message: error.message,
            config: error.config,
            response: error.response?.data,
        });
        return { error: true, message: error.message };
    }
}

export async function renovationPageData(locale = "en") {
    try {
        // const res = await api.get(RENOVATION);
        const response = await BASEURL.get(`${RENOVATION}?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", {
            message: error.message,
            config: error.config,
            response: error.response?.data,
        });
        return { error: true, message: error.message };
    }
}

export async function planningPageData(locale = "en") {
    try {
        // const res = await api.get(PLANNING);
        const response = await BASEURL.get(`${PLANNING}?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", error.message);
        return [];
    }
}

export async function demolitionPageData(locale = "en") {
    try {
        // const res = await api.get(DEMOLITION);
        const response = await BASEURL.get(`${DEMOLITION}?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", error.message);
        return [];
    }
}

export async function projectsPageData(locale = "en", slug) {
    try {
        // const res = await api.get(PROJECTS);
        const response = await BASEURL.get(`${PROJECTS}/${slug}?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", error.message);
        return [];
    }
}

export async function projectDetailData(locale = "en", slug) {
    try {

        // const res = await api.get(PROJECTS);
        const response = await BASEURL.get(`${PROJECTDETAIL}/${slug}?lang=${locale}`);
        // const response = await BASEURL.get(`${PROJECTDETAIL}/nouv-pro-1?lang=${locale}`);
        return response.data;
    } catch (error) {
        console.error("API fetch error:", error.message);
        return [];
    }
}

export const submitContactForm = async (formData) => {
    try {
        const response = await BASEURL.post(CONTACTUS, {
            your_name: formData.your_name,
            email_id: formData.email_id,
            subject: formData.subject,
            message: formData.message,
        });
        return response.data;
    } catch (error) {
        console.error("Contact form submission error:", error.message);
        throw error;
    }
};
