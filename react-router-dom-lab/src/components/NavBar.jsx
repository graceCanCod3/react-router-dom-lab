import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
          
            <div>
                <Link to="/">Home</Link>
                <Link to="/mailboxList">Mailbox List</Link>
                <Link to="/new">Add Mailbox</Link>
            </div>


        </nav>
    
    )
  };
  
  export default NavBar;