import useStyles from './BaellebadBg.styles';

interface IBackgroundSvgProps {
  gClass: string;
  className: string;
}

const BackgroundSvg = ({ gClass, className }: IBackgroundSvgProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className={className}>
    <g className={gClass}>
      <circle fill="#331845" cx="400" cy="400" r="900" />
      <circle fill="#421d5b" cx="400" cy="400" r="800" />
      <circle fill="#331845" cx="400" cy="400" r="700" />
      <circle fill="#421d5b" cx="400" cy="400" r="600" />
      <circle fill="#331845" cx="400" cy="400" r="500" />
      <circle fill="#421d5b" cx="400" cy="400" r="400" />
      <circle fill="#331845" cx="400" cy="400" r="300" />
      <circle fill="#421d5b" cx="400" cy="400" r="200" />
      <circle fill="#331845" cx="400" cy="400" r="100" />
    </g>
  </svg>
);

const BaellebadBg = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <BackgroundSvg className={classes.image} gClass={classes.gClass} />
    </div>
  );
};

export default BaellebadBg;
