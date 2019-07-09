import React, { useState, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

function Hooks() {
  // Similar to useState but first arg is key to the value in local storage
  const [Count, setCounter] = useState(0);
  const setValue = (e) => {
    if(e.target.value === '')
      setCounter(0)
    else
      setCounter(parseInt(e.target.value))
  }
  return (
    <Fragment style={{padding: '10%'}}>
      <h3>This is a demo using Hooks</h3>
        <TextField onChange={setValue} value={Count}/><br/>
        <Fragment>Counter Value {Count}<br/> </Fragment>
        <Button color="primary" onClick={() => setCounter(Count+1)}>
          Increase Counter
        </Button>
    </Fragment>
  );
}

export default Hooks
