type TYoutubeImageSize =
  'default' |
  'hqdefault' |
  'mqdefault' |
  'sddefault' |
  'maxresdefault' |
  '0' |
  'hq720';

export const getYoutubeThumbnailUrl = (
  ytId: string,
  imageSize: TYoutubeImageSize,
): string => {
  return `https://img.youtube.com/vi/${ytId}/${imageSize}.jpg`;
};
