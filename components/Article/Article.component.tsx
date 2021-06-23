import React from 'react';
import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';

import ArticleImage from './components/ArticleImage';
import useStyles from './Article.styles';

const ArticleComponent = ({
  content,
  image,
  design,
}: {
  content: React.ReactNode,
  image: {
    filename: string,
    alt: string,
  }
  design: 'imageRight' | 'imageLeft',
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
        [classes.imageRight]: design === 'imageRight',
      })}
      ref={ref}
    >
      <div
        className={clsx(classes.articleImageWrapper, {
          [classes.articleImageWrapperLeft]: design === 'imageLeft',
          [classes.articleImageWrapperRight]: design === 'imageRight',
        })}
      >
        <ArticleImage image={image} />
      </div>
      <div className={classes.contentWrapper}>
        {content}
      </div>
    </article>
  );
};

export default ArticleComponent;
