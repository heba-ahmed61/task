import React from 'react';
import './FeaturedJobsSlider.css';
import job from '../../images/job.png';
import jobImage from '../../images/job-image.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const JobsSlider = () =>{

    const josbs = [

        {
            id:1,
            image:job,
            jobTitle : "Front-end Developer",
            companyName : "Tielabs",
            span : "Beautifual WP Themes",
            jobDescription: "We're looking for a talented front-end developer for an immiediate online website project and other projects in the future",
            location : "New York",
            postedAt : "8 hours "

        },
        {
            id:2,
            image:job,
            jobTitle : "Back-end Developer",
            companyName : "Tielabs",
            span : "Beautifual WP Themes",
            jobDescription: "We're looking for a talented back-end developer for an immiediate online website project and other projects in the future",
            location : "New York",
            postedAt : "2 hours "

        },
        {
            id:3,
            image:job,
            jobTitle : "UI-UX Designer",
            companyName : "Tielabs",
            span : "Beautifual WP Themes",
            jobDescription: "We're looking for a talented UI-UX designer for an immiediate online website project and other projects in the future",
            location : "New York",
            postedAt : "3 hours "

        },
    ]
    const responsiveDesign = {

        0:{
            nav:false,
            dots:true
        },
        1200:{
            nav:true,
            dots:false
        }
    }

    return(
        <div className="job-slider">
            <OwlCarousel className='owl-theme' loop margin={10} nav dots={false} items={1} responsive={responsiveDesign} >
            {josbs.map(job =>(

                <div className="item ">
                    <img src ={job.image} style={{width:"100%"}} />
                    <div className="job-details my-4">
                        <div className="job-image">
                            <img src={jobImage} />
                        </div>
                        <div className="job-slider-info ">
                            <h6>{job.jobTitle}</h6>
                            <p>
                                <span>{job.companyName}</span> | <span>{job.span}</span>
                            </p>
                            <div className="job-description">
                                <p>{job.jobDescription}</p>
                            </div>
                            <div className="location-time mb-3">
                                <span className="mx-2"><i class="fas fa-map-marker-alt"></i> {job.location} </span> 
                                <span className="mx-3"><i class="far fa-clock"></i> {job.postedAt}</span> 
                                
                                </div>
                                
                        </div>
                        
                    </div>
                    <div className="apply">
                                    <button>APPLY FOR THIS JOB</button>
                                </div>

                </div>
            ))}
            </OwlCarousel>
        




        </div>
    )
}
export default JobsSlider;