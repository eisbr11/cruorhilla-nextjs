import moment from 'moment';
import 'moment/locale/de';
import { Grid, Typography } from '@mui/material';

import useStyles from './GigItem.component.styles';

moment.locale('de');

interface IGigItemProps {
  gig: any;
}

const GigItem = ({ gig }: IGigItemProps) => {
  const classes = useStyles();
  return (
    <Grid itemScope itemType="http://schema.org/MusicEvent" className={classes.itemWrapper} container alignItems="center">
      <meta itemProp="performer" content="Cruor Hilla" />
      <Grid item xs={12} sm={3} md={2}>
        <Grid container direction="column">
          <meta itemProp="startDate" content={moment(gig.content.datum).toISOString(true)} />
          <Grid item>
            <Typography>
              {moment(gig.content.datum).format('DD.MM.YYYY')}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {moment(gig.content.datum).format('dddd')}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {`${moment(gig.content.datum).locale('de').format('HH:mm')} Uhr`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={7} md={8}>
        <Grid container direction="column">
          <Grid item>
            <Typography>
              <meta itemProp="name" content={gig.content.name} />
              {gig.content.name}
            </Typography>
          </Grid>
          <Grid item itemProp="location" itemScope itemType="https://schema.org/Place">
            <Typography variant="caption" color="textSecondary">
              <span itemProp="addressLocality">
                {gig.content.town}
              </span>
              {' @'}
              <span itemProp="name">
                {gig.content.venue}
              </span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {gig.content.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Typography align="right">
          <span className={classes.priceLabel}>Preis: </span>
          <span className={classes.priceValue}>{gig.content.price}</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default GigItem;
