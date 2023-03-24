import React from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { IImage } from '@interfaces/image.interface';
import useStyles from '@components/Friend/Friend.styles';
import { shimmer, toBase64 } from '@utils/imagePlaceholder';
import { MarkdownViewer } from '@components/Markdown';

interface IFriendComponentProps {
  name: string;
  link: string;
  text: string,
  image: IImage;
}

const FriendComponent = ({
  name,
  link,
  text,
  image,
}: IFriendComponentProps) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Link href={link} passHref legacyBehavior>
          <a target="_blank" aria-label={`Zur Seite von ${name}`}>
            <Typography mb={1} variant="h3">{name}</Typography>
          </a>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.imageWrapper}>
          <Link href={link} passHref legacyBehavior>
            <a target="_blank" aria-label={`Zur Seite von ${name}`}>
              <Image
                layout="fill"
                objectFit="contain"
                src={image.filename}
                alt={image.alt}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 600))}`}
              />
            </a>
          </Link>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography component="div" variant="body1">
          <MarkdownViewer content={text} />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FriendComponent;

