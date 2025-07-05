import React from 'react';
import {
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import { YouTube } from '@mui/icons-material';

import {
  BandcampIcon,
  DeezerIcon,
  SpotifyIcon,
  TidalIcon,
} from '@components/customIcons';
import { ContainerStyled, ExpandIconStyled } from './ListenLinkDisplay.styles';
import ListItemContent from '../ListItemContent';

interface IListenLinkDisplayProps {
  bandcampLink: string;
  spotifyLink: string;
  tidalLink: string;
  deezerLink: string;
  youtubeMusicLink: string;
}

const ListenLinkDisplay = ({
  bandcampLink,
  spotifyLink,
  tidalLink,
  deezerLink,
  youtubeMusicLink,
}: IListenLinkDisplayProps ) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  if (
    bandcampLink.length > 0
    || spotifyLink.length > 0
    || tidalLink.length > 0
    || deezerLink.length > 0
    || youtubeMusicLink.length > 0
  ) {
    return (
      <ContainerStyled>
        <Button
          color="secondary"
          size="medium"
          variant="contained"
          aria-label="Jetzt hören via"
          aria-controls="listening-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Jetzt hören via ...
          <ExpandIconStyled isExpanded={Boolean(anchorEl)} />
        </Button>
        <Menu
          id="listening-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {bandcampLink.length > 0 && (
            <li>
              <MenuItem aria-label="Bandcamp" rel="noreferrer" component={Button as any} target="_blank" href={bandcampLink}>
                <ListItemContent icon={<BandcampIcon />} text="Bandcamp" />
              </MenuItem>
            </li>
          )}
          {spotifyLink.length > 0 && (
            <li>
              <MenuItem aria-label="Spotify" rel="noreferrer" component={Button as any} target="_blank" href={spotifyLink}>
                <ListItemContent icon={<SpotifyIcon />} text="Spotify" />
              </MenuItem>
            </li>
          )}
          {tidalLink.length > 0 && (
            <li>
              <MenuItem aria-label="Tidal" rel="noreferrer" component={Button as any} target="_blank" href={tidalLink}>
                <ListItemContent icon={<TidalIcon />} text="Tidal" />
              </MenuItem>
            </li>
          )}
          {deezerLink.length > 0 && (
            <li>
              <MenuItem aria-label="Deezer" rel="noreferrer" component={Button as any} target="_blank" href={deezerLink}>
                <ListItemContent icon={<DeezerIcon />} text="Deezer" />
              </MenuItem>
            </li>
          )}
          {youtubeMusicLink.length > 0 && (
            <li>
              <MenuItem aria-label="Youtube Music" rel="noreferrer" component={Button as any} target="_blank" href={youtubeMusicLink}>
                <ListItemContent icon={<YouTube />} text="Youtube Music" />
              </MenuItem>
            </li>
          )}
        </Menu>
      </ContainerStyled>
    );
  }
  return null;
};

export default ListenLinkDisplay;
