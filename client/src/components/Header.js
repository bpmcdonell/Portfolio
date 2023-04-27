import React from 'react';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';



const Header = () => {

    return (
        <header className="header">
            <div className="headerDiv">
                <h1>BPMCDONELL | PORTFOLIO</h1>
                {< Nav />}
            </div>
        </header>
    );

};

export default Header;
