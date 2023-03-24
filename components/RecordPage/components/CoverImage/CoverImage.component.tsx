import { FC } from 'react';
import Image from 'next/image';

import { shimmer, toBase64 } from '@utils/imagePlaceholder';
import useStyles from './CoverImage.styles';
import { IImage } from '@interfaces/image.interface';

interface ICoverImageProps {
  coverImage: IImage;
}

const CoverImage: FC<ICoverImageProps> = ({
  coverImage,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
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
    </div>
  );
};

export default CoverImage;
