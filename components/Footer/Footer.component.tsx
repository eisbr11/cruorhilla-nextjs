import { ISbStoryData } from 'storyblok-js-client';

import { AnchorLink, FooterContainer, LiListItem, UlList } from './Footer.styles';

interface IFooterComponentProps {
  settings?: ISbStoryData;
}

const FooterComponent = ({ settings }: IFooterComponentProps) => {
  return (
    <FooterContainer>
      <UlList>
        {settings &&
          settings.content &&
          settings.content.footer_navi.map((navitem) => (
            // eslint-disable-next-line no-underscore-dangle
            <LiListItem key={navitem._uid}>
              <AnchorLink href={navitem.link.cached_url}>{navitem.name}</AnchorLink>
            </LiListItem>
          ))}
      </UlList>
    </FooterContainer>
  );
};

export default FooterComponent;
