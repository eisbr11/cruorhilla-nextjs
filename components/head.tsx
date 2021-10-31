import NextHead from 'next/head';

const defaultDescription = 'Die Webseite der Band Cruor Hilla. Hier findest du alle Neuigkeiten über Konzerte, Musik und noch weitere Infos über die PunkRock Band aus Berlin.';

interface IHeadProps {
  title?: string;
  description?: string;
}

const Head = ({ title, description }: IHeadProps ) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || 'Cruor Hilla'}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#603cba" />
    <meta name="theme-color" content="#333333" />
    <meta property="og:title" key="title" content={title || 'Cruor Hilla'} />
    <meta property="og:image" key="image" content="/social_media_logo.jpg" />
    <meta property="og:description" key="description" content={description || defaultDescription} />
  </NextHead>
);

Head.defaultProps = {
  title: '',
  description: '',
};

export default Head;
