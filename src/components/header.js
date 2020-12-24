
import '../App.css';
import NavBar from './navbar';

const Header = (props) =>{
 let hello = ["Travel to the most beautiful places in the world" , "Enjoy Your Trip With Us ..." , "Travel To Diffrent Places With Low Budget ..."]

    return(   
        <div >
        <div className="card  bg-dark text-white border-0">
          <div id="carouselExampleSlidesOnly" className="carousel slide"  data-ride="carousel">
            <div className="carousel-inner" >
                <div className="carousel-item  active">
                    <img src="../images/1.jpg" className="d-block w-100 " style={{maxHeight:"100vh"}} alt="headerslider" />
                </div>
                <div className="carousel-item ">
                <img src="../images/2.jpg" className="d-block w-100 " style={{maxHeight:"100vh"}}   alt="headerslider" />
                </div>
                <div className="carousel-item ">
                <img src="../images/5.jpg" className="d-block w-100 " style={{maxHeight:"100vh"}}   alt="headerslider" />
                </div>
             </div>
            </div>
            <div className="card-img-overlay h-100 my-auto">
                <div className="container">
                   <NavBar user={props.user}/>
                   <div className="d-flex flex-column justify-content-center align-items-center text-center mt-lg-5" >
                       <div className="text-center  pt-5 anim-typewriter line">
                           {
                           hello[Math.floor(Math.random()*hello.length) ]
                            }
                 
                        </div>
                       <button className="rounded-pill btn mt-5 pt-2 pb-2 pl-4 pr-4 " style={{fontSize: "14px"}}> Contact us</button>
                   </div>

                </div>    
            </div>
        </div>
</div>

        
    )
}

export default Header;