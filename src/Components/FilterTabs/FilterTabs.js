import { useState } from "react";
import "./FilterTabs.css";
function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
    setToggleState(index);
    }
    return (
        <div className="filter-tabs mb-5">
        <div className="bloc-tabs">
        < button style={{backgroundColor:"white" , color:"black" , fontWeight:"bold"}}
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
        >
        FIND A JOB
        </button>
        <button style={{backgroundColor:"black" , color:"white" , fontWeight:"bold"}}
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
        >
            FIND RESUME
        </button>
        
        
        </div>

        <div className="content-tabs">
        <div
                className={toggleState === 1 ? "content  active-content" : "content"}

            >
                <div className="tabs-content">
            <div className="job-tab">
                <h6>JOB</h6>
                <input type ="text" placeholder="job title , keywords"></input>
            </div>
            <div className="location-tab">
                <h6>LOCATION</h6>
                <input type ="text" placeholder="city or region"></input>
            </div>
            <div className="category-tab">
                <h6>category</h6>
                <select vlaue = "Select Industry " >
                        <option>Select Industry</option>
                        <option>Markting</option>
                        <option>Accounting</option>
                        <option >Banking</option>
                    </select>
            </div>
            <div className="tab-button">
                <button>
                    <span ><i class="fas fa-search"></i></span> SEARCH
                </button>
            </div>
            </div>
        
        </div>

        <div
            className={toggleState === 2 ? "content  active-content" : "content"}
        >
        

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
            </p>
        </div>

        <div
            className={toggleState === 3 ? "content  active-content" : "content"}
        >
            <h2>Content 3</h2>
        
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
        </p>
        </div>
    </div>
    </div>
);
}

export default Tabs;
