import { Container as MaterialContainer } from '@mui/material';

import { IBlokComponentProps } from 'interfaces/blok.interface';
import Component from 'components/bloks/index';

const Container = ({ blok }: IBlokComponentProps) => (
  <MaterialContainer maxWidth={blok.maxWidth}>
    {blok.body.map((blokChild) => (
      <Component blok={blokChild} key={blokChild._uid} />
    ))}
  </MaterialContainer>
);

export default Container;
