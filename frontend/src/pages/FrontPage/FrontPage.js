import React, { Component } from 'react';

import Events from '../../containers/Events/Events';
import IntroPage from '../../containers/IntroPage/IntroPage';
import './FrontPage.css';
 
class FrontPage extends Component {
    render () {
        return(
            <React.Fragment>
                <div className='split left'>
                    <IntroPage />
                </div>
                <div className='split right'>
                    <Events />
                </div>
            </React.Fragment>
        )
    }
}
 
export default FrontPage;