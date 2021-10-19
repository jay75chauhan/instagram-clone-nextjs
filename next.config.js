const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  images: {
    domains: [
      "links.papareact.com",

      "cdn-icons.flaticon.com",

      "cdn-icons-png.flaticon.com",
    ],
  },
});
