import { Link } from "react-router-dom";

const Footer = () =>{
    return(
   <div className="footer pt-5 mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <h3>About Travel</h3>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <ul className="list-unstyled social row">
                        <li> 
                            <Link className="col pr-0 ">
                            <i className="fa fa-facebook"></i>
                            </Link>
                        </li>
                        <li>
                            <Link className="col pr-0 pl-1 ">
                            <i className=" fa fa-twitter "></i>
                            </Link>
                        </li>
                        <li>
                            <Link className="col pr-0 pl-1 ">
                            <i class="fa fa-instagram"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h3>Pages</h3>
                    <ul className="list-unstyled">
                        <li>Blog</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12">
                   <h3>Resources</h3>
                    <ul className="list-unstyled">
                        <li>Blog</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h3>Contact</h3>
                    <ul className="list-unstyled">
                        <li>
                         <i className="fa fa-envelope ">  <Link className="col" href="#">info@travel</Link> </i> 
                        </li>
                        <li>
                         <i className="fa fa-phone ">  <Link className="col" href="#">+1 222 212 3819</Link> </i>
                        </li>
                        <li>
                        <i class="fa fa-map-marker"> <Link className="col" href="#">43 Raymouth Rd.Baltemoer,Egypt</Link> </i>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
     </div>   
    )
}
export default Footer;