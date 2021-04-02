import { SbEditableContent } from 'storyblok-react';
import Link from 'next/link';
import { Button, Typography } from '@material-ui/core';

const ContentLink = ({ blok }: { blok: SbEditableContent }) => (
  <Typography paragraph align={blok.align}>
    <Link href={blok.link.cached_url}>
      <Button variant={blok.variant} color={blok.color}>{blok.text}</Button>
    </Link>
  </Typography>
);

export default ContentLink;
