import { Grid, Typography } from '@mui/material';
import moment from 'moment';
import 'moment/locale/de';

import recordTypeString from 'utils/recordTypeString';

moment.locale('de');

interface IReleaseInfoProps {
  releaseDate: string;
  formatType: string;
}

const ReleaseInfo = ({
  releaseDate,
  formatType,
}: IReleaseInfoProps) => (
  <>
    <Grid item xs={12}>
      <Typography align="right" color="textPrimary">Release</Typography>
      <Typography align="right" color="textSecondary">{moment(releaseDate).format('DD.MM.YYYY')}</Typography>
    </Grid>
    <Grid>
      <Typography align="right" color="textPrimary">
        {'Format '}
      </Typography>
      <Typography align="right" color="textSecondary">{recordTypeString(formatType)}</Typography>
    </Grid>
  </>
);

export default ReleaseInfo;
