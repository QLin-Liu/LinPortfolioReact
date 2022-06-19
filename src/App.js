import React, { Component } from 'react'
import {NavLink,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import ContactMe from './pages/ContactMe'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  render() {
    return ( 
        <div>
            {/* bootstrap navbar with home, Search and contactme route components */}
            <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#88F6EC", padding:"20px"}}> 
                <a className="navbar-brand mb-0 h1">
                    <img src="./favicon.ico" width="54" height="54" className="d-inline-block align-top" alt=""/>
                    <h6>Yilin Liu</h6>  
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link"to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Search">Github Search</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contactme">Contact Me..</NavLink>
                        </li>
                    </ul>
                </div>             
            </nav>

            {/*  Register the routes */}
            <div className="jumbotron" style={{padding:'80px'}}>
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/Search" element={<Search/>}/>
                    <Route path="/contactme" element={<ContactMe/>}/>
                </Routes> 
            </div>
        </div>
    )
  }
}