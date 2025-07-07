import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { set as lsSet } from 'local-storage';

import { ETheme, useTheme, getThemeName } from 'context/theme.context';
import Config from 'lib/Config';
import { FormControlStyled } from './SwitchThemeSelect.styles';

const SwitchThemeSelect = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (event: SelectChangeEvent<ETheme>) => {
    setTheme(event.target.value as ETheme);
    lsSet(Config.theme_ls_key, event.target.value as string);
  };

  return (
    <FormControlStyled variant='outlined' color='secondary'>
      <InputLabel id='select-theme-label'>Thema auswählen</InputLabel>
      <Select
        value={theme}
        onChange={handleChange}
        labelId='select-theme-label'
        label='Thema auswählen'
        id='theme-select-input'
        displayEmpty
      >
        {Object.keys(ETheme).map((value) => (
          <MenuItem key={value} value={value}>
            {getThemeName(value)}
          </MenuItem>
        ))}
      </Select>
    </FormControlStyled>
  );
};

export default SwitchThemeSelect;
