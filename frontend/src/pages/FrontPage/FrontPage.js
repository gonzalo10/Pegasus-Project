import React, { Component } from 'react';


import IntroPage from '../../containers/IntroPage/IntroPage';
import './FrontPage.css';
import RecommendTravel from '../../containers/RecomendTravel/RecomendTravel';
 
class FrontPage extends Component {
    render () {
        return(
            <React.Fragment>
                <div className='split left'>
                    <IntroPage />
                </div>
                <div className='split right'>
                    <RecommendTravel />
                </div>
            </React.Fragment>
        )
    }
}
 
export default FrontPage;