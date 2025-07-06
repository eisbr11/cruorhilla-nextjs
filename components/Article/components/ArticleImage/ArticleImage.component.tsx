import { FC } from 'react';
import Image from 'next/image';

import type { IImage } from 'interfaces/image.interface';
import { shimmer, toBase64 } from 'utils/imagePlaceholder';
import { DivImageWrapper } from './ArticleImage.styles';

interface IArticleImageProps {
  image: IImage;
}

const ArticleImage: FC<IArticleImageProps> = ({ image }) => (
  <DivImageWrapper>
    <Image
      src={image.filename}
      alt={image.alt}
      placeholder='blur'
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 300))}`}
      fill
      sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw'
      style={{
        objectFit: 'contain',
        objectPosition: 'top',
      }}
    />
  </DivImageWrapper>
);

export default ArticleImage;
