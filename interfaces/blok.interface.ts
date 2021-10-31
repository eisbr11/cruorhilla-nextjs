import { SbEditableContent } from 'storyblok-react';
import { StoryblokResult } from 'storyblok-js-client';

export interface IBlokComponentProps {
  blok: SbEditableContent;
}

export interface IBlokPageProps {
  body: SbEditableContent;
}

export interface IStoryblokPageProps {
  page: StoryblokResult,
  settings: StoryblokResult,
}
