import React from 'react'
import './Style/Footer.css'

const Footer = () => {
  return (
    <>
    <div className='Footer'>
    {/* Remove the container if you want to extend the Footer to full width. */}
    <div className="container my-5">
      {/* Footer */}
      <footer
        className="text-center text-lg-start"
        style={{ backgroundColor: " rgb(238, 238, 238)",color:"black"}}
      >
        {/* Grid container */}
        <div className="container p-4 pb-0">
        <h2 className='footer-head'>Find Us On</h2>
          {/* Section: Links */}
          <section className="">
            {/*Grid row*/}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold heads">
                  Instagram
                </h6>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold heads">Facebook</h6>
                
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold heads">
                  Twitter
                </h6>
                
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold heads">LinkedIn</h6>
                
              </div>
              {/* Grid column */}
            </div>
            {/*Grid row*/}
            <p className='just-para'>Get in touch to learn more about how we can drive your brand forward. As a full-service Marketing Agency, we know how to help you and your business grow and flourish. All you’ve got to do is contact us!</p>
          <img src="https://fielmente.com/wp-content/uploads/2023/07/Frame-48095372.png" alt="" className='img1'/>
          </section>
          <p style={{position:"relative",top:"80px",color:"black"}}>Fielmente is an advisory, consultation and <br/> marketing firm dedicated to F&B and the <br/> hospitality industry.</p>
          <p style={{position:"relative",top:"90px",right:"7px"}}>&copy;  2023 Fielmente Hospitality Marketing Agency</p>
          <a href="https://fielmente.com/?page_id=11407" style={{position:"relative",top:"90px",fontSize:"18px"}}>Privacy Policy</a>
          <a href="https://fielmente.com/terms-and-conditions/" style={{position:"relative",top:"90px",left:"50px",fontSize:"18px"}}>Terms of Us</a>
          <h3 style={{position:'absolute',top:"250px",right:"250px",fontWeight:"bold"}}>Let's Stay Connected</h3>
          <input type="text" name="t1" id="t1" placeholder='Your Email'/><button style={{position:"absolute",top:"286px",left:"1100px",backgroundColor:"white",height:"46.5px",color:"orange"}}>Send</button>
          <h3 style={{position:"relative",left:"635px",bottom:"50px"}}>To Know More</h3>
          <p style={{position:"relative" , left:"635px" , bottom:"30px"}}>+91 9501868775 <br/>
sachin@fielmente.com</p>
          <h3 style={{position:"absolute",left:"1000px",bottom:"130px"}}>Locations</h3>
          <p style={{position:"absolute",left:"1000px",bottom:"50px"}}>INDIA <br/>
          CANADA</p>
          <p style={{position:"absolute",left:"1100px",bottom:"50px"}}>DUBAI <br/>
          UK</p>
          {/* Section: Links */}
        </div>
        {/* Grid container */}
      </footer>
      {/* Footer */}
    </div>
    {/* End of .container */}</div>
  </>
  
  )
}

export default Footer