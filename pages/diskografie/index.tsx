import { GetStaticProps } from 'next';
import { StoryblokResult } from 'storyblok-js-client';

import StoryblokService from '@utils/storyblok-service';
import Layout from '@components/layout';
import RecordsGrid from '@components/bloks/RecordsGrid';
import Page from '@components/bloks/Page';

const Diskografie = ({
  page,
  settings,
  records,
}: {
  page: StoryblokResult,
  settings: StoryblokResult,
  records: StoryblokResult,
}) => (
  <Layout settings={settings.data.story}>
    <Page body={page.data.story.content.body} />
    <RecordsGrid records={records.data.stories} />
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
