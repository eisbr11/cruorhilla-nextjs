import SbEditable, { SbEditableContent } from 'storyblok-react';
import Link from 'next/link';
import { Button, Typography } from '@material-ui/core';

const ContentLink = ({ blok }: {blok: SbEditableContent}) => (
  <SbEditable content={blok}>
    <Typography align={blok.align}>
      <Link href={blok.link.cached_url}>
        <Button variant={blok.variant} color={blok.color}>{blok.text}</Button>
      </Link>
    </Typography>
  </SbEditable>
);

export default ContentLink;
