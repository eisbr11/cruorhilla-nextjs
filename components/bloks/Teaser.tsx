import { FC } from 'react';
import ImageTeaser from '@components/ImageTeaser';
import { IBlokComponentProps } from '@interfaces/blok.interface';

const Teaser: FC<IBlokComponentProps> = ({ blok }) => (
    <ImageTeaser headline={blok.headline} image={blok.image} />
);

export default Teaser;
