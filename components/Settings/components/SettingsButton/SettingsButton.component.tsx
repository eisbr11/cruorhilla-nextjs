import { Fab } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

import useStyles from './SettingsButton.styles';

interface ISettingsButtonProps {
  onClick: () => void;
}

const SettingsButton = ({ onClick }: ISettingsButtonProps) => {
  const classes = useStyles();
  return (
    <Fab onClick={onClick} className={classes.fab} size="medium" color="primary" aria-label="settings">
      <TuneIcon />
    </Fab>
  );
};

export default SettingsButton;
