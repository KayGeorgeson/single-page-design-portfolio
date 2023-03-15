import React, { useRef } from 'react'



export default function Slide() {
 
 





  
  const slideRef = useRef()
 






 
  


const animSlideRight = (e) => {
 

    if(e.target.alt === "Right arrow") {
    
      
      slideRef.current.scrollLeft += 520 
     
      }
  }

     
const animSlideLeft = (e) => {
    if (e.target.alt === "Left arrow") {
    
      
      slideRef.current.scrollLeft  -= 520     
      
    }

  } 

 
    




  return (



    <div className="main-centered-carousel">

           <div className="my-work-main-contain">
           <p className="my-work-words">My Work</p>
           </div>


         

         <div ref={slideRef} className="slide-contain">

          

         
         <figure class="work-slides">
           
       
             <img className="work-slide-one slide-picture" src='./assets/image-slide-1.jpg' alt="Work Slide One" />

            </figure>

           

           <figure class="work-slides">
             <img className="work-slide-two slide-picture" src='./assets/image-slide-2.jpg' alt="Work Slide Two" />
 
            </figure>

          

           <figure class="work-slides">
             <img className="work-slide-three slide-picture" src='./assets/image-slide-3.jpg' alt="Work Slide Three" />
           </figure>

          

           <figure class="work-slides">
             <img className="work-slide-four slide-picture" src='./assets/image-slide-4.jpg' alt="Work Slide Four" />
           </figure>

          

           <figure class="work-slides">
             <img className="work-slide-five slide-picture" src='./assets/image-slide-5.jpg' alt="Work Slide Five" />
           
           </figure> 
           
        

           
        </div>

        <div className="arrow-buttons-contain"> 

            <button className="left-btn arrow-btn" onClick={ animSlideLeft }><img className="arrow arrow-left" src="./assets/icon-arrow-left.svg" alt="Left arrow" /></button>  
             
            <button className="right-btn arrow-btn" onClick={ animSlideRight }><img className="arrow arrow-right" src="./assets/icon-arrow-right.svg" alt="Right arrow" /></button>

        </div>
          
       

    </div>
    
 
     ) 
  }
