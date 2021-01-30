import { GetStaticPaths, GetStaticProps } from 'next';
import { StoryblokResult } from 'storyblok-js-client';

import StoryblokService from '@utils/storyblok-service';
import Layout from '@components/layout';
import RecordPage from '@components/recordPage';

export default function Diskografie({
  record,
  settings,
}: {
  record: StoryblokResult,
  settings: StoryblokResult
}) {
  return (
    <Layout settings={settings.data.story}>
      {/* We will define these settings later on */}
      <RecordPage record={record.data.story.content} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [record, settings] = await Promise.all([
    StoryblokService.getRecord('cdn/stories/records/', params.slug as string, {}),
    StoryblokService.get('cdn/stories/settings', {}),
  ]);

  return {
    props: {
      record,
      settings,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allRecords = await StoryblokService.getRecords('cdn/stories/', {});

  return {
    paths: allRecords.data.stories?.map((record) => `/diskografie/${record.slug}`),
    fallback: false,
  };
};
