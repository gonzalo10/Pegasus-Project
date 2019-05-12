import React, { Component } from 'react';


import IntroPage from '../../containers/IntroPage/IntroPage';
import PaperSheet from '../../components/UI/PaperSheet/PaperSheet'

import './FrontPage.css';
 
class FrontPage extends Component {
    
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
                    <PaperSheet clicked={this.handleTrips}/>
                </div>
            </React.Fragment>
        )
    }
}
 
export default FrontPage;