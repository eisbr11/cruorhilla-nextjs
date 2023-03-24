import React from 'react';
import Image from 'next/legacy/image';
import { Typography } from '@mui/material';

import { IImage } from '@interfaces/image.interface';
import { shimmer, toBase64 } from '@utils/imagePlaceholder';
import useStyles from './ImageTeaser.styles';

interface IImageTeaserProps {
  headline: string;
  image: IImage;
}

const ImageTeaser = ({ headline, image }: IImageTeaserProps) => {
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
