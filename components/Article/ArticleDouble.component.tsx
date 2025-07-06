import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  ArticleContainer,
  ArticleImageWrapper,
  ContentWrapper,
} from './Article.styles';

interface IArticleDoubleComponentProps {
  contentLeft: ReactNode;
  contentRight: ReactNode;
}

const ArticleDoubleComponent = ({
  contentLeft,
  contentRight,
}: IArticleDoubleComponentProps) => {
  const { ref, inView } = useInView({
    rootMargin: '0px',
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <ArticleContainer
      containerVisible={inView}
      isImageRight={false} // This prop is not used in this component, but kept for consistency
      ref={ref}
    >
      <ContentWrapper>{contentLeft}</ContentWrapper>
      <ArticleImageWrapper design='imageRight'>
        {contentRight}
      </ArticleImageWrapper>
    </ArticleContainer>
  );
};

export default ArticleDoubleComponent;
