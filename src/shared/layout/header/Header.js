import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import Logoo from '../../../assets/images/logo.png';

const Header = () =>{
    return(
    <div className="flex flex-row justify-between">
      <Navigation/>
      <NavLink to="/" className="z-10">
        <img src={Logoo} className='w-28 h-28 p-2'/>
      </NavLink>
      <span>Nesto</span>
    </div>);
}

export default Header;