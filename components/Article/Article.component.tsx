import React from 'react';
import Image from 'next/image';

import useStyles from './Article.styles';

const ArticleComponent = ({
  content,
  image,
}: {
  content: React.ReactNode,
  image: {
    filename: string,
    alt: string,
  }
}) => {
  const classes = useStyles();
  return (
    <article className={classes.container}>
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
      <div>
        {content}
      </div>
    </article>
  );
};

export default ArticleComponent;
