import React from 'react';

import Monkey from '../../assets/img/Monkey.gif'
import Autocomplete from '../../components/UI/AutoComplete/AutoComplete'

import './FrontPageIntro.css'
 
const introPage = (props) => {
    
    return(
        <div className='IntroPage'>
            <h1>Intro</h1>
            <p>Intro de la Pagina</p>
            <img src={Monkey} alt='Working on it'/>
            <Autocomplete
                options={[
                'Papaya',
                'Persimmon',
                'Paw Paw',
                'Prickly Pear',
                'Peach',
                'Pomegranate',
                'Pineapple'
                ]}
            />
        </div>
    )
}


 
export default introPage;