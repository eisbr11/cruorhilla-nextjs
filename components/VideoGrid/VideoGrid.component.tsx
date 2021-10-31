import React from 'react';

import useStyles from '@components/VideoGrid/VideoGrid.styles';
import { Grid } from '@mui/material';

interface IVideoGridProps {
  children: React.ReactNode;
}

const VideoGrid = ({ children }: IVideoGridProps) => {
  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.wrapper}>
      {children}
    </Grid>
  );
};

export default VideoGrid;
