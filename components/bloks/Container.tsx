import { Container as MaterialContainer } from '@mui/material';

import { IBlokComponentProps } from '@interfaces/blok.interface';
// eslint-disable-next-line import/no-cycle
import Component from '@components/bloks/index';

const Container = ({ blok }: IBlokComponentProps) => (
  <MaterialContainer maxWidth={blok.maxWidth}>
    {/* eslint-disable-next-line no-underscore-dangle */}
    {blok.body.map((blokChild) => <Component blok={blokChild} key={blokChild._uid} />)}
  </MaterialContainer>
);

export default Container;
