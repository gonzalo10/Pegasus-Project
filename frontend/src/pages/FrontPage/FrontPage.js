import React, { Component } from 'react';


import IntroPage from '../../containers/FrontPageIntro/FrontPageIntro';
import PaperSheet from '../../components/UI/PaperSheet/PaperSheet'
import FrontBackground from '../../assets/img/FrontBackground.png'


import './FrontPage.css';
 
class FrontPage extends Component {

    componentWillUpdate () {
        console.log(this.props.handleValue)
    }
    
    handleTrips = () => {
        this.props.history.push('/trips')
    }

    
    
    render () {


        return(
            <div className='background'>
                <div className='splitLeft'>
                    <IntroPage />
                </div>
                <div className='splitRight'>
                    <PaperSheet clicked={this.handleTrips} value={this.props.handleValue} />
                </div>
            </div>
        )
    }
}


 
export default FrontPage;