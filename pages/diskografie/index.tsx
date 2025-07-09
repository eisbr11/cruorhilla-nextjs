import { FC } from 'react';
import { GetStaticProps } from 'next';
import { ISbResult } from 'storyblok-js-client';

import StoryblokService from 'utils/storyblok-service';
import Layout from 'components/Layout';
import RecordGridComponent from 'components/RecordGrid';
import Page from 'components/bloks/Page';

interface IDiskografiePageProps {
  page: ISbResult;
  settings: ISbResult;
  records: ISbResult;
}

const Diskografie: FC<IDiskografiePageProps> = ({
  page,
  settings,
  records,
}) => (
  <Layout settings={settings.data.story} content={page.data.story.content}>
    <Page body={page.data.story.content.body} />
    <RecordGridComponent records={records.data.stories} />
  </Layout>
);

export default Diskografie;

export const getStaticProps: GetStaticProps = async () => {
  const [page, settings, records] = await Promise.all([
    StoryblokService.get('cdn/stories/diskografie', {}),
    StoryblokService.get('cdn/stories/settings', {}),
    StoryblokService.getRecords('cdn/stories/', {}),
  ]);

  return {
    props: {
      page,
      settings,
      records,
    },
  };
};
