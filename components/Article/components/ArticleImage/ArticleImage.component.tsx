import React, { FC } from 'react';
import Image from 'next/image';

import { shimmer, toBase64 } from '@utils/imagePlaceholder';
import useStyles from './ArticleImage.styles';
import { IImage } from '@interfaces/image.interface';

interface IArticleImageProps {
  image: IImage;
}

const ArticleImage: FC<IArticleImageProps> = ({
  image,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.imageWrapper}>
      <Image
        src={image.filename}
        alt={image.alt}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 300))}`}
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        style={{
          objectFit: 'contain',
          objectPosition: 'top',
        }} />
    </div>
  );
};

export default ArticleImage;
