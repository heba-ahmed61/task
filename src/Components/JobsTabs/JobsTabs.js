import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import JobsList from '../JobsList/JobsList';
import data from '../../Jobs.json';
import './JobsTabs.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
    >
        {value === index && (
        <Box p={3}>
            <Typography>{children}</Typography>
        </Box>
        )}
    </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return (
        <>
        <div className="tabs-notes">
            <p style={{fontWeight:"bold"}}>we have <span style={{color:"#4E53D5"}}>1245</span> jobs for you</p>
            <p style={{fontWeight:"bold"}}><span style={{color:"gray"}}>sort by</span> Newest</p>
        </div>
    <div className={classes.root} style={{border:"1px solid rgba(197, 190, 190, 1)"}}>
        <AppBar position="static" color="default">
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="black"
            textColor="grey"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
            <Tab label="ALL JOBS" {...a11yProps(0)} />
            <Tab label="FULL TIME" {...a11yProps(1)} />
            <Tab label="TEMPORARY" {...a11yProps(2)} />
            <Tab label="INTERNSHIP" {...a11yProps(3)} />
            <Tab label="PART TIME" {...a11yProps(4)} />
            <Tab label="FREELANCE" {...a11yProps(5)} />
        
        </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
        <JobsList/>
        </TabPanel>
        <TabPanel value={value} index={1}>
        {data.jobs.filter(item => item.jobType === "FULL TIME").map(el =>(
                (<>

        <div className="job-list mb-4" key={el.id}>
            <div className="jobs-information">
            <div className="job-image-info">
            <div className="job-image">
        
            <img src = {el.jobImage}/>

        </div>
        <div className="job-info ">
            <h6 className="job-info-title ">{el['job-title']}</h6>
            <p>
                <span className="company-name">{el.companyName}</span> | <span >{el.titleSpan}</span>
            </p>
        </div>
    
        </div>
        <div className="jobs-location mb-2">
            <div className="job-location">
                <span>
                <i class="fas fa-map-marker-alt"></i>
                </span>
                <span>{el.location}</span>
            </div>
        </div>
        <div className=" posted-at mb-2">
        <div className="posted-time ">
                <span>
                <i class="far fa-clock"></i>
                </span>
                <span>{el['posted at']}</span>
            </div>
        </div>
        <div className=" jobType mb-2">
            <div className="job-type">
            
            {el.jobType === "FULL TIME" ?(
                    <>
                    <span style={{backgroundColor:"black" ,padding:"5px" , color:"white" , fontSize:"12px" ,margin:" 0 5px 0 -10px"}}  >
                    {el.jobType} 

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
        

                </>
            
            
                    )
            
            ))} 
    
        
        </TabPanel>
        <TabPanel value={value} index={2}>
        {data.jobs.filter(item => item.jobType === "TEMPORARY").map(el =>(
                (<>

        <div className="job-list mb-4" key={el.id}>
            <div className="jobs-information">
            <div className="job-image-info">
            <div className="job-image">
        
            <img src = {el.jobImage}/>

        </div>
        <div className="job-info ">
            <h6 className="job-info-title ">{el['job-title']}</h6>
            <p>
                <span className="company-name">{el.companyName}</span> | <span >{el.titleSpan}</span>
            </p>
        </div>
    
        </div>
        <div className="jobs-location mb-2">
            <div className="job-location">
                <span>
                <i class="fas fa-map-marker-alt"></i>
                </span>
                <span>{el.location}</span>
            </div>
        </div>
        <div className=" posted-at mb-2">
        <div className="posted-time ">
                <span>
                <i class="far fa-clock"></i>
                </span>
                <span>{el['posted at']}</span>
            </div>
        </div>
        <div className=" jobType mb-2">
            <div className="job-type">
            
            {el.jobType === "TEMPORARY" ?(
                    <>
                    <span style={{backgroundColor:"#69C0A2",padding:"5px" , color:"white" , fontSize:"12px" , margin:" 0 5px"}}  >
                    {el.jobType} 

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
        

                </>
            
            
                    )
            
            ))}
        
        </TabPanel>
        <TabPanel value={value} index={3}>
            {data.jobs.filter(item => item.jobType === "INTERNSHIP").map(el =>(
                (<>

        <div className="job-list mb-4" key={el.id}>
            <div className="jobs-information">
            <div className="job-image-info">
            <div className="job-image">
        
            <img src = {el.jobImage}/>

        </div>
        <div className="job-info ">
            <h6 className="job-info-title ">{el['job-title']}</h6>
            <p>
                <span className="company-name">{el.companyName}</span> | <span >{el.titleSpan}</span>
            </p>
        </div>
    
        </div>
        <div className="jobs-location mb-2">
            <div className="job-location">
                <span>
                <i class="fas fa-map-marker-alt"></i>
                </span>
                <span>{el.location}</span>
            </div>
        </div>
        <div className=" posted-at mb-2">
        <div className="posted-time ">
                <span>
                <i class="far fa-clock"></i>
                </span>
                <span>{el['posted at']}</span>
            </div>
        </div>
        <div className=" jobType mb-2">
            <div className="job-type">
            
                {el.jobType === "INTERNSHIP" ?(
                    <>
                    <span style={{backgroundColor:"red" ,padding:"5px" , color:"white" , fontSize:"12px" ,margin:" 0 5px 0 -8px"}}  >
                    {el.jobType}

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
        

                </>
            
            
                    )
            
            ))}
        
        </TabPanel>
        <TabPanel value={value} index={4}>
        {data.jobs.filter(item => item.jobType === "PART TIME").map(el =>(
                (<>

        <div className="job-list mb-4" key={el.id}>
            <div className="jobs-information">
            <div className="job-image-info">
            <div className="job-image">
        
            <img src = {el.jobImage}/>

        </div>
        <div className="job-info ">
            <h6 className="job-info-title ">{el['job-title']}</h6>
            <p>
                <span className="company-name">{el.companyName}</span> | <span >{el.titleSpan}</span>
            </p>
        </div>
    
        </div>
        <div className="jobs-location mb-2">
            <div className="job-location">
                <span>
                <i class="fas fa-map-marker-alt"></i>
                </span>
                <span>{el.location}</span>
            </div>
        </div>
        <div className=" posted-at mb-2">
        <div className="posted-time ">
                <span>
                <i class="far fa-clock"></i>
                </span>
                <span>{el['posted at']}</span>
            </div>
        </div>
        <div className=" jobType mb-2">
            <div className="job-type">
            
            {el.jobType === "PART TIME" ?(
                    <>
                    <span style={{backgroundColor:"#E8DA7C" , padding:"5px" , color:"white" , fontSize:"12px" , margin:" 0 5px"}}  >
                    {el.jobType} 

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
        

                </>
            
            
                    )
            
            ))} 
        
        </TabPanel>
        <TabPanel value={value} index={5}>

        {data.jobs.filter(item => item.jobType === "FREELANCE").map(el =>(
                (<>

        <div className="job-list mb-4" key={el.id}>
            <div className="jobs-information">
            <div className="job-image-info">
            <div className="job-image">
        
            <img src = {el.jobImage}/>

        </div>
        <div className="job-info ">
            <h6 className="job-info-title ">{el['job-title']}</h6>
            <p>
                <span className="company-name">{el.companyName}</span> | <span >{el.titleSpan}</span>
            </p>
        </div>
    
        </div>
        <div className="jobs-location mb-2">
            <div className="job-location">
                <span>
                <i class="fas fa-map-marker-alt"></i>
                </span>
                <span>{el.location}</span>
            </div>
        </div>
        <div className=" posted-at mb-2">
        <div className="posted-time ">
                <span>
                <i class="far fa-clock"></i>
                </span>
                <span>{el['posted at']}</span>
            </div>
        </div>
        <div className=" jobType mb-2">
            <div className="job-type">
            
            {el.jobType === "FREELANCE" ?(
                    <>
                    <span style={{backgroundColor:"#48C4C9" ,padding:"5px" , color:"white" , fontSize:"12px" ,margin:" 0 5px 0 7px"}}  >
                    {el.jobType} 

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
        

                </>
            
            
                    )
            
            ))} 
    
        
        </TabPanel>
            <div className="load-button text-center">
            <button>LOAD MORE LISTTINGS</button>
            </div>

        
    
    </div>
    </>
);
}
