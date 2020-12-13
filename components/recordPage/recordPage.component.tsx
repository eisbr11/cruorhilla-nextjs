import MarkdownViewer from '@components/markdown';

const RecordPage = ({
  record,
}: {
  record: any,
}) => (
  <div>
    { record.name }
    { record.formatType }
    <MarkdownViewer content={record.tracklist} />
    { record.releaseDate }
    <MarkdownViewer content={record.description} />
    <img width="400" src={record.coverImage.filename} alt={record.coverImage.alt} />
  </div>
);

export default RecordPage;
