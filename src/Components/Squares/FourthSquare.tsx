// import hooks
import { useState, useEffect } from 'react';

// import mui elements
import {
  Grid
} from '@mui/material';

// import styles
import { useStyles } from '../GameField';

// import type
import {Props} from '../GameField'

// COMPONENT
function FourthSquare({ handleClick, amountOfClicks, setResults, whoWin}: Props ) {
  const classes = useStyles();

  // if isActive = FALSE -> this square was not  clicked
  const [isActive, setIsActive] = useState<boolean>(false);

  // style square
  const [style, setStyle] = useState<string>(classes.none);

  // check it was clicked 
  const checkActive = (event:React.MouseEvent<HTMLElement>) => {
    const squareNumber = 4;
    if( isActive === false) {
      setStyle(handleClick() === "cross" ? classes.cross : classes.circle)
      setResults((prevResults) => {
        prevResults.splice(squareNumber-1,1,handleClick());
        return prevResults 
      }) 
      setIsActive(true);
    }
  }

  // restart game
  useEffect( () => {
    if(amountOfClicks>8 || whoWin!=="none") setIsActive(false)   
  },[amountOfClicks, whoWin])  

  return ( 
    <Grid 
      item 
      xs={4}
      className={ isActive === false ? classes.none : style}
      onClick={checkActive}
    />
  );
}
export default FourthSquare;