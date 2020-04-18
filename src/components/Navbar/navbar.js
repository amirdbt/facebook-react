import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
  // console.log(props.joke);
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light navcolor">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button
          className={"navbar-toggler"}
          type={"button"}
          data-toggle="collapse"
          data-target={"#navbarNavDropdown"}
          aria-controls={"navbarNavDropdown"}
          aria-expanded={"false"}
          aria-label={"Toggle navigation"}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ul className="navbar-nav">
            <li>
              <form class="form-inline">
                <button class="btn  mr-sm-1" type="submit">
                  <img src={"/images/fb.png"} style={{ height: "22px" }} />
                </button>
                <input
                  class="form-control mr-sm-1"
                  type="search"
                  placeholder="Tony Nta"
                  aria-label="Search"
                />
                <button class="btn  my-2 mr-sm-3" type="submit">
                  <img src={"/images/search.png"} style={{ height: "14px" }} />
                </button>
              </form>
            </li>
            <li className="nav-item mt-2">
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <a className="nav-link">
                  <img
                    src={"/images/tony.jpg"}
                    style={{
                      height: "30px",
                      borderRadius: "50%",
                      paddingRight: "3px",
                    }}
                  />
                  <span className="navFontColor border-right">Tony</span>
                </a>
              </Link>
            </li>
            <li className="nav-item mt-2">
              <Link to="/">
                <a className="nav-link" href={"#"}>
                  <span className="navFontColor border-right">Home</span>
                </a>
              </Link>
            </li>
            <li className="nav-item mt-2">
              <a className="nav-link" href={"#"}>
                <span className="navFontColor border-right">Create</span>
              </a>
            </li>
            <li className="nav-item mt-2">
              <a className="nav-link" href={"#"}>
                <span className="navFontColor">
                  <img src="https://img.icons8.com/material-sharp/24/000000/user-group-man-woman.png" />
                </span>
              </a>
            </li>
            <li className="nav-item mt-2">
              <a className="nav-link" href={"#"}>
                <span className="navFontColor">
                  <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-messenger.png" />
                </span>
              </a>
            </li>
            <li className="nav-item mt-2">
              <a className="nav-link" href={"#"}>
                <span className="navFontColor border-right">
                  <img src="https://img.icons8.com/material-sharp/24/000000/bell.png" />
                </span>
              </a>
            </li>
            <li className="nav-item dropdown mt-2">
              <a
                className="nav-link dropdown-toggle"
                href={"#"}
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
