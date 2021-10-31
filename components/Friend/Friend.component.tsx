import React from 'react';
import useStyles from '@components/Friend/Friend.styles';
import { IImage } from '@interfaces/image.interface';

interface IFriendComponentProps {
  name: string;
  link: string;
  text: string,
  image: IImage;
}

const FriendComponent = ({
  name,
  link,
  text,
  image,
}: IFriendComponentProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {name}
      -
      {link}
      -
      {text}
      -
      {image.filename}
    </div>
  );
};

export default FriendComponent;
