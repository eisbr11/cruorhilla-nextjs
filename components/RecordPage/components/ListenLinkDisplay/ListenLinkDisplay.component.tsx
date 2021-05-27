import React from 'react';
import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { ExpandMore, YouTube } from '@material-ui/icons';

import {
  BandcampIcon,
  DeezerIcon,
  SpotifyIcon,
  TidalIcon,
} from '@components/customIcons';
import clsx from 'clsx';
import useStyles from './ListenLinkDisplay.styles';

const ListenLinkDisplay = ({
  bandcampLink,
  spotifyLink,
  tidalLink,
  deezerLink,
  youtubeMusicLink,
}: {
  bandcampLink,
  spotifyLink,
  tidalLink,
  deezerLink,
  youtubeMusicLink,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  if (
    bandcampLink.length > 0
    || spotifyLink.length > 0
    || tidalLink.length > 0
    || deezerLink.length > 0
    || youtubeMusicLink.length > 0
  ) {
    return (
      <div className={classes.container}>
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
          <ExpandMore
            className={clsx(classes.expandIcon, {
              [classes.expandIconUp]: anchorEl,
            })}
          />
        </Button>
        <Menu
          id="listening-menu"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
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
                <ListItemIcon>
                  <BandcampIcon />
                </ListItemIcon>
                <ListItemText>
                  Bandcamp
                </ListItemText>
              </MenuItem>
            </li>
          )}
          {spotifyLink.length > 0 && (
            <li>
              <MenuItem aria-label="Spotify" rel="noreferrer" component={Button as any} target="_blank" href={spotifyLink}>
                <ListItemIcon>
                  <SpotifyIcon />
                </ListItemIcon>
                <ListItemText>
                  Spotify
                </ListItemText>
              </MenuItem>
            </li>
          )}
          {tidalLink.length > 0 && (
            <li>
              <MenuItem aria-label="Tidal" rel="noreferrer" component={Button as any} target="_blank" href={tidalLink}>
                <ListItemIcon>
                  <TidalIcon />
                </ListItemIcon>
                <ListItemText>
                  Tidal
                </ListItemText>
              </MenuItem>
            </li>
          )}
          {deezerLink.length > 0 && (
            <li>
              <MenuItem aria-label="Deezer" rel="noreferrer" component={Button as any} target="_blank" href={deezerLink}>
                <ListItemIcon>
                  <DeezerIcon />
                </ListItemIcon>
                <ListItemText>
                  Deezer
                </ListItemText>
              </MenuItem>
            </li>
          )}
          {youtubeMusicLink.length > 0 && (
            <li>
              <MenuItem aria-label="Youtube Music" rel="noreferrer" component={Button as any} target="_blank" href={youtubeMusicLink}>
                <ListItemIcon>
                  <YouTube />
                </ListItemIcon>
                <ListItemText>
                  Youtube Music
                </ListItemText>
              </MenuItem>
            </li>
          )}
        </Menu>
      </div>
    );
  }
  return null;
};

export default ListenLinkDisplay;
