import { Link, useNavigate } from "react-router-dom";





function Nav() {
    return ( 
      <nav className="navbar navbar-expand-sm bg-white sticky-top">
        <div className="container-fluid ">      
            <Link to="/" className="navbar-brand logo" ><img src="img/logo.png"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">                          
              <ul className="navbar-nav">
                <li>
                <Link className="nav-link" to="/player">PLAYER</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/support">SUPPORT</Link>
                </li>
              </ul>
            </div>
        </div>
    </nav>
  );
}

export default Nav;