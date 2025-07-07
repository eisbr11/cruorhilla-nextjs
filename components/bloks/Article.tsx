import { SbEditableContent } from 'storyblok-react';

import type { IBlokComponentProps } from 'interfaces/blok.interface';
import Component from 'components/bloks/index';
import { ArticleComponent } from 'components/Article';

const Article = ({ blok }: IBlokComponentProps) => (
  <ArticleComponent
    content={blok.content.map((blokChild: SbEditableContent) => (
      <Component blok={blokChild} key={blokChild._uid} />
    ))}
    image={blok.image}
    design={blok.design}
  />
);

export default Article;
