import React from 'react';

import './StartSearching.css';
import Toggles from '../Toggles/Toggles'

const StartSearching = () =>{

    return(
        <div className="start-searching">
            <div className="start-searching-title">
                <span className="search-icon">
                <i class="fas fa-search"></i>
                </span>
                <span>Start Searching</span>
            </div>
            <div className = "jobs-search mt-4">
                <h6>JOB</h6>
                <input type="text" placeholder="Job Title , Keywords"></input>
            </div>
            <div className = "location-search">
            <h6>LOCATION</h6>
                <input type="text" placeholder="City , region"></input>
            </div>
            <div className="category-search">
            <h6>CATEGORY</h6>
            <select vlaue = "Select Industry " >
                        <option>Select Industry</option>
                        <option>Markting</option>
                        <option>Accounting</option>
                        <option >Banking</option>
                    </select>
            </div>
            <div className="toggles">
                <Toggles/>
            </div>
            <div className="startSearch-button ">
                <button>
                    <span className="mr-4"><i class="fas fa-search "></i></span> SEARCH
                </button>
            </div>
        </div>
    )
}
export default StartSearching;