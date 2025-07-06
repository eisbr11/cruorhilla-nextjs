import React from 'react';
import { Typography } from '@mui/material';

import SwitchThemeSelect from 'components/SwitchThemeSelect';
import { ContentWrapStyled, DescriptionStyled } from './SettingsModalContent.styles';

const SettingsModalContent = () => {
  return (
    <ContentWrapStyled>
      <Typography variant="h5" gutterBottom id="transition-modal-title">Einstellungen</Typography>
      <DescriptionStyled variant="body1" id="transition-modal-description">Ist dir das Design zu eintönig? Dann stell doch ein anderes ein.</DescriptionStyled>
      <SwitchThemeSelect />
    </ContentWrapStyled>
  );
};

export default SettingsModalContent;
