import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const LinkNameStyled = styled('span')(() => ({
  position: 'relative',
}));

interface ILinkStyledProps {
  isSubNav: boolean;
}

export const LinkStyled = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isSubNav',
})<ILinkStyledProps>(({ theme, isSubNav }) => ({
  color: 'inherit',
  padding: theme.spacing(2, 1),
  fontWeight: theme.typography.fontWeightBold,
  display: 'inline-block',

  '& .linkNameStyled': {
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: 2,
      bottom: -3,
      borderRadius: 4,
      left: 0,
      backgroundColor: isSubNav
        ? theme.palette.secondary.contrastText
        : theme.palette.primary.contrastText,
      transition: 'all 400ms ease',
      transform: 'scaleX(0)',
    },
  },

  '&:hover': {
    '& .linkNameStyled::before': {
      transform: 'scaleX(0.8)',
      transition: 'all 400ms cubic-bezier(0.38, 0.35, 0.21, 1.52)',
    },
  },

  ...(isSubNav && {
    color: theme.palette.secondary.contrastText,
    fontWeight: theme.typography.fontWeightRegular,
    padding: theme.spacing(1, 2),
  }),
}));
