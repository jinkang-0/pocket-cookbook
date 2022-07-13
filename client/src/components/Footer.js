import React from 'react'
import { useLocation } from 'react-router-dom'
import GithubIcon from '../icons/GithubIcon';
import InstagramIcon from '../icons/InstagramIcon';
import LinkedInIcon from '../icons/LinkedInIcon';

function Footer() {

    const location = useLocation();

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
    </footer>
  )
}

export default Footer