import { Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';

import useStyles from './DownloadLink.styles';

interface IDownloadLinkProps {
  title: string;
  source: string;
}

const DownloadLink = ({ title, source }: IDownloadLinkProps) => {
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
