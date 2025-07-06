import { GetStaticProps } from 'next';

import { IStoryblokPageProps } from 'interfaces/blok.interface';
import StoryblokService from 'utils/storyblok-service';
import Page from 'components/bloks/Page';
import Layout from 'components/Layout';

export default function Home({
  page,
  settings,
}: IStoryblokPageProps) {
  return (
    <Layout settings={settings.data.story} content={page.data.story.content}>
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
