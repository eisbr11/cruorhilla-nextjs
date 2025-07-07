import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const DivContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'auto',
  background: theme.palette.primary.dark,
}));

export const MotionMainStyled = styled(motion.main)(({ theme }) => ({
  flex: 1,
  zIndex: 2,
  paddingBottom: theme.spacing(2),
}));
