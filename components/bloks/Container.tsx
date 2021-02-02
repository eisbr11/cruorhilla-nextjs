import { Container as MaterialContainer } from '@material-ui/core';
import { SbEditableContent } from 'storyblok-react';

// eslint-disable-next-line import/no-cycle
import Component from '@components/bloks/index';

const Container = ({
  blok,
}: {
  blok: SbEditableContent,
}) => (
  <MaterialContainer maxWidth={blok.maxWidth}>
    {/* eslint-disable-next-line no-underscore-dangle */}
    {blok.body.map((blokChild) => <Component blok={blokChild} key={blokChild._uid} />)}
  </MaterialContainer>
);

export default Container;
