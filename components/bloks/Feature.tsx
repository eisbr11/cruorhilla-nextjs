import SbEditable from 'storyblok-react';
import { IBlokComponentProps } from '@interfaces/blok.interface';

const Feature = ({ blok }: IBlokComponentProps) => (
  <SbEditable content={blok}>
    <div>
      <h2>{blok.name}</h2>
    </div>
  </SbEditable>
);

export default Feature;
