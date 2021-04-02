import { SbEditableContent } from 'storyblok-react';
import StyledDownloadLink from '@components/DownloadLink';

const DownloadLink = ({ blok }: { blok: SbEditableContent }) => (
  <StyledDownloadLink title={blok.title} source={blok.asset.filename} />
);

export default DownloadLink;
