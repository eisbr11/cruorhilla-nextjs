import moment from 'moment';
import 'moment/locale/de';
import { Grid2, Typography } from '@mui/material';
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
      <Grid2 size={{ xs: 12, sm: 3, md: 2 }}>
        <Grid2 container direction='column'>
          <meta
            itemProp='startDate'
            content={moment(gig.content.datum).toISOString(true)}
          />
          <Grid2>
            <Typography>
              {moment(gig.content.datum).format('DD.MM.YYYY')}
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant='caption'>
              {moment(gig.content.datum).format('dddd')}
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant='caption'>
              {`${moment(gig.content.datum).locale('de').format('HH:mm')} Uhr`}
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 7, md: 8 }}>
        <Grid2 container direction='column'>
          <Grid2>
            <Typography>
              <meta itemProp='name' content={gig.content.name} />
              {gig.content.name}
            </Typography>
          </Grid2>
          <Grid2
            itemProp='location'
            itemScope
            itemType='https://schema.org/Place'
          >
            <Typography variant='caption' color='textSecondary'>
              <span itemProp='addressLocality'>{gig.content.town}</span>
              {' @'}
              <span itemProp='name'>{gig.content.venue}</span>
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant='caption'>{gig.content.description}</Typography>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 2 }}>
        <Typography align='right'>
          <SpanPriceLabel>Preis: </SpanPriceLabel>
          <SpanPriceValue>{gig.content.price}</SpanPriceValue>
        </Typography>
      </Grid2>
    </GridItemWrapper>
  );
};

export default GigItem;
