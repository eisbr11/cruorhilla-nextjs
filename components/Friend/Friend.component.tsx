import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import type { IImage } from 'interfaces/image.interface';
import { shimmer, toBase64 } from 'utils/imagePlaceholder';
import { MarkdownViewer } from 'components/Markdown';
import { DivImageWrapper, GridContainer } from './Friend.styles';

interface IFriendComponentProps {
  name: string;
  link: string;
  text: string;
  image: IImage;
}

const FriendComponent = ({
  name,
  link,
  text,
  image,
}: IFriendComponentProps) => (
  <GridContainer container>
    <Grid item xs={12}>
      <Link href={link} target='_blank' aria-label={`Zur Seite von ${name}`}>
        <Typography mb={1} variant='h3'>
          {name}
        </Typography>
      </Link>
    </Grid>
    <Grid item xs={12}>
      <DivImageWrapper>
        <Link
          href={link}
          target='_blank'
          aria-label={`Zur Seite von ${name}`}
          style={{
            display: 'block',
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={image.filename}
            alt={image.alt}
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(600, 600)
            )}`}
            fill
            sizes='(max-width: 768px) 80vw,
              (max-width: 1200px) 50vw,
              33vw'
            style={{
              objectFit: 'contain',
            }}
          />
        </Link>
      </DivImageWrapper>
    </Grid>
    <Grid item xs={12}>
      <Typography component='div' variant='body1'>
        <MarkdownViewer content={text} />
      </Typography>
    </Grid>
  </GridContainer>
);

export default FriendComponent;
