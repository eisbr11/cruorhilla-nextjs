import React from 'react';
import Image from 'next/image';

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
        className={classes.image}
        layout="fill"
        objectFit="contain"
        objectPosition="center"
      />
    </div>
  );
};

export default ArticleImage;
