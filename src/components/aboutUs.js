import React,{useState} from 'react'

const About=()=>{
  const [textColor,setTextColor]=useState([{state:true,name:"b1"},
  {state:true,name:"b2"},
  {state:true,name:"b3"}])

  function change(e){
    console.log(e.target.name)
    for(let i=0;i<textColor.length;i++){
     if(e.target.name===textColor[i].name){
      console.log(textColor[i].state,textColor[i].name)

       
       if(textColor[i].state===true){
         textColor[i].state=false
        setTextColor([...textColor])
       }else{
        textColor[i].state=true
        setTextColor([...textColor])

       }
     }
     else{
      console.log(textColor[i].state,textColor[i].name,"sdjhhh")
       textColor[i].state=true

     }
    }
  }

    return(
    <div>
     <section>
       <div className='con_items'>
         
      
<div className="container mt-5">
      <div className="row">
        <div className="col-lg-5">
          <h2 className="section-title mb-3">
            Why Choose Us</h2>
          <div className="custom-accordion" id="accordion_1">
            <div className="accordion-item">
              <h2 className="mb-0">
                <button style={(textColor[0].state===true)?{color:"#999"}:{color:"#08d9d6"}} onClick={change}  name="b1" className={`btn btn-link btn btn-link text-decoration-none font-weight-normal  text-left  collapsed`}type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                 >
                <i  className={(textColor[0].state===true)?`fa fa-plus m-2`:`fa fa-minus m-2`}></i>How to download and register?</button>
              </h2>

              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion_1"  >
                <div className="accordion-body m-20 text-center overflow-hidden bg-">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="mb-0">
                <button style={(textColor[1].state===true)?{color:"#999"}:{color:"#08d9d6"}} name="b2" className="btn btn-link btn btn-link text-decoration-none font-weight-normal  text-left  collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={change}>
                    <i className={(textColor[1].state===true)?`fa fa-plus m-2`:`fa fa-minus m-2`}></i>How to create your paypal account?</button>
              </h2>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion_1" >
                <div className="accordion-body">
                  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </div>
              </div>
            </div> 
            
            <div className="accordion-item">
              <h2 className="mb-0">
                <button name="b3" className="btn btn-link btn btn-link text-decoration-none font-weight-normal  text-left  collapsed"  style={(textColor[2].state===true)?{color:"#999"}:{color:"#08d9d6"}} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={change}>
                <i className={(textColor[2].state===true)?`fa fa-plus m-2`:`fa fa-minus m-2`}></i>How to link your paypal and bank account? </button>
              </h2>

              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion_1" >
                <div className="accordion-body">
                  When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
                </div>
              </div>

            </div> 

          </div>
        </div>
        <div className="col-lg-7">
          <div className="row mt-2">
            <div className="col-6">
            <img src="https://preview.colorlib.com/theme/travel2/images/img_1.jpg" alt="Imaget" className="img-fluid"/>
            </div>
            <div className="col-6 overflow-hidden">
              <img src="https://preview.colorlib.com/theme/travel2/images/img_3.jpg" alt="Image2" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
    </section>

    <section>
  
      <div className="con_items mt-5">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://preview.colorlib.com/theme/travel2/images/slider-1.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://preview.colorlib.com/theme/travel2/images/slider-2.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://preview.colorlib.com/theme/travel2/images/slider-3.jpg" alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://preview.colorlib.com/theme/travel2/images/slider-4.jpg" alt="forth slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://preview.colorlib.com/theme/travel2/images/slider-5.jpg" alt="fifth side"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
   
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span> */}
  </a>
</div>
      
            </div>

            <div className="col-lg-5 pl-lg-5 ml-auto">
          <h2 className="section-title mb-4">Gallery</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
        </div>
            
          </div>
          
        </div>
      </div>
     
  
    </section>

    <section>
    <div className="con_item mt-5">
  <div className="container">
    <div className="row justify-content-center mb-5">
      <div className="col-md-6 text-center">
        <h2 className="section-title mb-3 text-center">Team</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-2 mb-4">
        <div className="team">
          <img src={`https://preview.colorlib.com/theme/travel2/images/person_1.jpg`} alt="Imagee" className="img-fluid mb-4"/>
          <div className="px-1">
            <h3 className="mb-0 fw-bolder">Abdallah Saber</h3>
            <p>Co-Founder &amp; CEO</p>
          </div>
        </div>
      </div>


      <div className="col-lg-2 mb-4">
        <div className="team">
          <img src="https://preview.colorlib.com/theme/travel2/images/person_3.jpg" alt="Images" className="img-fluid mb-4"/>
          <div className="px-1">
            <h3 className="mb-0 fw-bolder">Ezzet Ashref</h3>
            <p>Co-Founder &amp; CEO</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 mb-4">
        <div className="team">
          <img src='https://preview.colorlib.com/theme/travel2/images/person_4.jpg' alt="Imagev" className="img-fluid mb-4"/>
          <div className="px-1">
            <h3 className="mb-0 fw-bolder">Radaw Elsayed</h3>
            <p>Co-Founder &amp; CEO</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 mb-4">
        <div className="team">
          <img src='https://preview.colorlib.com/theme/travel2/images/person_1.jpg' alt="Imageb" className="img-fluid mb-4"/>
          <div className="px-1">
            <h3 className="mb-0 fw-bolder">Amr Gamal</h3>
            <p>Co-Founder &amp; CEO</p>
          </div>
        </div>
      </div>
      


    </div>

  </div>
</div>
    </section>

  </div>
          
    )
}

export default About;
