const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  runtimeCaching,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest\.json$/]
});

module.exports = withPWA({
  images: {
    remotePatterns: [
      new URL('https://a.storyblok.com/**'),
      new URL('https://img.youtube.com/**'),
    ],
  },
});
