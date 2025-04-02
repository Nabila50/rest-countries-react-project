// function Countries(){
//     return(
//         <div>

//         </div>
//     )
// }

// // -------------------Array function----------------
// const Countries =() =>{
//     return(
//         <div>

//         </div>
//     )
// }

import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);
    
    return (
        <div>
            <h1>Teaveling Countries: {countries.length}</h1>
            <div className='countries'>
            {
                countries.map(country => <Country key={country.cca3} country = {country} ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;