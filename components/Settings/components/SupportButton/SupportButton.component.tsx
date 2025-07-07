import { FC } from 'react';
import { Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { FabStyled } from './SupportButton.styles';

const SupportButton: FC = () => {
  const encodedText = encodeURI(
    'Hey, Ich habe eine richtig coole Band entdeckt! Cruor Hilla heißen die. Die machen so PunkRock mit deutschen Texten aber richtig geil! Hör dir die unbedingt mal an.\n\nhttps://www.cruorhilla.de'
  );

  const supportHref = `https://wa.me/?text=${encodedText}`;
  return (
    <Tooltip placement='left' title='Unterstütze uns!'>
      <FabStyled
        href={supportHref}
        //target="_blank"
        size='medium'
        color='secondary'
        aria-label='support'
      >
        <FavoriteIcon />
      </FabStyled>
    </Tooltip>
  );
};

export default SupportButton;
