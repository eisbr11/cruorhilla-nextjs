const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ['a.storyblok.com'],
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
});
