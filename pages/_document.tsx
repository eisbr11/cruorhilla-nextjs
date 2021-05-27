import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

import StoryblokService from '@utils/storyblok-service';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => originalRenderPage({
      // eslint-disable-next-line react/jsx-props-no-spreading
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  }

  render() {
    /* eslint-disable react/no-danger */
    return (
      <Html lang="de">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;800&display=swap" rel="stylesheet" />
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
