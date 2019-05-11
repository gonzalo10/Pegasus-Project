import React from 'react';

import Button from '@material-ui/core/Button';
import classes from './Button.module.css'

 
const button = (props) => (
        <Button 
        variant="outlined" 
        color="primary" 
        className={classes.button}
        disabled={props.disabled}
        onClick={props.clicked}>
          {props.children}
        </Button>

)
 
export default button;