import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from '../components/Search';

function Home() {
  return (
    <div className='home'>
        <div className="home__header">
            <div className="home__header--left">
                <Link to="/about" className="home__header--link">About</Link>
                <Link to="/store" className="home__header--link">Store</Link>
            </div>
            <div className="home__header--right">
                <Link to="/gmail" className="home__header--link">Gmail</Link>
                <Link to="/images" className="home__header--link">Images</Link>
                <AppsIcon />
                <Avatar />
            </div>
        </div>

        <div className="home__body">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt='Google logo' className='google__logo'  />
            <div className="home__input--container">
                <Search />
            </div>
        </div>
    </div>
  );
}

export default Home;