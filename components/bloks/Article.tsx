// eslint-disable-next-line import/no-cycle
import { IBlokComponentProps } from '@interfaces/blok.interface';
import Component from '@components/bloks/index';
import { ArticleComponent } from '@components/Article';

const Article = ({ blok }: IBlokComponentProps) => (
  <>
    {/* eslint-disable no-underscore-dangle */}
    <ArticleComponent
      content={blok.content.map((blokChild) => <Component blok={blokChild} key={blokChild._uid} />)}
      image={blok.image}
      design={blok.design}
    />
    {/* eslint-enable no-underscore-dangle */}
  </>
);

export default Article;
