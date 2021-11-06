import { Fab, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import useStyles from './SupportButton.styles';

const SupportButton = (): JSX.Element => {
  const encodedText = encodeURI('Hey, Ich habe eine richtig coole Band entdeckt! Cruor Hilla heißen die. Die machen so PunkRock mit deutschen Texten aber richtig geil! Hör dir die unbedingt mal an.\n\nhttps://www.cruorhilla.de');

  const supportHref = `https://wa.me/?text=${encodedText}`;
  const classes = useStyles();
  return (
    <Tooltip placement="left" title="Unterstütze uns!">
      <Fab
        target='_blank'
        href={supportHref}
        className={classes.fab}
        size="medium"
        color="secondary"
        aria-label="support"
      >
        <FavoriteIcon />
      </Fab>
    </Tooltip>
  );
};

export default SupportButton;
