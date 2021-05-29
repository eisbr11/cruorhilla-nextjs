const Config = {
  storyblok_dev_mode: process.env.NODE_ENV === 'development',
  storyblok_api_key: process.env.STORYBLOK_API_KEY,
  social_media: {
    youtube: 'https://www.youtube.com/c/CruorhillaDe',
    fb: 'https://www.facebook.com/CruorHilla/',
    instagram: 'https://instagram.com/cruorhilla/',
    bandcamp: 'https://cruorhilla.bandcamp.com/',
    spotify: 'https://open.spotify.com/artist/3GcjUVyLkmpbXwCPixo5kr?si=Gca0BYemSqG_GiSz-M_JYw',
  },
  theme_ls_key: 'cruorhilla-theme',
};

export default Config;
