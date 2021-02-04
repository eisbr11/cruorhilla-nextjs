import React from 'react';
import {
  Backdrop,
  Fade,
  Modal,
  Paper,
  Typography,
} from '@material-ui/core';

import SwitchThemeSelect from '@components/switchThemeSelect/switchThemeSelect.component';
import useStyles from '@components/settings/settings.styles';
import SettingsButton from './components/SettingsButton';

const SettingsComponent = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SettingsButton onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className={classes.modal}
      >
        <Fade in={open}>
          <Paper className={classes.contentWrap}>
            <Typography variant="h5" component="span" id="transition-modal-title">Transition modal</Typography>
            <Typography variant="body1" id="transition-modal-description">Ist dir das Design zu eintönig? Dann stell doch ein anderes ein.</Typography>
            <SwitchThemeSelect />
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

export default SettingsComponent;
