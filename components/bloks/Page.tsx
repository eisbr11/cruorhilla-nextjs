import { IBlokPageProps } from 'interfaces/blok.interface';
import Component from './index';

const Page = ({ body }: IBlokPageProps) => (
  <>
    {body.map((blok) => (
      <Component blok={blok} key={blok._uid} />
    ))}
  </>
);

export default Page;
