import StoryblokClient, {
  ISbStoriesParams,
  ISbStoryParams,
} from 'storyblok-js-client';
import moment from 'moment';

import Config from 'lib/Config';

class StoryblokService {
  private readonly devMode: boolean;

  private token: string;

  private client: StoryblokClient;

  private query: object;

  constructor() {
    if (Config.storyblok_dev_mode) {
      this.devMode = true; // Always loads draft
    }
    this.token = Config.storyblok_api_key;
    this.client = new StoryblokClient({
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

  get(slug: string, _params: ISbStoryParams) {
    const params = _params || {};

    if (this.devMode) {
      params.version = 'draft';
    }

    return this.client.get(slug, params);
  }

  getRecords(slug: string, _params: ISbStoriesParams) {
    const params = _params || {};

    if (this.devMode) {
      params.version = 'draft';
    }

    params.filter_query = {
      component: {
        in: 'record',
      },
    };

    params.sort_by = 'content.releaseDate:desc';

    return this.client.get(slug, params);
  }

  getRecord(slug: string, recordSlug: string, _params: ISbStoryParams) {
    const params = _params || {};

    if (this.devMode) {
      params.version = 'draft';
    }

    return this.client.get(slug + recordSlug, params);
  }

  getGigs(slug: string, _params: ISbStoriesParams) {
    const params = _params || {};

    if (this.devMode) {
      params.version = 'draft';
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
