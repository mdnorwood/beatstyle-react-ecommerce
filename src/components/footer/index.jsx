import React from 'react';
import './styles.scss';

const Footer = props => {

    return (
        <footer className='footer'>
            <div className='wrap'>
                Copyright © {new Date().getFullYear()}{" "}Dale Street Studio | LLC
            </div>
        </footer>
    );
}

export default Footer;