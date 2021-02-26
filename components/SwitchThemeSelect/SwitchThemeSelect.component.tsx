import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

import { Theme, useTheme, getThemeName } from '@context/theme.context';
import useStyles from './SwitchThemeSelect.styles';

const SwitchThemeSelect = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTheme(event.target.value as Theme);
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
