import React from 'react';
import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import useStyles from './Article.styles';

const ArticleDoubleComponent = ({
  contentLeft,
  contentRight,
}: {
  contentLeft: React.ReactNode,
  contentRight: React.ReactNode,
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
      <div className={classes.contentWrapper}>
        {contentLeft}
      </div>
      <div className={clsx(classes.contentWrapper, classes.articleImageWrapperRight)}>
        {contentRight}
      </div>
    </article>
  );
};

export default ArticleDoubleComponent;
