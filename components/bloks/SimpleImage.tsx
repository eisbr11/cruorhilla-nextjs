import { IBlokComponentProps } from '@interfaces/blok.interface';
import Image from '@components/Image';

const SimpleImage = ({
  blok,
}: IBlokComponentProps) => (
  <>
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <Image image={blok.image} />
  </>
);

export default SimpleImage;
