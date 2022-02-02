// import component
import GameField from './Components/GameField';

// import mui elements
import {
  Container
} from '@mui/material';

// import mui colors
import { blue } from '@mui/material/colors'

// import makeStyles
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  container: {
      position: 'relative',
      backgroundColor: blue[200], 
      height: '100vh'
  }
});
function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container} >
      <GameField/>
    </Container>
  );
}

export default App;
