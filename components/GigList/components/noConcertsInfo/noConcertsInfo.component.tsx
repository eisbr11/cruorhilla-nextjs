import { Typography } from '@material-ui/core';
import useStyles from './noConcertsInfo.styles';

const NoConcertsInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography align="center">
        Aktuell stehen leider keine Konzerte an.
      </Typography>
    </div>
  );
};

export default NoConcertsInfo;
