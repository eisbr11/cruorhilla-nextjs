import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';

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
  const { ref, inView } = useInView({
    rootMargin: '0px',
    threshold: 0.1,
    triggerOnce: true,
  });

  const classes = useStyles();
  return (
    <article
      className={clsx(classes.container, {
        [classes.containerVisible]: inView,
      })}
      ref={ref}
    >
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
      <div className={classes.contentWrapper}>
        {content}
      </div>
    </article>
  );
};

export default ArticleComponent;
