import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import ServerStyleSheets from '@mui/styles/ServerStyleSheets';

import StoryblokService from 'utils/storyblok-service';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html lang='de'>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='application-name' content='Cruor Hilla App' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#121212' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-TileImage' content='/favicon-144.png' />
          <meta name='msapplication-config' content='/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#603CBA' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content='Cruor Hilla App' />
          <link rel='manifest' href='/manifest.json' />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <link
            rel='apple-touch-icon'
            href='/pwa-assets/manifest-icon-192.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='256x256'
            href='/pwa-assets/apple-256.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='512x512'
            href='/pwa-assets/apple-512.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='1024x1024'
            href='/pwa-assets/apple-1024.png'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-2048-2732.jpg'
            media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-2732-2048.jpg'
            media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-1668-2388.jpg'
            media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-2388-1668.jpg'
            media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-1536-2048.jpg'
            media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-2048-1536.jpg'
            media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-1668-2224.jpg'
            media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-2224-1668.jpg'
            media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-1620-2160.jpg'
            media='(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-2160-1620.jpg'
            media='(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-1284-2778.jpg'
            media='(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-2778-1284.jpg'
            media='(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-1170-2532.jpg'
            media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-2532-1170.jpg'
            media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-1125-2436.jpg'
            media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-2436-1125.jpg'
            media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-1242-2688.jpg'
            media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-2688-1242.jpg'
            media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-828-1792.jpg'
            media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-1792-828.jpg'
            media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-1242-2208.jpg'
            media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-2208-1242.jpg'
            media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-750-1334.jpg'
            media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-1334-750.jpg'
            media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-640-1136.jpg'
            media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/pwa-assets/apple-splash-1136-640.jpg'
            media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;800&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
