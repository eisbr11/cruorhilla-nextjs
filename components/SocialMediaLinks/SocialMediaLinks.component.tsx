import { Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { BandcampIcon, SpotifyIcon } from '@components/customIcons';
import Config from '@lib/Config';
import { ContainerStyled } from './SocialMediaLinks.styles';

const SocialMediaLinks = () => {
  return (
    <ContainerStyled container spacing={2} justifyContent="center">
      <Grid item>
        <IconButton
          rel="noreferrer"
          aria-label="Link zum Cruor Hilla Youtube Channel"
          target="_blank"
          href={Config.social_media.youtube}
          color="default"
          size="large"
        >
          <YouTubeIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          rel="noreferrer"
          aria-label="Link zur Facebook Seite von Cruor Hilla"
          target="_blank"
          href={Config.social_media.fb}
          color="default"
          size="large"
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          rel="noreferrer"
          aria-label="Link zur Spotify Künstler-Seite von Cruor Hilla"
          target="_blank"
          href={Config.social_media.spotify}
          color="default"
          size="large"
        >
          <SpotifyIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          rel="noreferrer"
          aria-label="Link zur Bandcamp Seite von Cruor Hilla"
          target="_blank"
          href={Config.social_media.bandcamp}
          color="default"
          size="large"
        >
          <BandcampIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          rel="noreferrer"
          aria-label="Link zum Instagram-Channel von Cruor Hilla"
          target="_blank"
          href={Config.social_media.instagram}
          color="default"
          size="large"
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Grid>
    </ContainerStyled>
  );
};

export default SocialMediaLinks;
