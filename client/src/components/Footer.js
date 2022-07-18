import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import GithubIcon from '../icons/GithubIcon';
import InstagramIcon from '../icons/InstagramIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import { ThemeContext } from "../ThemeContext";

function Footer({ switchTheme }) {

    const location = useLocation();
    const theme = useContext(ThemeContext);

    if (location.pathname === '/')
        return null;

    return (
        <footer>
            <a href="https://www.instagram.com/zdrm0/" rel="noreferrer" target="_blank">
                <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/jinkang-fang-64b6021b3/" rel="noreferrer" target="_blank">
                <LinkedInIcon />
            </a>
            <a href="https://github.com/jinkang-0" rel="noreferrer" target="_blank">
                <GithubIcon />
            </a>
            <button onClick={switchTheme}>
                {(theme === "light") ?
                    <MoonIcon /> :
                    <SunIcon />
                }
            </button>
        </footer>
    )
}

export default Footer