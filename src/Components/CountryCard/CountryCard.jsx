import React from "react";
import "./CountryCard.css";
import { useNavigate } from "react-router-dom";
const CountryCard = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div className="countryCardMain" onClick={()=>{navigate(`/country/${data?.name?.common}`)}}>
      <img src={data?.flags?.png} alt="" />
      <div className="countryDataDiv">
        <h1 title={data?.name?.common}>{data?.name?.common}</h1>
        <span className="lableField">Population : <small className="valueField">{(data?.population).toLocaleString()}</small></span>
        <span className="lableField">Region : <small className="valueField">{data?.region}</small></span>
        <span className="lableField">Capital : <small className="valueField">{data?.capital}</small></span>
      </div>
    </div>
  );
};

export default CountryCard;
