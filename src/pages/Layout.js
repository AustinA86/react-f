import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    import React from 'react';

    function Home() {
      return (
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Expand at sm</a>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarsExample03" 
                aria-controls="navbarsExample03" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
    
              <div className="collapse navbar-collapse" id="navbarsExample03">
                <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a 
                      className="nav-link dropdown-toggle" 
                      href="#" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <form role="search">
                  <input 
                    className="form-control" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
      );
    }
    
    


    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/static">Static</Link>
          </li>
          <li>
            <Link to="/contactus">ContactUs</Link>
          </li>
          <li>
            <Link to="/functionalpage">functionalpage</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;