import { GetStaticProps } from 'next';

import Layout from '@components/Layout';
import StoryblokService from '@utils/storyblok-service';
import Page from '@components/bloks/Page';
import { IStoryblokPageProps } from '@interfaces/blok.interface';

const FuerVeranstalterPage = ({
  page,
  settings,
}: IStoryblokPageProps) => (
  <Layout settings={settings.data.story} content={page.data.story.content}>
    <Page body={page.data.story.content.body} />
  </Layout>
);

export default FuerVeranstalterPage;

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
