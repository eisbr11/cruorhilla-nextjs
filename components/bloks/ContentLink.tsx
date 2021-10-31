import Link from 'next/link';
import { Button, Typography } from '@mui/material';

import { IBlokComponentProps } from '@interfaces/blok.interface';

const ContentLink = ({ blok }: IBlokComponentProps) => (
  <Typography paragraph align={blok.align}>
    <Link href={blok.link.cached_url} passHref>
      <Button aria-label={blok.text} variant={blok.variant} color={blok.color}>{blok.text}</Button>
    </Link>
  </Typography>
);

export default ContentLink;
