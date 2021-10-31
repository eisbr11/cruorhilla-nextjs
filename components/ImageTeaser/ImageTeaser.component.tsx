import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';

import { shimmer, toBase64 } from '@utils/imagePlaceholder';
import useStyles from './ImageTeaser.styles';

const ImageTeaser = ({
  headline,
  image,
}: {
  headline: string,
  image: {
    filename: string,
    alt: string,
  }
}) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Image
        src={image.filename}
        alt={image.alt}
        className={classes.image}
        layout="fill"
        objectFit="cover"
        objectPosition="center 20%"
        quality={60}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 300))}`}
      />
      <Typography variant="h1" color="secondary" className={classes.headline}>{headline}</Typography>
    </div>
  );
};

export default ImageTeaser;
