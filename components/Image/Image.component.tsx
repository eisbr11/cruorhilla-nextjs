import React from 'react';
import NextImage from 'next/image';

import type { IImage } from 'interfaces/image.interface';
import { shimmer, toBase64 } from 'utils/imagePlaceholder';
import { DivContainer, DivImageWrapper } from './Image.styles';

interface IImageProps {
  image: IImage;
}

const Image = ({ image }: IImageProps) => {
  return (
    <DivContainer>
      <DivImageWrapper>
        <NextImage
          src={image.filename}
          alt={image.alt}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 600))}`}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </DivImageWrapper>
    </DivContainer>
  );
};

export default Image;
