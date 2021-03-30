import SbEditable, { SbEditableContent } from 'storyblok-react';
import { Grid } from '@material-ui/core';

// eslint-disable-next-line import/no-cycle
import Component from '@components/bloks/index';

const VideoGrid = ({
  blok,
}: {
  blok: SbEditableContent,
}) => (
  <SbEditable content={blok}>
    {/* eslint-disable-next-line no-underscore-dangle */}
    {blok.topContent.map((blokChild) => <Component blok={blokChild} key={blokChild._uid} />)}
    <Grid container spacing={3}>
      {/* eslint-disable-next-line no-underscore-dangle */}
      {blok.videos.map((blokChild) => <Component blok={blokChild} key={blokChild._uid} />)}
    </Grid>
  </SbEditable>
);

export default VideoGrid;
