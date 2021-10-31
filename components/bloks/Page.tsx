import SbEditable from 'storyblok-react';

import { IBlokPageProps } from '@interfaces/blok.interface';
import Component from './index';

const Page = ({ body }: IBlokPageProps) => (
  <SbEditable content={body}>
    {/* eslint-disable-next-line no-underscore-dangle */}
    {body.map((blok) => <Component blok={blok} key={blok._uid} />)}
  </SbEditable>
);

export default Page;
