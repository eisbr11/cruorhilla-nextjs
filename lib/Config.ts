const Config = {
  storyblok_dev_mode: process.env.STORYBLOK_DEV_MODE === 'true',
  storyblok_preview_token: process.env.STORYBLOK_PREVIEW_TOKEN,
};

export default Config;
