import { Container, Grid2 } from '@mui/material';
import { SbEditableContent } from 'storyblok-react';

import RecordGridItem from './components/RecordGridItem';

interface IRecordGridComponentProps {
  records: SbEditableContent[];
}

const RecordGridComponent = ({ records }: IRecordGridComponentProps) => (
  <Container maxWidth='xl'>
    <Grid2 container spacing={3}>
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
    </Grid2>
  </Container>
);

export default RecordGridComponent;
