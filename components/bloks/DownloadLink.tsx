import StyledDownloadLink from 'components/DownloadLink';
import { IBlokComponentProps } from 'interfaces/blok.interface';

const DownloadLink = ({ blok }: IBlokComponentProps) => (
  <StyledDownloadLink title={blok.title} source={blok.asset.filename} />
);

export default DownloadLink;
