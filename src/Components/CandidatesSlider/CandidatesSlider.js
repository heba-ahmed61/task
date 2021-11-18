import React from 'react';
import './CandidatesSlider.css';
import candidate1 from '../../images/candidate1.png';
import candidate2 from '../../images/candidate2.png';
import candidate3 from '../../images/candidate3.png';
import candidate4 from '../../images/candidate4.png';
import candidate5 from '../../images/candidate5.png';
import candidate6 from '../../images/candidate6.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




const CandidatesSlider = () =>{

    const candidatesSlider = [
        {
            id : 1,
            Image:candidate1,
            name : "Ahmed Hassan",
            job:"UI Developer"
        },
        {
            id : 2,
            Image:candidate2,
            name : "Ahmed Alhami",
            job:"Graphic Designer"
        },
        {
            id : 3,
            Image:candidate3,
            name : "Mohamed Habaza",
            job:"UX Research"

        },
        {
            id : 4,
            Image:candidate4,
            name : "Amr Gamal",
            job:"UX Designer"

        },
        {
            id : 5,
            Image:candidate5,
            name : "Fouad Badawy",
            job:"Web Developer"

        },
        {
            id : 6,
            Image:candidate6,
            name : "Mohamed Baghagho",
            job:"Art Director"

        },
        {
            id : 7,
            Image:candidate4,
            name : "Amr Gamal",
            job:"UX Designer"

        },


    ]
    const responsive= {

        0: {
            items: 1,
            nav:false,
            loop:true,
            autoplay:true,
            autoplayTimeout:2000
        

        },
        450: {
            items: 2,
            nav:false,
            loop:true,
            autoplay:true,
            autoplayTimeout:2000
        


        },
        600: {
            items: 3,
            nav:false,
            loop:true,
            autoplay:true,
            autoplayTimeout:2000
        


        },
        768:{
            items: 3,
        

        },
        900:{
            items : 3
        },
        1000: {
            items: 4,
        

        },
        1500:{
            items:6,
        }
    }
    





    return(
        <>
    
        <div className="candidatesSlider">
        <OwlCarousel className='owl-theme' items={6} loop margin={20} nav dots={false} responsive={responsive} autoplayHoverPause={true} >	
            {
                candidatesSlider.map(candidate =>(
                
                    <div className="item candidate-info" key={candidate.id}>
                
                        <img src = {candidate.Image}/>
                        <h6 className="text-center mt-3">{candidate.name}</h6>
                        <p className="text-center candiadate-slider-job">{candidate.job}</p>
                    
                    </div>
                
                ))
            }
            </OwlCarousel>
        </div>
        </>
    )

}
export default CandidatesSlider;