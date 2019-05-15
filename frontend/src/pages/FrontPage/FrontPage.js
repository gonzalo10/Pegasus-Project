import React, { Component } from 'react';


import IntroPage from '../../containers/FrontPageIntro/FrontPageIntro';

import FrontBackground from '../../assets/img/FrontBackground.png'


import './FrontPage.css';
import FrontPageForm from '../../containers/FrontPageForm/FrontPageForm';
 
class FrontPage extends Component {

    componentWillUpdate () {
        console.log(this.props.handleValue)
        console.log(this.props.city)
    }
    
    // handleTrips = () => {
    //     this.props.history.push('/trips')
    //     console.log('que apsa')
    // }

    // componentDidMount () {
    //     console.log(this.props);
    //     axios.get( 'https://react-my-burger.firebaseio.com/ingredients.json' )
    //         .then( response => {
    //             this.setState( { ingredients: response.data } );
    //         } )
    //         .catch( error => {
    //             this.setState( { error: true } );
    //         } );
    // }

    
    
    render () {
        return(
            <div className='background'>
                <div className='splitLeft'>
                    <IntroPage />
                </div>
                <div className='splitRight'>
                    <FrontPageForm 
                        clicked={this.handleTrips} />
                </div>
            </div>
        )
    }
}


 
export default FrontPage;