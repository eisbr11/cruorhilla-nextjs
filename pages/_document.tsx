import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

import StoryblokService from '@utils/storyblok-service';

export default class MyDocument extends Document {
  render() {
    /* eslint-disable react/no-danger */
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{ __html: `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';` }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
    /* eslint-enable react/no-danger */
  }
}
