import React from 'react';
import './SubscribeTweets.css';

const SubscribeTweets =() =>{

    return(
        <div className="subscribe-tweets-container">
            <div className="row mt-5" style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <div className="col-lg-5 col-12 subscribe-content " style={{ backgroundColor:"#212224"  }}>
                        
                <div className="subscribe-title">
                        <div className="subscribe-icon">
                        <i class="fas fa-location-arrow"></i>
                        </div>
                        <div className="subscribe-news-title">Subscribe Our News</div>
                    </div>
                    <div className="subscribe-pragraph text-white my-3 ">
                        <p>
                            Subscribe to our newsletter to get the latest jobs<br/>
                            posted , candidates , and latest news.
                        </p>
                    </div>
                    <div className="subscribe-form">
                    <div className="email-input my-3">
                            <span className="text-white"><i className="fas fa-envelope"></i> </span>
                        <input type ="email" placeholder=" Enter Your Email" required />
                        </div>
                        <div className="subscribe-button">
                            <button type="submit">SUBSCRIBE</button>
                        </div>
                        </div>
                
                    
                
                </div>

                <div className="col-lg-5 col-12 tweets-content" style={{backgroundColor:"#3EBFF6" }}>
                
                <div className="tweets-title">
                        <div className="tweets-icon">
                        <i class="fab fa-twitter"></i>
                        </div>
                        <div className="latest-tweets-title">Latest Tweets</div>
                    </div>
                    <div className="tweets ">
                        <span>
                            @LIALALR
                        </span>
                    </div>
                    <div className="tweet text-white">
                        <p>
                            We have a major update  for  inslaNOW plugin instagramyl v2.0
                            http://tich/irsta now
                        </p>
                    </div>
                    <div className="tweet-time text-white">
                        <span className="mx-3"><i class="far fa-clock"></i></span>
                        <span>8 hours ago</span>
                    </div>
                    
                
                    
                </div>
            
            </div>
        </div>
    )


}
export default SubscribeTweets;