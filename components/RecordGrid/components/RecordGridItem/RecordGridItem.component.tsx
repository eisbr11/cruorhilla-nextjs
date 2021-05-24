import Link from 'next/link';
import moment from 'moment';
import { Grid, Typography } from '@material-ui/core';
import Image from 'next/image';

import recordTypeString from '@utils/recordTypeString';
import useStyles from './RecordGridItem.styles';

const RecordGridItem = ({
  name,
  recordHref,
  coverImage,
  releaseDate,
  formatType,
}: {
  name: string,
  recordHref: string,
  coverImage: {
    filename: string,
    alt: string,
  },
  releaseDate: string,
  formatType: string,
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link href={recordHref}>
        <a className={classes.link}>
          <div className={classes.imageContainer}>
            <Image
              className={classes.image}
              src={coverImage.filename}
              alt={coverImage.alt}
              layout="responsive"
              width={1}
              height={1}
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
