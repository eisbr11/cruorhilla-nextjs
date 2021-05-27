import { Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

import useStyles from './DownloadLink.styles';

const DownloadLink = ({
  title,
  source,
}: {
  title: string,
  source: string,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button
        aria-label={title}
        endIcon={<GetAppIcon />}
        size="large"
        variant="contained"
        color="secondary"
        href={source}
        target="_blank"
        download
      >
        {title}
      </Button>
    </div>
  );
};

export default DownloadLink;
