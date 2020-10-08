import { GetStaticProps } from 'next';

import Layout from '@components/layout';
import StoryblokService from '@utils/storyblok-service';
import { StoryblokResult } from 'storyblok-js-client';
import Page from '@components/bloks/Page';

const fuerVeranstalter = ({
  page,
  settings,
}: {
  page: StoryblokResult,
  settings: StoryblokResult
}) => (
  <Layout settings={settings.data.story}>
    <Page body={page.data.story.content.body} />
  </Layout>
);

export default fuerVeranstalter;

export const getStaticProps: GetStaticProps = async () => {
  const [page, settings] = await Promise.all([
    StoryblokService.get('cdn/stories/fuer-veranstalter', {}),
    StoryblokService.get('cdn/stories/settings', {}),
  ]);

  return {
    props: {
      page,
      settings,
    },
  };
};
