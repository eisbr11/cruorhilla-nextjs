const Config = {
  storyblok_dev_mode: process.env.STORYBLOK_DEV_MODE === 'true',
  storyblok_api_key: process.env.STORYBLOK_API_KEY,
};

export default Config;
