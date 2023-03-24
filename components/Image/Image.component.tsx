import React from 'react';
import NextImage from 'next/image';

import { IImage } from '@interfaces/image.interface';
import { shimmer, toBase64 } from '@utils/imagePlaceholder';
import useStyles from './Image.styles';

interface IImageProps {
  image: IImage;
}

const Image = ({ image }: IImageProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imageWrapper}>
        <NextImage
          src={image.filename}
          alt={image.alt}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 600))}`}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{
            objectFit: 'contain',
          }} />
      </div>
    </div>
  );
};

export default Image;
