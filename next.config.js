const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  images: {
    domains: ['a.storyblok.com'],
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/]
  },
});
