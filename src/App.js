import './App.css';
import JobsTabs from './Components/JobsTabs/JobsTabs'
import  StartSearching  from './Components/StartSearching/StartSearching';
import SubscribeTweets from './Components/Subscrib Tweets/SubscribeTweets';
import CandidatesSlider from './Components/CandidatesSlider/CandidatesSlider';
import JobsSlider from './Components/FeaturedJobsSlider/FeaturedJobsSlider';
import FilterTabs from './Components/FilterTabs/FilterTabs';

function App() {
  return (
    <div className="app">
    <div className = "map">
      <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4361778.677280515!2d-87.17971672746656!3d42.826135843850025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2seg!4v1628157340560!5m2!1sen!2seg" style={{width:"100%" , height: "320px"}}  allowfullscreen="" loading="lazy"></iframe>

    </div>
    <div className = "search-tabs">
      <div className="container">
      <div className = "search-tabs-content">
        
          <div className="row">
            <div className="col-12">
            <FilterTabs/>
            </div>
            </div>
        
          

      </div>

      </div>
      </div>
      <div className="jobs-tabs">
        <div className="container">
          <div className="jobs-list">
        <div className="row">
          <div className="col-xxl-8  col-xl-8 col-lg-12  col-12" >
  
            <JobsTabs/>
            
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-12  col-12 starting-search">
            <StartSearching/>
          </div>
        </div>
        </div>
        </div>
      </div>
      <div className="container" >
      <div className="row my-5"  >
      <div className="col-lg-8">

        <div className="row d-none  mt-4"   >
          <div className="col-md-4 col-6 mb-3" >
            <div class="col-content">
            <div className="col-icon">
            <i class="far fa-building"></i>
            </div>
            <div className="col-details">
              <h6>Construction &amp; Build</h6>
              <p>7 open positions</p>
            </div>
            </div>
          </div>
          <div className="col-md-4 col-6 mb-4 " >
          <div class="col-content">
            <div className="col-icon">
            <i class="fas fa-book-open"></i>
            </div>
            <div className="col-details">
              <h6>Education &amp; Training</h6>
              <p>32 open positions</p>
            </div>
            </div>
          </div>
          <div className="col-md-4 col-6 mb-4">
          <div class="col-content" style={{borderRight :  "none"}}>
            <div className="col-icon">
            <i class="far fa-chart-bar"></i>  
                      </div>
            <div className="col-details">
              <h6>Accountiong &amp; Finance</h6>
              <p>0 opoitien posns</p>
            </div>
            </div>
          </div>
          </div>
          <div class="row d-none " >
          <div className="col-md-4 col-6 mb-4">
          <div class="col-content">
            <div className="col-icon">
            <i class="far fa-heart"></i> 
                      </div>
            <div className="col-details">
              <h6>Heathcare &amp; Beauty</h6>
              <p>2 open positions</p>
            </div>
            </div>
          </div>
          <div className="col-md-4 col-6 mb-4">
          <div class="col-content">
            <div className="col-icon">
            <i class="fas fa-car-side"></i> 
                      </div>
            <div className="col-details">
              <h6>Cars &amp;Automotive</h6>
              <p>9 open positions</p>
            </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
          <div class="col-content" style={{borderRight:"none"}}>
            <div className="col-icon">
            <i class="far fa-keyboard"></i> 
                      </div>
            <div className="col-details" >
              <h6>Web Development</h6>
              <p>8 open positions</p>
            </div>
            </div>
          </div>

        </div>
      
        <div className="job-conatiner">

                <div className="job-wrap-row">

                  <div className="job-item">

                      <div className="job-icon">
                      <i class="far fa-building"></i>

                        
                      </div>
                      <div className="job-content">

                        <h6>Construction &amp; Build </h6>
                        <p>

                              <span>7</span>
                            Open positions
                        </p>
                      </div>


                  </div>
                  <div className="job-item">

                      <div className="job-icon">

                      <i class="fas fa-book-open"></i>
                        
                      </div>
                      <div className="job-content">

                        <h6>Education &amp; Traning </h6>
                        <p>

                              <span>32</span>
                              Open positions
                        </p>
                      </div>


                  </div>
                  <div className="job-item">

                      <div className="job-icon">

                      <i class="far fa-chart-bar"></i> 
                        
                      </div>
                      <div className="job-content">

                        <h1>Accountiong Finance </h1>
                        <p>

                              <span>7</span>
                                OPen positions
                        </p>
                      </div>


                  </div>

                  <div className="job-item">

                  <div className="job-icon">

                  <i class="far fa-heart"></i>
  
                    </div>
                    <div className="job-content">

                        <h6>Heathcare &amp; Beauty </h6>
                        <p>

                        <span>2</span>
                        Open positions
                        </p>
                        </div>


                        </div>
                        <div className="job-item">

                            < div className="job-icon">

                            <i class="fas fa-car-side"></i>
  
                            </div>
                          <div className="job-content">

                          <h6> Car &amp; Automotive</h6>
                            <p>

                          <span>9</span>Open positions                          
                          </p>
                            </div>


                              </div>
                              <div className="job-item">

                                <div className="job-icon">

                                <i class="far fa-keyboard"></i> 
  
                            </div>
                            <div className="job-content">

                          <h6>Web Development </h6>
                          <p>


                      <span>8</span>   OPen Position
                      </p>
                      </div>


                          </div>



                </div>

                <div className="job-wrap-row d-none">

                    <div className="job-item">

                        <div className="job-icon">

                        <i class="far fa-chart-bar"></i> 
                          
                        </div>
                        <div className="job-content">

                          <h1>Accountiong Finance </h1>
                          <p>

                                <span>7</span>
                              opoitien
                          </p>
                        </div>


                    </div>
                    <div className="job-item">

                        <div className="job-icon">

                        <i class="far fa-chart-bar"></i> 
                          
                        </div>
                        <div className="job-content">

                          <h1>Accountiong Finance </h1>
                          <p>

                                <span>7</span>
                                opoitien
                          </p>
                        </div>


                    </div>
                    <div className="job-item">

                        <div className="job-icon">

                        <i class="far fa-chart-bar"></i> 
                          
                        </div>
                        <div className="job-content">

                          <h1>Accountiong Finance </h1>
                          <p>

                                <span>7</span>
                                opoitien
                          </p>
                        </div>


                    </div>


                </div>

                </div>
                <div className="subscribe-tweets">
            <SubscribeTweets/>
            </div>

                </div>
                    <div className="col-lg-4" >
                      <div className="jobsSilder">
                      <h4> Featured Jobs</h4>
                      <JobsSlider/>
                      </div>


                  </div>

                  </div>
                  </div>
                  <div className ="candidate-slider">
                  <div className="candidates-slider">
                      <h6 className="top-talents mt-5">Find TOP TALENTS</h6>
                    <h3 className="latest-candidates mb-3 ">Explore Our Latest Candidates</h3>
                    <hr/>
                    <p className="my-3">
                        Work with someone perfect for your team &amp;
                        get amazing results working withthe<br/>
                        employess hire talents with confidencel
                    </p>
                    </div>
                    <div className="container">
                    <CandidatesSlider/>
                    <div className = "explore-all text-center my-5">
                      <button>EXPLORE ALL</button>
                    </div>
                    </div>
                  
                  </div>
                  

    
    
    </div>
    
      
  
  );
}

export default App;
