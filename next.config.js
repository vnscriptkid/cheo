module.exports = {
  reactStrictMode: true,
  basePath: "/cheo",
  assetPrefix: "/cheo/",
  ...(process.env.NODE_ENV === "production" ? { distDir: "build" } : {}),
};
