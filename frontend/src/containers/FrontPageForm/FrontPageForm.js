import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import AutoComplete from '../../components/UI/AutoComplete/AutoComplete'
import Grid from '@material-ui/core/Grid';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff'
import NavigationIcon from '@material-ui/icons/Navigation';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './FrontPageForm.css';
import { throws } from 'assert';


class FrontPageForm extends Component {
  
  state = {
    value: '',
    city: false
  }

  componentDidMount () {
    console.log(this.props)
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({value: event.target.value, city: true});
    //this.updatePurchaseState( updatedIngredients );
  }
  handleSubmit = () => {
    console.log(this.state.value)
    this.props.history.push('/trips')
  }
  
  
 


  render(){
    return (
      <Paper className='root' elevation={1}>
        <Typography variant="h5" component="h3" className='typo'>
          <em>Where Is Going To Be Your Next Adventure?</em>
            <div className='roots'>
                <form >
                  <Grid container spacing={24}>
                    <Grid item xs={2} padding={0}>
                        <FlightTakeoff fontSize="large" className='box'/>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField 
                          type='text' 
                          placeholder='Your Homecity' 
                          name='city' 
                          onChange={this.handleChange}
                          value={this.state.value} />
                    </Grid>
                    <Grid item xs={3}>
                        <Button 
                          clicked={this.handleSubmit}
                          disabled={!this.state.city} >
                          <NavigationIcon fontSize="small" />Go!
                        </Button>
                    </Grid>
                  </Grid>
                </form>
            </div>
        </Typography>
      </Paper>
    );
  }

}


export default withRouter(FrontPageForm);