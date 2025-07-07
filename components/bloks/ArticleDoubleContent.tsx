import type { IBlokComponentProps } from 'interfaces/blok.interface';
import Component from 'components/bloks';
import { ArticleDoubleComponent } from 'components/Article';

const ArticleDoubleContent = ({ blok }: IBlokComponentProps) => (
  <ArticleDoubleComponent
    contentLeft={blok.content_left.map((blokChild) => (
      <Component blok={blokChild} key={blokChild._uid} />
    ))}
    contentRight={blok.content_right.map((blokChild) => (
      <Component blok={blokChild} key={blokChild._uid} />
    ))}
  />
);

export default ArticleDoubleContent;
