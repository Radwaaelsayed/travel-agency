import {Link} from 'react-router-dom'
const NavProfile=()=>{
    return(
        <div>
                   {/* <!-- Top navbar --> */}
                   <nav className="navbar navbar-top navbar-expand-md navbar-dark " style={{ background: "#172b4d 0" }} id="navbar-main">
                    <div className="container-fluid">
                        {/* <!-- Brand --> */}
                        <h4 className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">User profile</h4>
                        {/* <!-- Form --> */}
                        <ul className="navbar-nav  mr-3 d-none d-md-flex ml-lg-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="#" tabIndex="-1" >Log Out</Link>
                            </li>
                        </ul>

                        {/* <!-- User --> */}
                        <ul className="navbar-nav align-items-center d-none d-md-flex">
                            <li className="nav-item dropdown">
                                <Link className="nav-link pr-0" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="media align-items-center">
                                        <span className="avatar avatar-sm rounded-circle">
                                            <img alt="Imageplaceholder" src={"https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg"} />
                                        </span>
                                        <div className="media-body ml-2 d-none d-lg-block">
                                        </div>
                                    </div>
                                </Link>
                               
                            </li>
                        </ul>
                    </div>
                </nav>
        </div>
    )

}

export default NavProfile