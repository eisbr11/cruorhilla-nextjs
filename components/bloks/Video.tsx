import { Grid } from '@mui/material';

import VideoItem from 'components/VideoItem';
import { IBlokComponentProps } from 'interfaces/blok.interface';

const VideoGrid = ({ blok }: IBlokComponentProps) => (
  <Grid item md={blok.full_width ? 12 : 6} xs={12}>
    <VideoItem title={blok.title} ytId={blok.youtube_id} />
  </Grid>
);

export default VideoGrid;
