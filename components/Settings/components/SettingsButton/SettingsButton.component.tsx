import { Fab } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';

import useStyles from './SettingsButton.styles';

const SettingsButton = ({
  onClick,
}: {
  onClick: () => void,
}) => {
  const classes = useStyles();
  return (
    <Fab onClick={onClick} className={classes.fab} size="medium" color="primary" aria-label="settings">
      <TuneIcon />
    </Fab>
  );
};

export default SettingsButton;
