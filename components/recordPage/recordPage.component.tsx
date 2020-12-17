import { Container, Grid, Typography } from '@material-ui/core';

import MarkdownViewer from '@components/markdown';
import CoverImage from './components/coverImage';
import Tracklist from './components/tracklist';
import ReleaseInfo from './components/releaseInfo';
import useStyles from './recordPage.styles';

const RecordPage = ({
  record,
}: {
  record: any,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid container justify="space-between" alignItems="flex-start" spacing={3}>
        <Grid item xs={12}>
          <Typography color="textPrimary" variant="h1" className={classes.title}>{record.name}</Typography>
        </Grid>
        <Grid className={classes.imageReleaseWrap} container item spacing={2} xs={12} md={6} lg={5}>
          <Grid item xs={12} sm={6} md={12}>
            <CoverImage coverImage={record.coverImage} />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <ReleaseInfo releaseDate={record.releaseDate} formatType={record.formatType} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Tracklist tracklist={record.tracklist} />
          <div>
            <MarkdownViewer content={record.description} />
            <MarkdownViewer content={record.credits} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecordPage;
