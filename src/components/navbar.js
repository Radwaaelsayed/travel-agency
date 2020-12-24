import {Link} from 'react-router-dom';
import NavLinks from './navLinks';

const NavBar = (props) =>{
if(!props.user)
  {
     return(
        <nav className="navbar navbar-expand-lg  navbar-light ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand logo" to="/">TRAVEL</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-white">
            <NavLinks/>
            <li>
              <Link to="/login"><button className="rounded-pill btn mr-2 pt-2 pb-2 pl-4 pr-4 mt-1" style={{fontSize: "14px"}}> Login</button></Link>
            </li>
            <li>
               <Link to="/signup"><button className="rounded-pill btn  pt-2 pb-2 pl-4 pr-4 mt-1" style={{fontSize: "14px"}}> Sign Up</button></Link>
            </li>
            </ul>
        </div>
    </nav>

    )}else{
        return(
            <nav className="navbar navbar-expand-lg  navbar-light ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand logo" to="/">TRAVEL</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-white">
                <NavLinks/>
                <li>
                </li>
                  <li>
                    <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="far fa-user-circle"></i> {props.user.firstName}
                    </button>
                        <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">My Profile</Link>
                        <Link className="dropdown-item" to="/cusotmoffer">My Custom Offers</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="customer-drop-down-menu-logout" to="/" 
                        onClick={()=>
                        {localStorage.removeItem('user')
                         window.location.reload(true)
                         }}> Logout </Link>
                        </div>
                    </div>
                  </li>
                </ul>
            </div>
        </nav>
        )
    }
}

export default NavBar;