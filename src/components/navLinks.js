import React from 'react';
import {Link} from 'react-router-dom';

const NavLinks = () =>{
    return(
        <React.Fragment>
                <li className="nav-item active">
                    <Link className="nav-link text-white" to="/home">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link text-white" to="/offer">Offers</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/guideme">Guide Me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/aboutus">About US</Link>
                </li>
         </React.Fragment>
    )
}

export default NavLinks;