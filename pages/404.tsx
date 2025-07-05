import { GetStaticProps } from 'next';
import { ISbResult } from 'storyblok-js-client';

import StoryblokService from '@utils/storyblok-service';
import Layout from '@components/Layout';
import CustomErrorContentComponent from '@components/CustomErrorContent';

interface ICustom404Props {
  settings: ISbResult;
}

const Custom404 = ({ settings }: ICustom404Props) => (
  <Layout settings={settings.data.story}>
    <CustomErrorContentComponent errorCode="404" errorMessage="Gehen Sie weiter, hier gibt es nichts zu sehen!" />
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
