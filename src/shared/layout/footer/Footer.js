import React from 'react';
import HomeIcon from '../../../assets/icons/HomeIcon';
import InfoIcon from '../../../assets/icons/InfoIcon';

const Footer = () =>{
    return(
    <div className="wrapper fixed bg-footer-transparent w-footerWrapper h-footerWrapper left-0 right-0 bottom-1.8 rounded-mainLayoutRadius mx-auto z-950">
        <div className="bg-footer-background w-full flex flex-row lg:space-x-32 md:space-x-32 sm:space-x-32 smallest:space-x-12 small:space-x-20 justify-center items-center h-footer fixed bottom-0 left-0 right-0 rounded-mainLayoutRadius z-950 py-2">
            <a href='/'>
                <HomeIcon className="h-5 w-5"/>
            </a>
            <a href='/o-nama'>
                <InfoIcon className="h-5 w-5"/>
            </a>
        </div>
    </div>
    );
}

export default Footer;