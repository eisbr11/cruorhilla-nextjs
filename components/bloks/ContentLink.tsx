import Link from 'next/link';
import { Button, Typography } from '@mui/material';

import type { IBlokComponentProps } from 'interfaces/blok.interface';

const ContentLink = ({ blok }: IBlokComponentProps) => {
  return (
    <Typography component='p' align={blok.align}>
      {blok.target === 'external' ? (
        <Button
          href={blok.link.cached_url}
          target='_blank'
          aria-label={blok.text}
          variant={blok.variant}
          color={blok.color}
        >
          {blok.text}
        </Button>
      ) : (
        <Link href={blok.link.cached_url} passHref>
          <Button
            aria-label={blok.text}
            variant={blok.variant}
            color={blok.color}
          >
            {blok.text}
          </Button>
        </Link>
      )}
    </Typography>
  );
};

export default ContentLink;
