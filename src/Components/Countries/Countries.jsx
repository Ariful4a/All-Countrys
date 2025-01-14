import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountrys, setVisitedCountrys] = useState([]);


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country =>{
        console.log('add this country');
        const newVisitedCountrys =[...visitedCountrys, country];
        setVisitedCountrys(newVisitedCountrys);
    }

    return (
        <div>
            <p>Countries{countries.length}</p>
            <div>
                <h4>Visited Countrys : {visitedCountrys.length}</h4>
                <ul>
                    {
                        visitedCountrys.map(country => <li key={country.ccn3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
           <div className="country-container">
           {
                countries.map(country => <Country key={country.ccn3} handleVisitedCountry={handleVisitedCountry} country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;