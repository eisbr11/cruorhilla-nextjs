import { GetStaticProps } from 'next';
import { StoryblokResult } from 'storyblok-js-client';

import StoryblokService from '@utils/storyblok-service';
import Layout from '@components/layout';
import Page from '@components/bloks/Page';
import GigList from '@components/gigList';
import React from 'react';

export default function Live({
  page,
  settings,
  gigs,
}: {
  page: StoryblokResult,
  settings: StoryblokResult,
  gigs: StoryblokResult,
}) {
  return (
    <Layout settings={settings.data.story} content={page.data.story.content}>
      {/* We will define these settings later on */}
      <Page body={page.data.story.content.body} />
      <GigList gigs={gigs.data.stories} />
      {page.data.story.content.bottomContent && page.data.story.content.bottomContent.length > 0 ? (
        <Page body={page.data.story.content.bottomContent} />
      ) : null}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [page, settings, gigs] = await Promise.all([
    StoryblokService.get('cdn/stories/live', {}),
    StoryblokService.get('cdn/stories/settings', {}),
    StoryblokService.getGigs('cdn/stories', {}),
  ]);

  return {
    props: {
      page,
      settings,
      gigs,
    },
  };
};
