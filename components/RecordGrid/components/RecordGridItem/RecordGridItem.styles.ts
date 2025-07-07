import Link from 'next/link';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const InfoContainerStyled = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

export const LinkStyled = styled(Link)(({ theme }) => ({
  '& .image': {
    filter: '',
    display: 'block',
  },
  '& .name': {
    color: theme.palette.primary.contrastText,
    transition: 'color 300ms ease',
    fontWeight: theme.typography.fontWeightBold,
  },
  '&:hover .name': {
    color: theme.palette.text.secondary,
  },
  '&:hover .imageContainer': {
    borderColor: theme.palette.secondary.main,
    borderRadius: 30,
  },
  '&:hover .image': {
    transform: 'zoom(1)',
  },
}));

export const ImageContainerStyled = styled(motion.div)(({ theme }) => ({
  border: `5px solid ${theme.palette.primary.main}`,
  overflow: 'hidden',
  borderRadius: 5,
  transition: 'all 300ms ease',
}));
