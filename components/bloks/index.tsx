import { SbEditableContent } from 'storyblok-react';

import ContentLink from '@components/bloks/ContentLink';
import Feature from './Feature';
import Placeholder from './Placeholder';
import Teaser from './Teaser';
import Social from './Social';
import Richtext from './Richtext';
import Headline from './Headline';
// eslint-disable-next-line import/no-cycle
import Grid from './Grid';
// eslint-disable-next-line import/no-cycle
import Container from './Container';

const Components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  social_blok: Social,
  container: Container,
  richtext: Richtext,
  headline: Headline,
  content_link: ContentLink,
};

const Component = ({ blok }: {blok: SbEditableContent}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const BlokComponent = Components[blok.component];
    return <BlokComponent blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default Component;
