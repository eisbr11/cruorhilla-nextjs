import { Grid, Typography } from '@mui/material';
import { SbEditableContent } from 'storyblok-react';
import Head from 'next/head';

import { MarkdownViewer } from 'components/Markdown';
import PhysicalLink from 'components/RecordPage/components/PhysicalLink';
import CoverImage from './components/CoverImage';
import Tracklist from './components/Tracklist';
import ReleaseInfo from './components/ReleaseInfo';
import ListenLinkDisplay from './components/ListenLinkDisplay';
import { ContainerStyled, TitleStyled } from './RecordPage.styles';

interface IRecordPageProps {
  record: SbEditableContent;
}

const RecordPage = ({ record }: IRecordPageProps) => {
  return (
    <ContainerStyled maxWidth={false}>
      <Head>
        <title>{`Cruor Hilla - ${record.name}`}</title>
        <meta
          property='og:title'
          key='title'
          content={`Cruor Hilla - ${record.name}`}
        />
        <meta
          property='og:image'
          key='image'
          content={record.coverImage.filename}
        />
        {record.metaDescription && record.metaDescription.length > 0 && (
          <>
            <meta name='description' content={record.metaDescription} />
            <meta
              property='og:description'
              key='description'
              content={record.metaDescription}
            />
          </>
        )}
      </Head>
      <Grid
        container
        justifyContent='space-between'
        alignItems='flex-start'
        spacing={3}
      >
        <Grid item xs={12}>
          <TitleStyled
            color='textPrimary'
            variant='h2'
            variantMapping={{ h2: 'h1' }}
          >
            {record.name}
          </TitleStyled>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={12}>
              <CoverImage coverImage={record.coverImage} />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <ReleaseInfo
                releaseDate={record.releaseDate}
                formatType={record.formatType}
              />
              <ListenLinkDisplay
                bandcampLink={record.bandcampLink.cached_url}
                spotifyLink={record.spotifyLink.cached_url}
                tidalLink={record.tidalLink.cached_url}
                deezerLink={record.deezerLink.cached_url}
                youtubeMusicLink={record.youtubeMusicLink.cached_url}
              />
              <PhysicalLink
                href={record.physicalLink.cached_url}
                text={record.physicalText}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Tracklist tracklist={record.tracklist} />
          <Typography component='div' variant='body1'>
            <MarkdownViewer content={record.description} />
            <MarkdownViewer content={record.credits} />
          </Typography>
        </Grid>
      </Grid>
    </ContainerStyled>
  );
};

export default RecordPage;
