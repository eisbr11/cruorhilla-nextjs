import { Backdrop, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModalStyled = styled(Modal)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ModalInnerStyled = styled('div')(() => ({
  outline: 0,
  zIndex: 1000,
}));

export const BackdropStyled = styled(Backdrop)(() => ({
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
}));
