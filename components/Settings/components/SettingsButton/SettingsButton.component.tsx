import { FC } from 'react';
import { Tooltip } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

import { FabStyled } from './SettingsButton.styles';

interface ISettingsButtonProps {
  onClick: () => void;
}

const SettingsButton: FC<ISettingsButtonProps> = ({ onClick }) => {
  return (
    <Tooltip placement='left' title='Einstellungen'>
      <FabStyled
        onClick={onClick}
        size='medium'
        color='primary'
        aria-label='settings'
      >
        <TuneIcon />
      </FabStyled>
    </Tooltip>
  );
};

export default SettingsButton;
