import { SbEditableContent } from 'storyblok-react';

// eslint-disable-next-line import/no-cycle
import Component from '@components/bloks/index';
import ArticleComponent from '@components/Article';

const Article = ({ blok }: { blok: SbEditableContent }) => (
  <>
    {/* eslint-disable no-underscore-dangle */}
    <ArticleComponent
      content={blok.content.map((blokChild) => <Component blok={blokChild} key={blokChild._uid} />)}
      image={blok.image}
    />
    {/* eslint-enable no-underscore-dangle */}
  </>
);

export default Article;
