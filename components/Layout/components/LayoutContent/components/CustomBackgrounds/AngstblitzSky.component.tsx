import useStyles from './AngstblitzSky.styles';

const AngstblitzSky = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.stars} />
    </div>
  );
};

export default AngstblitzSky;
