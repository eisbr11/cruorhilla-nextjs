import React from 'react';
import { useInView } from 'react-intersection-observer';

import type { IImage } from '@interfaces/image.interface';
import ArticleImage from './components/ArticleImage';
import { ArticleImageWrapper, ArticleContainer, ContentWrapper } from './Article.styles';

interface IArticleComponentProps {
  content: React.ReactNode;
  image: IImage;
  design: 'imageRight' | 'imageLeft';
}

const ArticleComponent = ({
  content,
  image,
  design,
}: IArticleComponentProps) => {
  const { ref, inView } = useInView({
    rootMargin: '0px',
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <ArticleContainer
      containerVisible={inView}
      isImageRight={design === 'imageRight'}
      ref={ref}
    >
      <ArticleImageWrapper design={design}>
        <ArticleImage image={image} />
      </ArticleImageWrapper>
      <ContentWrapper>
        {content}
      </ContentWrapper>
    </ArticleContainer>
  );
};

export default ArticleComponent;
