// import hooks
import { Dispatch, SetStateAction, useState, useEffect } from 'react';

// import components
import FirstSquare from './Squares/FirstSquare';
import SecondSquare from './Squares/SecondSquare';
import ThirdSquare from './Squares/ThirdSquare';
import FourthSquare from './Squares/FourthSquare';
import FifthSquare from './Squares/FifthSquare';
import SixthSquare from './Squares/SixthSquare';
import SeventhSquare from './Squares/SeventhSquare';
import EighthSquare from './Squares/EighthSquare';
import NinethSquare from './Squares/NinethSquare';

// import mui elements
import {
  Grid, 
  Typography
} from '@mui/material';

// import makeStyles
import { makeStyles } from '@mui/styles'

// import img
import circle from '../img/circle.jpg'
import cross from '../img/cross.jpg'

// create styles
export const useStyles = makeStyles({
  gameField: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'absolute',
    transform: 'translate(50%,-50%)',
    top: '50%',
    right: '50%',
    backgroundColor: 'black',
    height: '80vh',
    width: '80vh'
  },
  none: {
    backgroundColor: 'white',
  },
  cross: {
    backgroundImage: `url(${cross})`, 
    backgroundSize: 'cover',
    backgoundPosition: 'center' 
  },
  circle: {
    backgroundImage: `url(${circle})`,
    backgroundSize: 'cover',
    backgoundPosition: 'center'
  },
  popupOff:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black',
    position: 'absolute',
    transform: 'translate(50%,-50%)',
    top: '50%',
    left: '-1000%',
    height: '90vh',
    width: '130vh',
    opacity: '0.8'

  },
  popupOn:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black',
    position: 'absolute',
    transform: 'translate(50%,-50%)',
    top: '50%',
    right: '50%',
    height: '90vh',
    width: '90vh',
    opacity: '0.8'
  },
  text: {
    textAlign: "center",
    color: "white",

  },
  button: {
    width: "30%",
    fontSize: "200%",
  '&:hover':{
    backgroundColor: "black",
    color: "white",
    border: "2px solid white"
  }
  }
});

// Type of props
export  type Props = {
  amountOfClicks: number
  setResults: Dispatch<SetStateAction<string[]>> 
  handleClick: () => string
  whoWin: string
}

// COMPONENT
function GameField() {
  const classes = useStyles();

// hooks
  const [amountOfClicks, setAmountOfClicks] = useState<number>(0);

// starting value of squares
  const squares = [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none', 
    'none',
    'none' 
  ]

  // what was chose in specific square
  const [results, setResults] = useState<string[]>(squares)

  // result of game: cross | circle | draw
  const [whoWin, setWhoWin] = useState<string>(`none`)

  const [whoIsMove, setWhoIsMove] = useState<string>(`X`)

  // functions
  const handleClick= () => {
    setAmountOfClicks(amountOfClicks+1)
    if (amountOfClicks % 2 === 1) {
      setWhoIsMove('X')
      return "circle"}
    else {
      setWhoIsMove('O')
      return "cross"}
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkWinner = () => {
    if(
      (results[0] === "circle" && 
      results[1] === "circle"  && 
      results[2] === "circle") ||
      (results[0] === "circle" && 
      results[3] === "circle"  && 
      results[6] === "circle") ||
      (results[6] === "circle" && 
      results[7] === "circle"  && 
      results[8] === "circle") ||
      (results[4] === "circle" && 
      results[5] === "circle"  && 
      results[8] === "circle") ||
      (results[0] === "circle" && 
      results[4] === "circle"  && 
      results[8] === "circle") ||
      (results[2] === "circle" && 
      results[4] === "circle"  && 
      results[6] === "circle") ||
      (results[3] === "circle" && 
      results[4] === "circle"  && 
      results[5] === "circle") ||
      (results[1] === "circle" && 
      results[4] === "circle"  && 
      results[7] === "circle")
    ) setWhoWin("Circle win the game")  
    else if(
      (results[0] === "cross" && 
      results[1] === "cross"  && 
      results[2] === "cross") ||
      (results[0] === "cross" && 
      results[3] === "cross"  && 
      results[6] === "cross") ||
      (results[6] === "cross" && 
      results[7] === "cross"  && 
      results[8] === "cross") ||
      (results[4] === "cross" && 
      results[5] === "cross"  && 
      results[8] === "cross") ||
      (results[0] === "cross" && 
      results[4] === "cross"  && 
      results[8] === "cross") ||
      (results[2] === "cross" && 
      results[4] === "cross"  && 
      results[6] === "cross") ||
      (results[3] === "cross" && 
      results[4] === "cross"  && 
      results[5] === "cross") ||
      (results[1] === "cross" && 
      results[4] === "cross"  && 
      results[7] === "cross")
    ) setWhoWin("Cross win the game")
    else if (amountOfClicks>8) {
      setWhoWin("draw")
    }
  }

  const handleButton = () => {
    setWhoWin("none");
    setResults(squares);
    setAmountOfClicks(0);
    setWhoIsMove('X');
  }

  // to restart game 
  useEffect( () => {
    checkWinner()
    console.log(`array:${results}`);
    console.log(`amount:${amountOfClicks}`);
    console.log(`Winner:${whoWin}`);
  },[amountOfClicks, checkWinner, results, whoWin])

  return (
  <Grid>
    <Grid 
      className={classes.gameField}
    >
      <FirstSquare 
        handleClick={handleClick} amountOfClicks={amountOfClicks} 
        setResults={setResults}
        whoWin={whoWin}
      />
      <SecondSquare 
        handleClick={handleClick} amountOfClicks={amountOfClicks} 
        setResults={setResults}
        whoWin={whoWin}
      />
      <ThirdSquare
        handleClick={handleClick} amountOfClicks={amountOfClicks}  
        setResults={setResults} 
        whoWin={whoWin}
      />
      <FourthSquare
        handleClick={handleClick} amountOfClicks={amountOfClicks}  
        setResults={setResults}
        whoWin={whoWin} 
      />
      <FifthSquare
        handleClick={handleClick} amountOfClicks={amountOfClicks}  
        setResults={setResults}
        whoWin={whoWin} 
      />
      <SixthSquare
        handleClick={handleClick} amountOfClicks={amountOfClicks}  
        setResults={setResults} 
        whoWin={whoWin}
      />
      <SeventhSquare
        handleClick={handleClick} amountOfClicks={amountOfClicks}  
        setResults={setResults}
        whoWin={whoWin} 
      />
      <EighthSquare
        handleClick={handleClick} amountOfClicks={amountOfClicks}  
        setResults={setResults} 
        whoWin={whoWin}
      />
      <NinethSquare
        handleClick={handleClick} amountOfClicks={amountOfClicks}  
        setResults={setResults}
        whoWin={whoWin}
      />
    </Grid>
    <div className={whoWin === "none" ? classes.popupOff : classes.popupOn}>
      <h1 className={classes.text}>
        {whoWin}
      </h1>
      <button 
        className={classes.button}
        onClick={handleButton}
      >
        Restart game
      </button>
    </div>
    <Typography
      component= "div"
      sx={{
        color: "white",
        border: "2px solid black",
        borderRadius: "5%",
        position: 'absolute',
        transform: 'translate(50%,-50%)',
        top: '5%',
        right: '50%',
        backgroundColor: 'black',
        height: '7vh',
        width: '60vh'
      }}
    >
      <Typography sx={{
        textAlign: "center",
        fontSize: "150%",
        lineHeight: "7vh"
      }}>
        {whoIsMove} --- TURN
      </Typography>
    </Typography>
  </Grid>     
  );
}

export default GameField;
