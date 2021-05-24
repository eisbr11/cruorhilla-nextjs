import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import SwitchThemeSelect from '@components/SwitchThemeSelect';
import useStyles from './SettingsModalContent.styles';

const SettingsModalContent = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.contentWrap}>
      <Typography variant="h5" gutterBottom id="transition-modal-title">Transition modal</Typography>
      <Typography variant="body1" className={classes.description} id="transition-modal-description">Ist dir das Design zu eintönig? Dann stell doch ein anderes ein.</Typography>
      <SwitchThemeSelect />
    </Paper>
  );
};

export default SettingsModalContent;
