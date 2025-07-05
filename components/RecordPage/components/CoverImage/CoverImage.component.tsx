import { FC } from 'react';
import Image from 'next/image';

import type { IImage } from '@interfaces/image.interface';
import { shimmer, toBase64 } from '@utils/imagePlaceholder';
import { ImageContainer } from './CoverImage.styles';

interface ICoverImageProps {
  coverImage: IImage;
}

const CoverImage: FC<ICoverImageProps> = ({
  coverImage,
}) => {
  return (
    <ImageContainer>
      <Image
        src={coverImage.filename}
        alt={coverImage.alt}
        width={600}
        height={600}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 600))}`}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }} />
    </ImageContainer>
  );
};

export default CoverImage;
