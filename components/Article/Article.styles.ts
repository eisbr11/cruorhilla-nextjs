import { styled } from '@mui/material/styles';

interface IArticleContainerProps {
  containerVisible: boolean;
  isImageRight: boolean;
}

export const ArticleContainer = styled('article', {
  shouldForwardProp: (prop) => prop !== 'containerVisible' && prop !== 'isImageRight',
})<IArticleContainerProps>(({ theme, containerVisible, isImageRight }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(8),
  transitionDuration: '600ms',
  transitionTimingFunction: 'cubic-bezier(0.24, 0, 0.64, 1)',
  transitionDelay: '0ms',
  willChange: 'transform, opacity',
  transform: 'translate3d(0px, 100px, 0px)',
  opacity: 0,

  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    flexDirection: 'row',
  },
  ...(containerVisible && {
    transform: 'translate3d(0px, 0px, 0px)',
    opacity: 1,
  }),
  ...(isImageRight && {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
  }),
}));

export const ContentWrapper = styled('div')(({ theme }) => ({
  flex: 1,
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    flexBasis: '50%',
  },
}));

interface IArticleImageWrapperProps {
  design: 'imageRight' | 'imageLeft';
}

export const ArticleImageWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'design',
})<IArticleImageWrapperProps>(({ theme, design }) => ({
  flex: 1,
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    flexBasis: '50%',
    ...(design === 'imageLeft' && {
      paddingRight: theme.spacing(4),
    }),
    ...(design === 'imageRight' && {
      paddingLeft: theme.spacing(4),
    }),
  },
  [theme.breakpoints.up('md')]: {
    ...(design === 'imageLeft' && {
      paddingRight: theme.spacing(8),
    }),
    ...(design === 'imageRight' && {
      paddingLeft: theme.spacing(8),
    }),
  },
}));
