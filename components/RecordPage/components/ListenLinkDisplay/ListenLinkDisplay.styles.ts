import { styled } from '@mui/material/styles';
import { ExpandMore } from '@mui/icons-material';

export const ContainerStyled = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 0),
  textAlign: 'right',
}));

interface IExpandIconProps {
  isExpanded: boolean;
}

export const ExpandIconStyled = styled(ExpandMore)<IExpandIconProps>(({ isExpanded }) => ({
  userSelect: 'none',
  pointerEvents: 'none',
  ...isExpanded && {
    transform: 'rotate(180deg)',
  },
}));
