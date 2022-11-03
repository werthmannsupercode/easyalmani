import { Link } from "react-router-dom";
import "./../styles/Navbar.scss";
import Tajik from "./../images/Flag_of_Tajikistan.svg.png";
import Russian from "./../images/Flag_of_Russia.svg.webp";
/* <Link to="/">Home</Link> */

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg px-lg-5 py-lg-3">
            <div className="container-fluid px-lg-5">
                <Link className="navbar-brand" to="#">
                    <p className="m-0">EA</p>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <Link className="nav-link" to="#">Über uns</Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link" to="#">Kurse</Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link" to="#">Preise</Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link" to="#">Anmeldung</Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link" to="#">Kontakt</Link>
                        </li>
                    </ul>
                    <button className="btn-navbar px-3 me-5" type="submit">Login</button>
                    <Link to="#"><img className="me-5" src={Tajik} alt="flag of tajikistan" /></Link>
                    <Link to="#"><img src={Russian} alt="flag of russia" /></Link>

                    {/* <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;