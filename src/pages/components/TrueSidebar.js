import { useState } from "react";
import { Link } from "react-router-dom";

const TrueSidebar = () => {
  const [border, setBorder] = useState("border border-2 border-primary");
  const [flex, setFlex] = useState("d-flex flex-column");

  return (
    <nav className={`navbar navbar-expand-sm text-bg-dark sticky-top `}>
      <div className={`container-fluid ${flex}`}>
        <a className={`navbar-brand`} href="#">
          Navbar
        </a>
        <button
          className={`navbar-toggler `}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${border}`}></span>
        </button>
        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${flex} `}>
            <li className="nav-item">
              <a
                className="nav-link active" aria-current="page"href="../Home.js">BOMBE-MED</a>
                 </li>

            <li className="nav-item">
              <Link to={"../inventory.js"} className={"btn"}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/src/pages/inventory.js"} className={"btn"}>
                Inventory
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={"src/pages/category.js"} className={"btn"}>
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/src/pages/suppliers.js"} className={"btn"}>
                Suppliers
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/sand"} className={"btn"}>
                Expired
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TrueSidebar;
