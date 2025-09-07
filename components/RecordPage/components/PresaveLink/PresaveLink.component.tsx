import { Button } from '@mui/material';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

import { Container } from './PresaveLink.styles';

interface IPresaveLinkProps {
  href: string;
  text: string;
}

const PresaveLink = ({ href, text }: IPresaveLinkProps) => {
  if (href.length > 0 && text.length > 0) {
    return (
      <Container>
        <Button
          color='success'
          rel='noreferrer'
          endIcon={<BookmarkAddOutlinedIcon />}
          size='large'
          variant='contained'
          href={href}
          target='_blank'
        >
          {text}
        </Button>
      </Container>
    );
  }
  return null;
};

export default PresaveLink;
