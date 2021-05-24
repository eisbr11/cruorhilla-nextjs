import { Grid, IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

import { BandcampIcon, SpotifyIcon } from '@components/customIcons';
import useStyles from '@components/SocialMediaLinks/SocialMediaLinks.styles';
import Config from '@lib/Config';

const SocialMediaLinks = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container spacing={2} justify="center">
      <Grid item>
        <IconButton href={Config.social_media.youtube} color="default">
          <YouTubeIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton href={Config.social_media.fb} color="default">
          <FacebookIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton href={Config.social_media.spotify} color="default">
          <SpotifyIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton href={Config.social_media.bandcamp} color="default">
          <BandcampIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton href={Config.social_media.instagram} color="default">
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SocialMediaLinks;
