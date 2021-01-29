import useStyles from '@components/recordPage/components/tracklist/tracklist.styles';

const Tracklist = ({
  tracklist,
}: {
  tracklist,
}) => {
  const classes = useStyles();
  if (tracklist && tracklist.length > 0) {
    return (
      <ul className={classes.list}>
        {tracklist.map((item, index) => (
          // eslint-disable-next-line no-underscore-dangle
          <li className={classes.listItem} key={item._uid}>
            <span className={classes.number}>
              {`${index + 1}`}
            </span>
            <span className={classes.song}>
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

export default Tracklist;
