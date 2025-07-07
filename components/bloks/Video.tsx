import { Grid2 } from '@mui/material';

import { IBlokComponentProps } from 'interfaces/blok.interface';
import VideoItem from 'components/VideoItem';

const VideoGrid = ({ blok }: IBlokComponentProps) => (
  <Grid2 size={{ md: blok.fullWidth ? 12 : 6, xs: 12 }}>
    <VideoItem title={blok.title} ytId={blok.youtube_id} />
  </Grid2>
);

export default VideoGrid;
