import SbEditable, { SbEditableContent } from 'storyblok-react';

import Component from './index';

const Page = ({
  body,
}: {
  body: SbEditableContent
}) => (
  <SbEditable content={body}>
    <div>
      {/* eslint-disable-next-line no-underscore-dangle */}
      {body.map((blok) => <Component blok={blok} key={blok._uid} />)}
    </div>
  </SbEditable>
);

export default Page;
