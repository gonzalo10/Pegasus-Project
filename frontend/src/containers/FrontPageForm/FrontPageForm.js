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



class FrontPageForm extends Component {
  
  state = {
    value: '',
    continue: false
  }

  componentDidMount () {
    console.log(this.props)
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({value: event.target.value, continue: true});
    //this.updatePurchaseState( updatedIngredients );
  }

  handleSubmit = () => {
    // alert('You continue!');
    const queryParams = [];
    queryParams.push(this.state.value);
    this.props.history.push({
        pathname: ('/trips/' + queryParams)
    });
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
                        <FlightTakeoff style={{textAlign: 'center'}} fontSize="large" className='box'/>
                    </Grid>
                    <Grid item xs={7}>
                        <input 
                          style={{width: '100%'}}
                          type='text' 
                          placeholder='Your Homecity' 
                          name='city' 
                          onChange={(event) => this.handleChange(event)}
                          value={this.props.city}
                           />
                    </Grid>
                    <Grid item xs={3}>
                        <Button 
                          clicked={this.handleSubmit}
                          disabled={!this.state.continue} >
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