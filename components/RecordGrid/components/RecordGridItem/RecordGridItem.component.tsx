import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/de';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

import recordTypeString from '@utils/recordTypeString';
import { shimmer, toBase64 } from '@utils/imagePlaceholder';
import useStyles from './RecordGridItem.styles';
import { IImage } from '@interfaces/image.interface';

moment.locale('de');

interface IRecordGridItemProps {
  name: string;
  recordHref: string;
  coverImage: IImage;
  releaseDate: string;
  formatType: string;
}

const RecordGridItem = ({
  name,
  recordHref,
  coverImage,
  releaseDate,
  formatType,
}: IRecordGridItemProps) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link href={recordHref}>
        <a aria-label={`Zur Detailseite von ${name}`} className={classes.link}>
          <div className={classes.imageContainer}>
            <Image
              className={classes.image}
              src={coverImage.filename}
              alt={coverImage.alt}
              layout="responsive"
              width={50}
              height={50}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 400))}`}
            />
          </div>
          <Grid className={classes.infoContainer} container>
            <Grid item xs={12}>
              <Typography variant="caption">
                {moment(releaseDate).format('MM/YYYY')}
                {' - '}
                {recordTypeString(formatType)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.name}>
                {name}
              </Typography>
            </Grid>
          </Grid>
        </a>
      </Link>
    </Grid>
  );
};

export default RecordGridItem;
