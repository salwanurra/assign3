import React from "react";
import Sidebar from "../components/Sidebar";
import About from "./About";
import Awards from "./Awards";
import Education from "./Education";
import Experience from "./Experience";
import Interest from "./Interests";
import Skills from "./Skills";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Interest />
                <Awards />
            </div>
        );
    
      }
}

export default Home;