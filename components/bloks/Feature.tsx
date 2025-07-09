import type { IBlokComponentProps } from 'interfaces/blok.interface';

const Feature = ({ blok }: IBlokComponentProps) => (
  <div>
    <h2>{blok.name}</h2>
  </div>
);

export default Feature;
