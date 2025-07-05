import React, { FC, useState } from 'react';
import Image from 'next/image';
import moment from 'moment';
import 'moment/locale/de';
import { Grid, Typography } from '@mui/material';

import type { IImage } from '@interfaces/image.interface';
import recordTypeString from '@utils/recordTypeString';
import { shimmer, toBase64 } from '@utils/imagePlaceholder';
import { ImageContainerStyled, InfoContainerStyled, LinkStyled } from './RecordGridItem.styles';

moment.locale('de');

interface IRecordGridItemProps {
  name: string;
  recordHref: string;
  coverImage: IImage;
  releaseDate: string;
  formatType: string;
}

const RecordGridItem: FC<IRecordGridItemProps> = ({
  name,
  recordHref,
  coverImage,
  releaseDate,
  formatType,
}) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <LinkStyled
        href={recordHref}
        aria-label={`Zur Detailseite von ${name}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ImageContainerStyled
          transition={{ type: 'ease' }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          className={'imageContainer'}
        >
          <Image
            className={'image'}
            src={coverImage.filename}
            alt={coverImage.alt}
            width={50}
            height={50}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 400))}`}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }} />
        </ImageContainerStyled>
        <InfoContainerStyled container>
          <Grid item xs={12}>
            <Typography variant="caption">
              {moment(releaseDate).format('MM/YYYY')}
              {' - '}
              {recordTypeString(formatType)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={'name'}>
              {name}
            </Typography>
          </Grid>
        </InfoContainerStyled>
      </LinkStyled>
    </Grid>
  );
};

export default RecordGridItem;
