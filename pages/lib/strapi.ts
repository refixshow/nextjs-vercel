import Strapi from "strapi-sdk-js";

const strapi = new Strapi({
  url: process.env.NEXT_PUBLIC_STRAPI_URL,
  prefix: "/api",
  axiosOptions: {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  },
});

export const getLandingPage = async () => {
  try {
    return await strapi.find("landing-pages");
  } catch (err) {
    console.error(err);
    return null;
  }
};
