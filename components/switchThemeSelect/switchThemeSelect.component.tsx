import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

import { Theme, useTheme } from '@context/theme.context';

const SwitchThemeSelect = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTheme(event.target.value as Theme);
  };
  return (
    <FormControl>
      <InputLabel>Theme Switch</InputLabel>
      <Select
        variant="outlined"
        value={theme}
        onChange={handleChange}
        label="Theme Switch"
      >
        {Object.keys(Theme).map((value) => (
          <MenuItem key={value} value={value}>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SwitchThemeSelect;
