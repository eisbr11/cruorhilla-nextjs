import React from 'react';
import Image from 'next/image';
import { Typography } from '@material-ui/core';

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
      />
      <Typography variant="h1" color="secondary" className={classes.headline}>{headline}</Typography>
    </div>
  );
};

export default ImageTeaser;
