import { useState } from 'react';
import { Container, FormControlLabel, Grid, Switch } from '@mui/material';
import { SbEditableContent } from 'storyblok-react';

import RecordGridItem from './components/RecordGridItem';

interface IRecordGridComponentProps {
  records: SbEditableContent[];
}

const RecordGridComponent = ({ records }: IRecordGridComponentProps) => {
  const [showOnlyAlbums, setShowOnlyAlbums] = useState(true);
  const filteredRecords = records.filter((record) =>
    showOnlyAlbums ? true : record.content.formatType === 'album'
  );
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={3} mb={3}>
        <FormControlLabel
          control={
            <Switch
              value={showOnlyAlbums}
              color={'primary'}
              onChange={(_e) => {
                setShowOnlyAlbums((prevState) => !prevState);
              }}
            />
          }
          label='Nur Alben anzeigen'
        />
      </Grid>
      <Grid container spacing={3}>
        {filteredRecords.map((record) => (
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
};

export default RecordGridComponent;
