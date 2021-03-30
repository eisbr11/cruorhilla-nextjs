import useStyles from './VideoItem.styles';

const VideoItem = ({
  title,
  ytId,
}: {
  title: string,
  ytId: string,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {title}
      :
      {ytId}
    </div>
  );
};

export default VideoItem;
