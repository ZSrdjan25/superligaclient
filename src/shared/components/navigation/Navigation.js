import React from 'react';
import NavigationMenuIcon from '../../../assets/icons/NavigationMenuIcon';

const Navigation = () =>{
    return(
        <div  className="flex justify-start items-center space x-2 mx auto">
          <div className="relative">
            <button className="rounder-md transition outline-none focus:outline-none ring-0 focus:ring-0 lg:px-0 sm:px-3 small:px-3 smallest:px-3 py-2 text-purple hover:bg-gray-lightest" type="button">
             <NavigationMenuIcon viewBox={"0 0 32 32"} className="fill-white lg:w-12 lg:h-12 md:w-11 md:h-11 sm:w-11 sm:h-11 small:w-8 small:h-8 smallest:w-6 smallest:h-6"  />
            </button>
          </div>
        </div>
    );
}

export default Navigation;