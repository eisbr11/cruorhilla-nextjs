import { Fab, Tooltip } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

import useStyles from './SettingsButton.styles';

interface ISettingsButtonProps {
  onClick: () => void;
}

const SettingsButton = ({ onClick }: ISettingsButtonProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Tooltip placement="left" title="Einstellungen">
      <Fab onClick={onClick} className={classes.fab} size="medium" color="primary" aria-label="settings">
        <TuneIcon />
      </Fab>
    </Tooltip>
  );
};

export default SettingsButton;
