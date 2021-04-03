import Image from 'next/image';

import useStyles from './CoverImage.styles';

const CoverImage = ({
  coverImage,
}: {
  coverImage: {
    filename: string,
    alt: string,
    id: number,
  },
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Image
        layout="responsive"
        src={coverImage.filename}
        alt={coverImage.alt}
        width={600}
        height={600}
      />
    </div>
  );
};

export default CoverImage;
