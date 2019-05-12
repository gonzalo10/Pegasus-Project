import React, { Component } from 'react';


import IntroPage from '../../containers/FrontPageIntro/FrontPageIntro';
import PaperSheet from '../../components/UI/PaperSheet/PaperSheet'

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
            <React.Fragment>
                <div className='splitLeft'>
                    <IntroPage />
                </div>
                <div className='splitRight'>
                    <PaperSheet clicked={this.handleTrips} value={this.props.handleValue} />
                </div>
            </React.Fragment>
        )
    }
}
 
export default FrontPage;