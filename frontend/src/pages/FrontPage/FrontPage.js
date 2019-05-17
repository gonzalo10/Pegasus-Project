import React, { Component } from 'react';


import IntroPage from '../../containers/FrontPageIntro/FrontPageIntro';

import FrontBackground from '../../assets/img/FrontBackground.png'


import './FrontPage.css';
import FrontPageForm from '../../containers/FrontPageForm/FrontPageForm';
 
class FrontPage extends Component {    
    
    render () {
        return(
            <div className='background'>
                <div className='splitLeft'>
                    <IntroPage />
                </div>
                <div className='splitRight'>
                    <FrontPageForm />
                </div>
            </div>
        )
    }
}


 
export default FrontPage;