import React from 'react'
import IGLogo from '../../assets/iglogo.png';
import CameraLogo from '../../assets/camera-logo.svg'
import './SearchBar.css'


const SearchBar = () => {
    return (
    <div className='wrapper'>
        <div className='camera-logo'>
            <img alt="camera logo" src={CameraLogo} className="logo-image" />
        </div>
        <div className='image-content'>
            <img alt="instagram logo" src={IGLogo} className="logo-image" />
        </div>
        <div className='input-wrapper'>
            <input className='input' type="text" placeholder="Search" />
        </div>
        <div className="social-wrapper">
            <div className="social">
                <i className="fa fa-compass" />
            </div>
            <div className="social">
                <i className="fa fa-heart" />
            </div>
            <div className="social">
                <i className="fa fa-user-circle" />
            </div>
        </div>
    </div>
    )
}

export default SearchBar;