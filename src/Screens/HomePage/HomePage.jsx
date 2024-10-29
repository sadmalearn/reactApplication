import React, { useEffect, useState } from "react";
import { APICall } from "../../APIMethods/APIMethods";
import APIUrl from "../../Constants/APIUrlConstants";
import ConstantScreenAndComponents from "../../Constants/ConstantScreenAndComponents";
import "./HomePage.css";
import { Route, Routes } from "react-router-dom";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [allCountry, setAllCountry] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await APICall(APIUrl.getAllCountry);
      console.log(res);
      const uniqueRegions = [...new Set(res.map((country) => country.region))];
      setAllCountry(res);
      setRegions(uniqueRegions);
    };
    
    fetchCountries();
  }, []);

  const handleInputChange = (value) => setSearchValue(value);

  const handleRegionChange = (e) => setSelectedRegion(e.target.value);

  const handleShowMore = () => setVisibleCount((prevCount) => prevCount + 12);

  const toggleTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);

  const filteredCountries = allCountry.filter((country) => {
    const matchesSearch = Object.values(country).some((value) =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    );
    const matchesRegion = selectedRegion === "All" || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className={isDarkTheme ? "mainComponent dark-theme" : "mainComponent light-theme"}>
      <ConstantScreenAndComponents.Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />

      <div className="filterDiv">
        <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
          <input
            type="text"
            value={searchValue}
            placeholder="Search"
            onChange={(e) => handleInputChange(e.target.value)}
            className="searchInput"
          />
          <span className="searchIcon">🔍</span>
        </div>
        <select className="selectRegion" onChange={handleRegionChange} value={selectedRegion}>
          <option value="All">All Regions</option>
          {regions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="allCountryCards">
        {filteredCountries.length === 0 ? (
          <div className="noDataMessage">No data found</div>
        ) : (
          filteredCountries.slice(0, visibleCount).map((item) => (
            <ConstantScreenAndComponents.CountryCard key={item.id} data={item} />
          ))
        )}
      </div>
      <div style={{marginBottom : "5px"}}> Showing Countries {filteredCountries.length} / {filteredCountries.length >= visibleCount ? visibleCount : filteredCountries.length}</div>

      {visibleCount < filteredCountries.length && (
        <button onClick={handleShowMore} className="showMoreButton">
          Show More Countries 
        </button>
      )}
    </div>
  );
};

export default HomePage;
