import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { set as lsSet } from 'local-storage';

import { Theme, useTheme, getThemeName } from '@context/theme.context';
import Config from '@lib/Config';
import useStyles from './SwitchThemeSelect.styles';

const SwitchThemeSelect = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (event: SelectChangeEvent<Theme>) => {
    setTheme(event.target.value as Theme);
    lsSet(Config.theme_ls_key, event.target.value as string);
  };

  const classes = useStyles();
  return (
    <FormControl variant="outlined" color="secondary" className={classes.formControl}>
      <InputLabel id="select-theme-label">Thema auswählen</InputLabel>
      <Select
        value={theme}
        onChange={handleChange}
        labelId="select-theme-label"
        label="Thema auswählen"
        id="theme-select-input"
        displayEmpty
      >
        {Object.keys(Theme).map((value) => (
          <MenuItem key={value} value={value}>{getThemeName(value)}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SwitchThemeSelect;
