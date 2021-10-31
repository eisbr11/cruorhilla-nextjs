import { Button } from '@mui/material';
import AlbumIcon from '@mui/icons-material/Album';

import useStyles from './PhysicalLink.styles';

const PhysicalLink = ({
  href,
  text,
}: {
  href: string,
  text: string,
}) => {
  const classes = useStyles();

  if (href.length > 0 && text.length > 0) {
    return (
      <div className={classes.container}>
        <Button
          color="inherit"
          rel="noreferrer"
          endIcon={<AlbumIcon />}
          size="large"
          variant="outlined"
          href={href}
          target="_blank"
        >
          {text}
        </Button>
      </div>
    );
  }
  return null;
};

export default PhysicalLink;
