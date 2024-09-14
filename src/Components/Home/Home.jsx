import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(){
    return(
        <div className="home-container">
            <h1>Welcome to the app.</h1>
              <Link to="/about">
                <button className="home-button">Go to About Page</button>
              </Link>
        </div>
        
    );
}
export default Home;