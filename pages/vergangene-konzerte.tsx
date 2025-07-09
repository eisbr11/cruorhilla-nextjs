import { GetStaticProps } from 'next';

import { IStoryblokPageProps } from 'interfaces/blok.interface';
import StoryblokService from 'utils/storyblok-service';
import Layout from 'components/Layout';
import Page from 'components/bloks/Page';

export default function VergangeneKonzerte({
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
    StoryblokService.get('cdn/stories/vergangene-konzerte', {}),
    StoryblokService.get('cdn/stories/settings', {}),
  ]);

  return {
    props: {
      page,
      settings,
    },
  };
};
