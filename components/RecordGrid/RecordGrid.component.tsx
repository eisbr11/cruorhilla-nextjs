import { Container, Grid } from '@material-ui/core';
import RecordGridItem from './components/RecordGridItem';

const RecordGridComponent = ({ records }: { records: any }) => (
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
