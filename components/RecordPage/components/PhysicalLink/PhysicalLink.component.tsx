import { Button } from '@mui/material';
import AlbumIcon from '@mui/icons-material/Album';

import { Container } from './PhysicalLink.styles';

interface IPhysicalLinkProps {
  href: string;
  text: string;
}

const PhysicalLink = ({ href, text }: IPhysicalLinkProps ) => {
  if (href.length > 0 && text.length > 0) {
    return (
      <Container>
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
      </Container>
    );
  }
  return null;
};

export default PhysicalLink;
