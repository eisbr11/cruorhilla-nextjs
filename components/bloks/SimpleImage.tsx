import { IBlokComponentProps } from 'interfaces/blok.interface';
import Image from 'components/Image';

const SimpleImage = ({ blok }: IBlokComponentProps) => (
  <>
    {}
    <Image image={blok.image} />
  </>
);

export default SimpleImage;
