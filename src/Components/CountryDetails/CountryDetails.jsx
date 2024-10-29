import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import { APICall } from '../../APIMethods/APIMethods';
import APIUrl from '../../Constants/APIUrlConstants';
import './CountryDetails.css';

const CountryDetails = () => {
    const { code } = useParams();
    const [country, setCountry] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCountry = async () => {
            const res = await APICall(APIUrl.getCountryByName.replace('{name}', code));
            setCountry(res[0]);
        };

        fetchCountry();
    }, [code]);

    if (!country) return <div className="loading">Loading...</div>;

    return (
        <div className="country-detail">
            <h1 className="country-title">{country.name?.common}</h1>
            <img src={country?.flags?.png} alt={`${country.name} flag`} className="flag-image" />
            <div className="info">
                <p><strong>Capital:</strong> {country.capital}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Subregion:</strong> {country.subregion}</p>
                <p>
                    <strong>Google Map:</strong> 
                    <a href={country?.maps?.googleMaps} target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                    </a>
                </p>
                <p>
                    <strong>Open Street Map:</strong> 
                    <a href={country?.maps?.openStreetMaps} target="_blank" rel="noopener noreferrer">
                        View on Open Street Map
                    </a>
                </p>
            </div>
            <button className='showMoreButton' onClick={() => navigate(`/`)}>
                Back to Home
            </button>
        </div>
    );
};

export default CountryDetails;
