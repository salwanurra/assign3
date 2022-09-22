import React from "react";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <img src="/user.png" alt="user" style={{width: 200, marginBottom: 10}} />
                <a href="/about">ABOUT</a>
                <a href="/experience">EXPERIENCE</a>
                <a href="/education">EDUCATION</a>
                <a href="/skills">SKILLS</a>
                <a href="/interests">INTERESTS</a>
                <a href="/awards">AWARDS</a>
            </div>
        );
    
      }
}

export default Sidebar;