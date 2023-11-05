import {useState} from "react";
import {Link} from "react-router-dom";

const TrueSidebar = () => {
    const [border, setBorder] = useState("border border-2 border-primary")
    const [flex, setFlex] = useState("d-flex flex-column")

    return(
        <nav className={`navbar navbar-expand-sm text-bg-dark sticky-top `}>
            <div className={`container-fluid ${flex}`}>
                <a className={`navbar-brand`} href="#">Navbar</a>
                <button className={`navbar-toggler `} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`navbar-toggler-icon ${border}`}></span>
                </button>
                <div className={`collapse navbar-collapse`} id="navbarSupportedContent">

                    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${flex} `}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <Link to={'/dash'} className={"btn"}>Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/account'} className={"btn"}>Account</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={'/'} className={"btn"}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/create'} className={"btn"}>Create Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/sand'} className={"btn"}>Sandbox</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TrueSidebar