
import Slide from "./Slide"



export default function RootLayout() {

 


  return (
    <div className="site-layout">
      <nav>
        <div className="nav-content">
          <img className="social-logo" src='./assets/logo.svg' alt="Logo" />
          <button className="free-consult-button"><span className="free-consult-words">Free Consultation</span></button>
       </div>
      </nav>

      <main>
        <div className="main-centered-title">

         <div className="title-box">
             <p className="main-title">Design solutions made easy</p>
             <p className="smaller-title-text">With over ten years of experience in various design disciplines, I'm your one-stop shop for your design needs.</p>
         </div>

        </div>

        <div className="main-centered-hero">
          
         <div className="hero-image-box">

           <div className="graphic-design-box">
           
             <img className="graph-design-box-logo" src='./assets/pattern-graphic-design.svg' alt="Graphic Design" />
          
             <p className="graphic-design-inner-box-text">Graphic Design</p>
           </div>

           <div className="ux-ui-box">
              <img className="ux-ui-box-logo" src='./assets/pattern-ui-ux.svg' alt="UX-UI Design" />
              <p className="ux-inner-box-text">UI/UX</p>
          </div>

          <div className="apps-box">
              <img className="apps-box-logo" src='./assets/pattern-apps.svg' alt="Apps" />
              <p className="apps-inner-box-text">Apps</p>
          </div>

          <div className="illu-box">
              <img className="illu-box-logo" src='./assets/pattern-illustrations.svg' alt="Illustrations" />
              <p className="illu-inner-box-text">Illustrations</p>
          </div>

          <div className="photo-box">
              <img className="photo-box-logo" src='./assets/pattern-photography.svg' alt="Photography" />
              <p className="photo-inner-box-text">Photography</p>
          </div>

          <div className="motion-box">
              <img className="motion-box-logo" src='./assets/pattern-motion-graphics.svg' alt="Motion Graphics" />
              <p className="motion-inner-box-text">Motion Graphics</p>
          </div>


          </div>
      </div>  


      <div className="main-centered-about-me">

        <div className="about-me-box-main">

           <img className="profile-photo" src='./assets/image-amy.webp' alt="Amy Designer" />

          <div className="about-text-box-contain">
             <p className="about-header">I'm Amy, and I'd love to work on your next project</p>

             <p className="smaller-about-text">
              I love working with others to create beautiful design solutions. 
              I've designed everything from brand illustrations to complete mobile apps.
              I'm also handy with a camera!
             </p>
             <button className="red-button">Free Consultation</button>
          </div>

        </div>

    </div>


       <Slide />



         <div className="main-centered-book-call">

           <div className="book-call-box">

             <div className="book-call-text-box">
               <p className="book-text-header">Book a call with me</p>
               <p className="book-copy-text">I'd love to have a chat to see how I can help you. The best first step is for us
                 to discuss your project during a free consultation. Then we can move forward from there. 
               </p>
             </div>
           <div className="second-free-consult-box"><button className="second-consult-btn">Free Consultation</button></div>

           </div>
        </div>   
      
    
       

          

    </main>

    <footer>
                
          <div className="main-footer-contain">
              <div className="footer-content">

              <img className="social-logo-footer" src='./assets/logo.svg' alt="Logo" />

              <button className="footer-free-consult-button"><span className="footer-free-consult-words">Free Consultation</span></button>


              </div>
              </div>


    </footer>
        
    


  </div>
  )
}
