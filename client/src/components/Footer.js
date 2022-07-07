import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import GithubIcon from '../icons/GithubIcon';
import InstagramIcon from '../icons/InstagramIcon';
import LinkedInIcon from '../icons/LinkedInIcon';

function Footer() {

    const location = useLocation();

    if (location.pathname === '/')
        return null;

  return (
    <footer>
        <Link to="#">
            <InstagramIcon />
        </Link>
        <Link to="#">
            <LinkedInIcon />
        </Link>
        <Link to="#">
            <GithubIcon />
        </Link>
    </footer>
  )
}

export default Footer