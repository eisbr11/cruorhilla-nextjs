import MarkdownViewer from '@components/markdown';
import Tracklist from './components/tracklist';

const RecordPage = ({
  record,
}: {
  record: any,
}) => (
  <div>
    <h1>{ record.name }</h1>
    <img width="400" src={record.coverImage.filename} alt={record.coverImage.alt} />
    <div>
      <span>{ record.releaseDate }</span>
      <span>{ record.formatType }</span>
    </div>
    <Tracklist tracklist={record.tracklist} />
    <div>
      <MarkdownViewer content={record.description} />
      <MarkdownViewer content={record.credits} />
    </div>
  </div>
);

export default RecordPage;
