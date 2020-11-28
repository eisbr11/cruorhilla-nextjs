import { GetStaticProps } from 'next';
import { StoryblokResult } from 'storyblok-js-client';

import StoryblokService from '@utils/storyblok-service';
import Layout from '@components/layout';

const Custom404 = ({
  settings,
}: {
  settings: StoryblokResult
}) => (
  <Layout settings={settings.data.story}>
    <h1>404 - Diese Seite konnte nicht gefunden werden</h1>
  </Layout>
);

export default Custom404;

export const getStaticProps: GetStaticProps = async () => {
  const [settings] = await Promise.all([
    StoryblokService.get('cdn/stories/settings', {}),
  ]);

  return {
    props: {
      settings,
    },
  };
};
