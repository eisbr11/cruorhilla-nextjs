import Storyblok, { StoriesParams, StoryParams } from 'storyblok-js-client';

import Config from '@lib/Config';
import moment from 'moment';

class StoryblokService {
  private readonly devMode: boolean;

  private token: string;

  private client: Storyblok;

  private query: {};

  constructor() {
    this.devMode = true; // Always loads draft
    this.token = Config.storyblok_preview_token;
    this.client = new Storyblok({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory',
      },
    });

    this.query = {};
  }

  getCacheVersion() {
    return this.client.cacheVersion;
  }

  get(slug: string, _params: StoryParams) {
    const params = _params || {};

    if (this.getQuery('_storyblok') || this.devMode || (typeof window !== 'undefined' && window.storyblok)) {
      params.version = 'draft';
    }

    if (typeof window !== 'undefined' && typeof window.StoryblokCacheVersion !== 'undefined') {
      params.cv = window.StoryblokCacheVersion;
    }

    return this.client.get(slug, params);
  }

  getRecords(slug: string, _params: StoriesParams) {
    const params = _params || {};

    if (this.getQuery('_storyblok') || this.devMode || (typeof window !== 'undefined' && window.storyblok)) {
      params.version = 'draft';
    }

    if (typeof window !== 'undefined' && typeof window.StoryblokCacheVersion !== 'undefined') {
      params.cv = window.StoryblokCacheVersion;
    }

    params.filter_query = {
      component: {
        in: 'record',
      },
    };

    params.sort_by = 'content.releaseDate:desc';

    return this.client.get(slug, params);
  }

  getRecord(slug: string, recordSlug: string, _params: StoryParams) {
    const params = _params || {};

    if (this.getQuery('_storyblok') || this.devMode || (typeof window !== 'undefined' && window.storyblok)) {
      params.version = 'draft';
    }

    if (typeof window !== 'undefined' && typeof window.StoryblokCacheVersion !== 'undefined') {
      params.cv = window.StoryblokCacheVersion;
    }

    return this.client.get(slug + recordSlug, params);
  }

  getGigs(slug: string, _params: StoriesParams) {
    const params = _params || {};

    if (this.getQuery('_storyblok') || this.devMode || (typeof window !== 'undefined' && window.storyblok)) {
      params.version = 'draft';
    }

    if (typeof window !== 'undefined' && typeof window.StoryblokCacheVersion !== 'undefined') {
      params.cv = window.StoryblokCacheVersion;
    }

    params.filter_query = {
      component: {
        in: 'gig',
      },
      datum: {
        gt_date: moment().subtract(1, 'days').format(),
      },
    };

    params.sort_by = 'content.datum:asc';

    return this.client.get(slug, params);
  }

  setQuery(query) {
    this.query = query;
  }

  getQuery(param) {
    return this.query[param];
  }
}

const storyblokInstance = new StoryblokService();

export default storyblokInstance;
