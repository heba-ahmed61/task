import React from 'react';
import './JobsList.css';
import data from '../../Jobs.json'

class JobsList extends React.Component{

    

    render(){

        return(
            <>
            {data.jobs.map(job =>(

            <div className="job-list " key={job.id}>
            <div className="jobs-information my-3">
            <div className="job-image-info">
            <div className="job-image">
        
            <img src = {job.jobImage}/>

        </div>
        <div className="job-info ">
            <h6 className="job-info-title ">{job['job-title']}</h6>
            <p>
                <span className="company-name">{job.companyName}</span> | <span >{job.titleSpan}</span>
            </p>
        </div>
    
        </div>
        <div className="jobs-location mb-2">
            <div className="job-location">
                <span>
                <i class="fas fa-map-marker-alt"></i>
                </span>
                <span>{job.location}</span>
            </div>
        </div>
        <div className=" posted-at mb-2">
        <div className="posted-time ">
                <span>
                <i class="far fa-clock"></i>
                </span>
                <span>{job['posted at']}</span>
            </div>
        </div>
        <div className=" jobType mb-2">
            <div className="job-type">
            {job.jobType === "TEMPORARY" ?(
                    <>
                    < span className="temporary" style={{backgroundColor:"#69C0A2",padding:"5px" , color:"white" , fontSize:"12px" , margin:" 0 5px"}}  >
                    {job.jobType} 

                </span>
                <span className="span-dots">
                    ...
                </span>
                </>

                ) : (<span></span>)}
            
                {job.jobType === "INTERNSHIP" ?(
                    <>
                    <span className="internship" style={{backgroundColor:"red" ,padding:"5px" , color:"white" , fontSize:"12px" }}  >
                    {job.jobType}

                </span>
                <span className="span-dots">
                    ...
                </span>
                </>

                ) : (<span></span>)}
                {job.jobType === "PART TIME" ?(
                    <>
                    <span className="part-time" style={{backgroundColor:"#E8DA7C" , padding:"5px" , color:"white" , fontSize:"12px" }}  >
                    {job.jobType} 

                </span>
                <span className="span-dots">
                    ...
                </span>
                </>

                ) : (<span></span>)}
                {job.jobType === "FREELANCE" ?(
                    <>
                    <span className="freelance" style={{backgroundColor:"#48C4C9" ,padding:"5px" , color:"white" , fontSize:"12px" ,margin : "0 5px"}}  >
                    {job.jobType} 

                </span>
                <span className="span-dots">
                    ...
                </span>
                </>

                ) : (<span></span>)}
                {job.jobType === "FULL TIME" ?(
                    <>
                    <span className="full-time" style={{backgroundColor:"black" ,padding:"5px" , color:"white" , fontSize:"12px" }}  >
                    {job.jobType} 

                </span>
                <span className="span-dots">
                    ...
                </span>
                </>

                ) : (<span></span>)}
            
            
                

            
                
            </div>

        </div>

</div>
</div>

            ))}
            
            </>
        )
    }
}
export default JobsList