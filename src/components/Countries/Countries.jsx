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

import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([])


    const countries = use(countriesPromise);

    const handleVisitedCountries = (country)=> {
        console.log('country visited clicked to be added', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    
    return (
        <div>
            <h1>Teaveling Countries: {countries.length}</h1>
            <h3>Traveled so far: {visitedCountries.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    country = {country}
                    handleVisitedCountries ={handleVisitedCountries} ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;