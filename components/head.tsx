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
    <meta property="og:title" key="title" content={title || 'Cruor Hilla'} />
    <meta property="og:image" key="image" content="/social_media_logo.jpg" />
    <meta property='og:site_name' content='Cruor Hilla App' />
    <meta property="og:description" key="description" content={description || defaultDescription} />
  </NextHead>
);

Head.defaultProps = {
  title: '',
  description: '',
};

export default Head;
