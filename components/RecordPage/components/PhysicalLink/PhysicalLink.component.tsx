import { Button } from '@material-ui/core';
import AlbumIcon from '@material-ui/icons/Album';

import useStyles from './PhysicalLink.styles';

const PhysicalLink = ({
  href,
  text,
}: {
  href: string,
  text: string,
}) => {
  if (href.length > 0 && text.length > 0) {
    const classes = useStyles();
    return (
      <div className={classes.container}>
        <Button
          color="default"
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
