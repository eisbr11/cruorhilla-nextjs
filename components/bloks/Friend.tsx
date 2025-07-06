import FriendComponent from 'components/Friend';
import { IBlokComponentProps } from 'interfaces/blok.interface';

const Friend = ({ blok }: IBlokComponentProps) => (
  <FriendComponent
    name={blok.name}
    link={blok.link.cached_url}
    text={blok.text}
    image={blok.image}
  />
);

export default Friend;
