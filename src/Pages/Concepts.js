import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

const Concepts= () => {
  const gridStyle = {
    padding: '20px',
    textAlign: 'left'
  }
  const tooltip = 'var obj={num : 2} \nvar add = function(num2,num3,num4){\nreturn this.num + num2 + num3 + num4;\n}\nvar arr=[3,4,5];\n//Call method\nconsole.log(add.call(obj,3,4,5));  //Output : 14\n//Apply method\nconsole.log(add.apply(obj,arr));   //Output : 14\n//bind Method\nvar bound = add.bind(obj);\nconsole.log(bound(3,4,5));'
  return (
    <Fragment>
      <Grid spacing={2} container style={gridStyle}>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <b>Colsures</b>:
          For privatisation of variables, inner functions have access to reference but not value,
          to overcome that use IIFE, for more click &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://javascriptissexy.com/understand-javascript-closures-with-ease/"
          >
             here
          </a>
        </Grid>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <b>Memoization</b>: Fetch from cache or calculate and store (based on input args of function)
           in cache for next use
        </Grid>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <b>Callback</b>: A reference to executable code, or a piece of executable code, that is passed as an argument to other code
        </Grid>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <b>Hoisting</b>:
          <ul>
            <li>Var and function declarations are hoisted, but not assignments (Function assignments are function expressions)</li>
            <li>Both class declarations and assignments are not hoisted</li>
            <li>Precedence for var assignment than function declaration and function declaration than var declaration.</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <b>Call/Apply/Bind</b>:
          <Tooltip title={tooltip} style={{whiteSpace: 'pre-line'}}>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Call - to bind the value, apply -array cna be used, bind - returns instance instead of value. code</p>
          </Tooltip>
        </Grid>
      </Grid>
    </Fragment>
  )
}
export default Concepts
