import SbEditable from 'storyblok-react';
import FriendComponent from '@components/Friend';
import { IBlokComponentProps } from '@interfaces/blok.interface';

const Friend = ({ blok }: IBlokComponentProps) => (
  <SbEditable content={blok}>
    <FriendComponent
      name={blok.name}
      link={blok.link.cached_url}
      text={blok.text}
      image={blok.image}
    />
  </SbEditable>
);

export default Friend;
