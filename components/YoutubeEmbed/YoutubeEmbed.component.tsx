import YouTube, { Options } from 'react-youtube';

import useStyles from './YoutubeEmbed.styles';

interface IYoutubeEmbedProps {
  ytId: string,
}

const YoutubeEmbed = ({ ytId }: IYoutubeEmbedProps) => {
  const classes = useStyles();
  const youtubeOptions: Options = {
    height: '390',
    width: '640',
    playerVars: {
      showinfo: 0,
      controls: 2,
    },
  };

  return (
    <div className={classes.wrapper}>
      <YouTube
        videoId={ytId}
        opts={youtubeOptions}
        className={classes.youtubeEmbed}
      />
    </div>
  );
};

export default YoutubeEmbed;
