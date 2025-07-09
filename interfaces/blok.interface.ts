import { SbEditableContent } from 'storyblok-react';
import { ISbResult } from 'storyblok-js-client';

export interface IBlokComponentProps {
  blok: SbEditableContent;
}

export interface IBlokPageProps {
  body: SbEditableContent;
}

export interface IStoryblokPageProps {
  page: ISbResult;
  settings: ISbResult;
}
