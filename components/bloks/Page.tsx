import SbEditable, { SbEditableContent } from 'storyblok-react';

import Component from './index';

const Page = ({
  body,
}: {
  body: SbEditableContent
}) => (
  <SbEditable content={body}>
    {/* eslint-disable-next-line no-underscore-dangle */}
    {body.map((blok) => <Component blok={blok} key={blok._uid} />)}
  </SbEditable>
);

export default Page;
