import React from 'react';
import { Fade } from '@mui/material';

import SettingsButton from './components/SettingsButton';
import SupportButton from './components/SupportButton';
import SettingsModalContent from './components/SettingsModalContent';
import {
  BackdropStyled,
  ModalInnerStyled,
  ModalStyled,
} from './Settings.styles';

const SettingsComponent = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SupportButton />
      <SettingsButton onClick={handleOpen} />
      <ModalStyled
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{
          backdrop: BackdropStyled,
        }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <ModalInnerStyled>
            <SettingsModalContent />
          </ModalInnerStyled>
        </Fade>
      </ModalStyled>
    </>
  );
};

export default SettingsComponent;
