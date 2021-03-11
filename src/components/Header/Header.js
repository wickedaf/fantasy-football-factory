import React from 'react';
import './Header.css';

const Header = (props) => {
    console.log(props);
    return (
        <div className="top-header text-center shadow mb-5">
            
            {
                props.showLogo 
                ? <div className="bg-headerLogo"> <img className="mx-auto w-25" src={props.logo} alt=""/> </div> 
                : <h1 className="">Sports Mania</h1>
            }
        </div>
    );
};

export default Header;