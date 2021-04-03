import { GetStaticProps } from 'next';
import { StoryblokResult } from 'storyblok-js-client';

import StoryblokService from '@utils/storyblok-service';
import Layout from '@components/Layout';
import Page from '@components/bloks/Page';

export default function DasSpielPage({
  page,
  settings,
}: {
  page: StoryblokResult,
  settings: StoryblokResult
}) {
  return (
    <Layout settings={settings.data.story} content={page.data.story.content}>
      {/* We will define these settings later on */}
      <Page body={page.data.story.content.body} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [page, settings] = await Promise.all([
    StoryblokService.get('cdn/stories/das-spiel', {}),
    StoryblokService.get('cdn/stories/settings', {}),
  ]);

  return {
    props: {
      page,
      settings,
    },
  };
};
