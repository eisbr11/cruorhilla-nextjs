import useStyles from './ThreeLinesButton.styles';

const ThreeLinesButton = ({
  active,
  clickHandler,
}: {
  active?: boolean,
  clickHandler?,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <button aria-label="Navigation öffnen" onClick={clickHandler} className={classes.button} type="button">
        <span className={`${classes.lines} ${active && classes.linesActive}`} />
      </button>
    </div>
  );
};

export default ThreeLinesButton;

ThreeLinesButton.defaultProps = {
  active: false,
  clickHandler: () => {},
};
