import { GetStaticProps } from 'next';
import { StoryblokResult } from 'storyblok-js-client';

import StoryblokService from '@utils/storyblok-service';
import Page from '@components/bloks/Page';
import Layout from '@components/layout';

export default function Home({
  page,
  settings,
}: {
  page: StoryblokResult,
  settings: StoryblokResult
}) {
  return (
    <Layout settings={settings.data.story}>
      {/* We will define these settings later on */}
      <Page body={page.data.story.content.body} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [page, settings] = await Promise.all([
    StoryblokService.get('cdn/stories/home', {}),
    StoryblokService.get('cdn/stories/settings', {}),
  ]);

  return {
    props: {
      page,
      settings,
    },
  };
};
