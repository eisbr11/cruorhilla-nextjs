import { Grid, Typography } from '@material-ui/core';
import AlbumIcon from '@material-ui/icons/Album';
import moment from 'moment';

import recordTypeString from '@utils/recordTypeString';

const ReleaseInfo = ({
  releaseDate,
  formatType,
}: {
  releaseDate: string,
  formatType: string,
}) => (
  <>
    <Grid item xs={12}>
      <Typography align="right" color="textPrimary">Release</Typography>
      <Typography align="right" color="textSecondary">{moment(releaseDate).format('DD.MM.YYYY')}</Typography>
    </Grid>
    <Grid>
      <Typography align="right" color="textPrimary">
        <AlbumIcon />
        {'Format '}
      </Typography>
      <Typography align="right" color="textSecondary">{recordTypeString(formatType)}</Typography>
    </Grid>
  </>
);

export default ReleaseInfo;
