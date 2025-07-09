import { Typography } from '@mui/material';

import { DivWrapper } from './NoConcertsInfo.styles';

const NoConcertsInfo = () => {
  return (
    <DivWrapper>
      <Typography align='center'>
        Aktuell stehen leider keine Konzerte an.
      </Typography>
    </DivWrapper>
  );
};

export default NoConcertsInfo;
