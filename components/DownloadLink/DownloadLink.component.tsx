import { Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import { DivWrapper } from './DownloadLink.styles';

interface IDownloadLinkProps {
  title: string;
  source: string;
}

const DownloadLink = ({ title, source }: IDownloadLinkProps) => {
  return (
    <DivWrapper>
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
    </DivWrapper>
  );
};

export default DownloadLink;
