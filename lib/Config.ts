const Config = {
  storyblok_dev_mode: process.env.NODE_ENV === 'development',
  storyblok_api_key: process.env.STORYBLOK_API_KEY,
};

export default Config;
