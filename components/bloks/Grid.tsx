import SbEditable, { SbEditableContent } from 'storyblok-react';

import Component from './index';

const Grid = ({
  blok,
}: {
  blok: SbEditableContent,
}) => (
  <SbEditable content={blok}>
    <div className="util__flex">
      {/* eslint-disable-next-line no-underscore-dangle */}
      {blok.columns.map((blokChild) => <Component blok={blokChild} key={blokChild._uid} />)}
    </div>
  </SbEditable>
);

export default Grid;
