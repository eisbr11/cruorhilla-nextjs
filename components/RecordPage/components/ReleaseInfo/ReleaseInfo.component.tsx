import { Grid2, Typography } from '@mui/material';
import moment from 'moment';
import 'moment/locale/de';

import recordTypeString from 'utils/recordTypeString';

moment.locale('de');

interface IReleaseInfoProps {
  releaseDate: string;
  formatType: string;
}

const ReleaseInfo = ({ releaseDate, formatType }: IReleaseInfoProps) => (
  <>
    <Grid2 size={12}>
      <Typography align='right' color='textPrimary'>
        Release
      </Typography>
      <Typography align='right' color='textSecondary'>
        {moment(releaseDate).format('DD.MM.YYYY')}
      </Typography>
    </Grid2>
    <Grid2>
      <Typography align='right' color='textPrimary'>
        {'Format '}
      </Typography>
      <Typography align='right' color='textSecondary'>
        {recordTypeString(formatType)}
      </Typography>
    </Grid2>
  </>
);

export default ReleaseInfo;
