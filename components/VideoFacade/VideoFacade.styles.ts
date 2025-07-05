import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export const DivWrapper = styled('div')(() => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const IconButtonPlayButton = styled(IconButton)(() => ({
  height: 120,
  width: 120,
}));

export const DivVideoWrapper = styled('div')(() => ({
  '& iframe': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));
