import { ReactNode } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';

interface IListItemContentProps {
  icon: ReactNode;
  text: ReactNode;
}

const ListItemContent = ({ icon, text }: IListItemContentProps) => (
  <>
    <ListItemIcon sx={{ paddingRight: 2 }}>{icon}</ListItemIcon>
    <ListItemText sx={{ textTransform: 'uppercase' }}>{text}</ListItemText>
  </>
);

export default ListItemContent;
