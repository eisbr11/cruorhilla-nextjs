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
  design: 'imageRight'|'imageLeft',
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
      {(design === 'imageLeft') ? (
        <>
          <ArticleImage image={image} />
          <div className={classes.contentWrapper}>
            {content}
          </div>
        </>
      ) : (
        <>
          <div className={classes.contentWrapper}>
            {content}
          </div>
          <ArticleImage image={image} />
        </>
      )}
    </article>
  );
};

export default ArticleComponent;
