import React from 'react';
import { Fade, Modal } from '@mui/material';

import SettingsButton from './components/SettingsButton';
import SettingsModalContent from './components/SettingsModalContent';
import useStyles from './Settings.styles';

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
        BackdropProps={{
          timeout: 500,
          className: classes.backdrop,
        }}
        className={classes.modal}
      >
        <Fade in={open}>
          <div className={classes.modalInner}>
            <SettingsModalContent />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default SettingsComponent;
