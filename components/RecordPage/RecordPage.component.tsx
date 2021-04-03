import { Container, Grid, Typography } from '@material-ui/core';
import Head from 'next/head';

import { MarkdownViewer } from '@components/Markdown';
import CoverImage from './components/CoverImage';
import Tracklist from './components/Tracklist';
import ReleaseInfo from './components/ReleaseInfo';
import useStyles from './RecordPage.styles';

const RecordPage = ({
  record,
}: {
  record: any,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth={false}>
      <Head>
        <title>{`Cruor Hilla - ${record.name}`}</title>
      </Head>
      <Grid container justify="space-between" alignItems="flex-start" spacing={3}>
        <Grid item xs={12}>
          <Typography color="textPrimary" variant="h2" component="h1" className={classes.title}>{record.name}</Typography>
        </Grid>
        <Grid className={classes.imageReleaseWrap} container item xs={12} md={6} lg={5}>
          <Grid item xs={12} sm={6} md={12}>
            <CoverImage coverImage={record.coverImage} />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <ReleaseInfo releaseDate={record.releaseDate} formatType={record.formatType} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Tracklist tracklist={record.tracklist} />
          <Typography component="div" variant="body1">
            <MarkdownViewer content={record.description} />
            <MarkdownViewer content={record.credits} />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecordPage;
