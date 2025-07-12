import { defineRobotRules } from "@nuxt/robots";

export default defineRobotRules([
  {
    userAgent: "*",
    allow: "/",
    disallow: ["/404/"],
  },
]);

export const sitemap = "https://vorobeyart.ru/sitemap.xml";
