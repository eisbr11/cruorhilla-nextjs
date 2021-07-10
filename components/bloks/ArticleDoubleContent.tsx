import { SbEditableContent } from 'storyblok-react';

// eslint-disable-next-line import/no-cycle
import Component from '@components/bloks';
import { ArticleDoubleComponent } from '@components/Article';

const ArticleDoubleContent = ({ blok }: { blok: SbEditableContent }) => (
  <>
    <ArticleDoubleComponent
      contentLeft={blok.content_left.map(
        // eslint-disable-next-line no-underscore-dangle
        (blokChild) => <Component blok={blokChild} key={blokChild._uid} />,
      )}
      contentRight={blok.content_right.map(
        // eslint-disable-next-line no-underscore-dangle
        (blokChild) => <Component blok={blokChild} key={blokChild._uid} />,
      )}
    />
  </>
);

export default ArticleDoubleContent;
