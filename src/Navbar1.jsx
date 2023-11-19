import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar1 = () => {
  return (
<>
<div className='container-fluid nav_bg'>
<div className='row'>
<div className='col-10 mx-auto'>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <NavLink class="navbar-brand" to="#">Navbar</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: '100px' }}>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Multiple Currency Swap
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      POS+
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Checkout
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      dctpay Card
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink 
                 className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                >
                  Industries
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Automotive
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Travels and Hospitality
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Healthcare
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Retail
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Professional Services
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Who Are we
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Careers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Referral
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      App Download
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Case Studies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Support Center
                    </NavLink>
                  </li>
                </ul>
              </li>
         
      </ul>
      <form class="d-flex">
  <button class="btn btn-outline-success mr-3" type="submit">Login</button>
  <button class="btn btn-outline-success mx-3" type="submit">Book Demo</button>
  <button class="btn btn-outline-success ml-3" type="submit">Sign Up</button>
</form>

    </div>
  </div>
</nav>

</div>
</div>
</div>
</>
  )
}


export default Navbar1
