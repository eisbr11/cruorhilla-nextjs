import SbEditable, { SbEditableContent } from 'storyblok-react';
import { Grid } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { BandcampIcon, SpotifyIcon } from '@components/customIcons';

const Social = ({ blok }: { blok: SbEditableContent }) => (
  <SbEditable content={blok}>
    <Grid container spacing={2} justify="center">
      <Grid item>
        <FacebookIcon fontSize="large" />
      </Grid>
      <Grid item>
        <SpotifyIcon fontSize="large" />
      </Grid>
      <Grid item>
        <BandcampIcon fontSize="large" />
      </Grid>
      <Grid item>
        <InstagramIcon fontSize="large" />
      </Grid>
      <Grid item>
        <YouTubeIcon fontSize="large" />
      </Grid>
    </Grid>
  </SbEditable>
);

export default Social;
