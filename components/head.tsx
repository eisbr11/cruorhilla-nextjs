import { FC } from 'react';
import NextHead from 'next/head';

const defaultTitle = 'Cruor Hilla';

const defaultDescription =
  'Die Webseite der Band Cruor Hilla. Hier findest du alle Neuigkeiten über Konzerte, Musik und noch weitere Infos über die PunkRock Band aus Berlin.';

interface IHeadProps {
  title?: string;
  description?: string;
}

const Head: FC<IHeadProps> = ({
  title = defaultTitle,
  description = defaultDescription,
}) => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta property='og:title' key='title' content={title} />
    <meta property='og:image' key='image' content='/social_media_logo.jpg' />
    <meta property='og:site_name' content='Cruor Hilla App' />
    <meta property='og:description' key='description' content={description} />
  </NextHead>
);

export default Head;
