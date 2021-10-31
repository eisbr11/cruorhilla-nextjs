import React, { ReactNode } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';

const ListItemContent = ({
  icon,
  text,
}: {
  icon: ReactNode,
  text: ReactNode,
}) => (
  <>
    <ListItemIcon sx={{ paddingRight: 2 }}>
      {icon}
    </ListItemIcon>
    <ListItemText>
      {text}
    </ListItemText>
  </>
);

export default ListItemContent;
