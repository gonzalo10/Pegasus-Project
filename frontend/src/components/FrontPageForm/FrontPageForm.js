import React from 'react';

import Button from './../UI/Button/Button'
import AutoComplete from '../UI/AutoComplete/AutoComplete'


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff'
import NavigationIcon from '@material-ui/icons/Navigation';

import './FrontPageForm.css';


function CenteredGrid(props) {

  return (
    <div className={props.root}>
        <form >
            <Grid container spacing={24}>
                <Grid item xs={2} padding={0}>
                    <FlightTakeoff fontSize="large" className='box'/>
                </Grid>
                <Grid item xs={7}>
                    <AutoComplete>
                    </AutoComplete>
                </Grid>
                <Grid item xs={3}>
                    <Button><NavigationIcon fontSize="small" />Go!</Button>
                </Grid>
            </Grid>
        </form>
    </div>
  );
}

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: '20px',

    },
    border: {
      border: '1px solid black',
    }
  });

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);