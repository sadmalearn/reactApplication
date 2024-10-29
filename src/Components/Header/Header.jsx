import React from "react";
import "./Header.css";
import { AiFillMoon } from "react-icons/ai";
import { FaSun } from "react-icons/fa";
const Header = ({ toggleTheme, isDarkTheme }) => {
    return (
        <header className="app-header">
            <h1 className="app-title">Where In The World?</h1>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
                {isDarkTheme ? <span><FaSun /> Light Mode</span>  : <span><AiFillMoon /> Dark Mode</span>}
            </button>
        </header>
    );
}

export default Header;
