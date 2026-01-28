import axios from "axios";

export const DOMAIN = "https://www.cms.artconstruction.be/";
export const BASEURL = axios.create({
    baseURL: DOMAIN + "api/",
});
export const HOMEPAGE = "home-page";
export const ABOUTUS = "about-us";
export const CONTACTUS = "/contact-us";
export const RENOVATION = "service-details/renovation";
export const PLANNING = "service-details/planning";
export const DEMOLITION = "service-details/demolition";
export const PROJECTS = "project-details";
export const PROJECTDETAIL = "project-image-gallery";