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
    return await strapi.findOne("landing-pages", 1, {
      fields: ["*"],
      populate: ["content", "img"],
    });
  } catch (err) {
    console.error("Error From landing-pages: ", err);
    return null;
  }
};
