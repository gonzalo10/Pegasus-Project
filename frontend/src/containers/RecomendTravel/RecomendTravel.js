import React, { Component } from 'react';

import './RecomendTravel.css'
 
class RecommendTravel extends Component{
    render() {
        return(
            <div className='Box' >
                <h2>Do you want to know your next Destination</h2>
                <form className='Input'>
                    <input type="text" name="Destination" className='InputElement' placeholder='Destination' ></input>
                    <input type="text" name="Date" className='InputElement' placeholder='Date' ></input>
                    <input type="text" name="Price" className='InputElement' placeholder='Price' ></input>
                    <button>GO</button>
                </form>
            </div>
        )
    }

} 
 
export default RecommendTravel;