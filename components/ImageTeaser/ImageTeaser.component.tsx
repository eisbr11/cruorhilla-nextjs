import Image from 'next/image';

import type { IImage } from 'interfaces/image.interface';
import { shimmer, toBase64 } from 'utils/imagePlaceholder';
import { DivWrapper, TypographyHeadline } from './ImageTeaser.styles';

interface IImageTeaserProps {
  headline: string;
  image: IImage;
}

const ImageTeaser = ({ headline, image }: IImageTeaserProps) => {
  return (
    <DivWrapper>
      <Image
        src={image.filename}
        className='image-teaser'
        alt={image.alt}
        quality={60}
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 300))}`}
        fill
        sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        style={{
          objectFit: 'cover',
          objectPosition: 'center 20%',
        }}
      />
      <TypographyHeadline variant='h1' color='secondary'>
        {headline}
      </TypographyHeadline>
    </DivWrapper>
  );
};

export default ImageTeaser;
