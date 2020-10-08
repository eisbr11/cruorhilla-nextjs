import { SbEditableContent } from 'storyblok-react';

import Feature from './Feature';
import Grid from './Grid';
import Placeholder from './Placeholder';

const Components = {
  feature: Feature,
  grid: Grid,
};

const Component = ({ blok }: {blok: SbEditableContent}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const BlokComponent = Components[blok.component];
    return <BlokComponent blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default Component;
