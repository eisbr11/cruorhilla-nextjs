import { LiListItem, SpanNumber, SpanSong, UlList } from './Tracklist.styles';

interface ITracklistItem {
  name: string;
  _uid: string;
}

interface ITracklistProps {
  tracklist: ITracklistItem[];
}

const Tracklist = ({ tracklist }: ITracklistProps) => {
  if (tracklist && tracklist.length > 0) {
    return (
      <UlList>
        {tracklist.map((item, index) => (
          // eslint-disable-next-line no-underscore-dangle
          <LiListItem key={item._uid}>
            <SpanNumber>
              {`${index + 1}`}
            </SpanNumber>
            <SpanSong>
              {item.name}
            </SpanSong>
          </LiListItem>
        ))}
      </UlList>
    );
  }
  return null;
};

export default Tracklist;
