import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountrys, setVisitedCountrys] = useState([]);
    const [countrysFlags, setcountrysFlags] = useState([]);


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

    const handleCountryFlag = flag => {
        const newVisitedFlag = [...countrysFlags, flag];
        setcountrysFlags(newVisitedFlag);
    }

    // remove item from an array in a state

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

            <div className="flag-container">
                {
                    countrysFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>

            {/* display countrys  */}
           <div className="country-container">
           {
                countries.map(country => <Country key={country.ccn3} handleVisitedCountry={handleVisitedCountry} handleCountryFlag={handleCountryFlag} country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;