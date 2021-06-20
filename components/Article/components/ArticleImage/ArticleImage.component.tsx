import React from 'react';
import Image from 'next/image';

import { shimmer, toBase64 } from '@utils/imagePlaceholder';
import useStyles from './ArticleImage.styles';

const ArticleImage = ({
  image,
}: {
  image: {
    filename: string,
    alt: string,
  }
}) => {
  const classes = useStyles();
  return (
    <div className={classes.imageWrapper}>
      <Image
        src={image.filename}
        alt={image.alt}
        layout="fill"
        objectFit="contain"
        objectPosition="top"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 300))}`}
      />
    </div>
  );
};

export default ArticleImage;
