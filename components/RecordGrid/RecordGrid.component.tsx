import { Container, Grid } from '@mui/material';
import RecordGridItem from './components/RecordGridItem';

interface IRecordGridComponentProps {
  records: any;
}

const RecordGridComponent = ({ records }: IRecordGridComponentProps) => (
  <Container maxWidth="lg">
    <Grid container spacing={3}>
      {records.map((record) => (
        <RecordGridItem
          key={record.id}
          name={record.content.name}
          recordHref={`/diskografie/${record.slug}`}
          coverImage={record.content.coverImage}
          releaseDate={record.content.releaseDate}
          formatType={record.content.formatType}
        />
      ))}
    </Grid>
  </Container>
);

export default RecordGridComponent;
