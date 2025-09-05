import moment from 'moment';
import 'moment/locale/de';
import { Button, Grid, Typography } from '@mui/material';
import { SbEditableContent } from 'storyblok-react';

import {
  GridItemWrapper,
  SpanPriceLabel,
  SpanPriceValue,
} from './GigItem.component.styles';

moment.locale('de');

interface IGigItemProps {
  gig: SbEditableContent;
}

const GigItem = ({ gig }: IGigItemProps) => {
  return (
    <GridItemWrapper
      itemScope
      itemType='http://schema.org/MusicEvent'
      container
      alignItems='center'
    >
      <meta itemProp='performer' content='Cruor Hilla' />
      <Grid size={{ xs: 12, sm: 3, md: 2 }}>
        <Grid container direction='column'>
          <meta
            itemProp='startDate'
            content={moment(gig.content.datum).toISOString(true)}
          />
          <Grid>
            <Typography>
              {moment(gig.content.datum).format('DD.MM.YYYY')}
            </Typography>
          </Grid>
          <Grid>
            <Typography variant='caption'>
              {moment(gig.content.datum).format('dddd')}
            </Typography>
          </Grid>
          <Grid>
            <Typography variant='caption'>
              {`${moment(gig.content.datum).locale('de').format('HH:mm')} Uhr`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, sm: 7, md: 8 }}>
        <Grid container direction='column'>
          <Grid>
            <Typography>
              <meta itemProp='name' content={gig.content.name} />
              {gig.content.name}
            </Typography>
          </Grid>
          <Grid
            itemProp='location'
            itemScope
            itemType='https://schema.org/Place'
          >
            <Typography variant='caption' color='textSecondary'>
              <span itemProp='addressLocality'>{gig.content.town}</span>
              {' @'}
              <span itemProp='name'>{gig.content.venue}</span>
            </Typography>
          </Grid>
          <Grid>
            <Typography variant='caption'>{gig.content.description}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, sm: 2 }} gap={1} container direction='column'>
        <Typography align='right'>
          <SpanPriceLabel>Preis: </SpanPriceLabel>
          <SpanPriceValue>{gig.content.price}</SpanPriceValue>
        </Typography>
        {gig.content.ticket_link && (
          <Button
            variant='contained'
            color='success'
            fullWidth
            href={gig.content.ticket_link.cached_url}
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Tickets
          </Button>
        )}
      </Grid>
    </GridItemWrapper>
  );
};

export default GigItem;
