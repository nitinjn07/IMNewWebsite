import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  // State to manage visibility of each dropdown using a Map
  const [dropdowns, setDropdowns] = useState(new Map());
  const [isClassAdded, setIsClassAdded] = useState(false);

  const toggleMenu = () => {
    setIsClassAdded(!isClassAdded);
  };

  // State to manage visibility of each dropdown using a Map

  // Toggle the visibility of a specific dropdown by index
  const toggleDropdown = (index) => {
    // Create a copy of the current state to avoid direct mutation
    const newDropdowns = new Map(dropdowns);

    // Toggle the state for the clicked dropdown
    newDropdowns.set(index, !newDropdowns.get(index));

    // Set the updated state
    setDropdowns(newDropdowns);
  };

  const data = [
    { id: 1, name: "Career", category: "Contact Page", link: "/career" },
    { id: 2, name: "Contact", category: "", link: "/contact-us" },
    { id: 3, name: "Singup", category: "", link: "/signup" },
    { id: 4, name: "Login", category: "", link: "/login" },
    { id: 5, name: "alpha", category: "", link: "/alpha" },
    { id: 6, name: "beta", category: "", link: "/beta" },
    { id: 7, name: "gamma", category: "", link: "/gamma" },
    { id: 8, name: "sigma", category: "", link: "/sigma" },
    { id: 9, name: "insights", category: "", link: "/insights" },
  ];

  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.trim() !== "") {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData([]); // Clear the results if the input is empty
    }
  };

  return (
    <>
      {" "}
      <header class="page-header   header-basic" id="page-header">
        <div class="header-search-box">
          <div class="close-search"></div>
          <form
            class="nav-search search-form"
            role="search"
            method="get"
            action="#"
          >
            <div class="search-wrapper">
              <label class="search-lbl">Search for:</label>
              <input
                class="search-input"
                type="search"
                placeholder="Search..."
                name="searchInput"
                autofocus="autofocus"
                value={query}
                onChange={handleSearch}
              />
              <button class="search-btn" type="submit">
                <i class="bi bi-search icon"></i>
              </button>

              {query && (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                      <p>
                        <Link to={item.link} key={item.id}>
                          {item.name}
                        </Link>
                      </p>
                    ))
                  ) : (
                    <li>No results found</li>
                  )}
                </ul>
              )}
            </div>
          </form>
        </div>
        <div class="container">
          <nav class="menu-navbar">
            <div class="header-logo">
              <Link class="logo-link" to="/">
                <img
                  class="logo-img light-logo"
                  loading="lazy"
                  src="./assets/assets/images/logo/logo-light.png"
                  alt="logo"
                  style={{ width: "50px" }}
                />
                <img
                  class="logo-img  dark-logo"
                  loading="lazy"
                  src="./assets/assets/images/logo/logo-dark.png"
                  alt="logo"
                  style={{ width: "50px" }}
                />
              </Link>
            </div>

            <div
              className={
                isClassAdded ? "links menu-wrapper show" : "links menu-wrapper"
              }
            >
              <ul class="list-js links-list">
                <li class="menu-item">
                  <Link class="menu-link  " to="/About">
                    About IM{" "}
                  </Link>
                </li>
                <li class="menu-item has-sub-menu">
                  <Link
                    class="menu-link"
                    to="#0"
                    onClick={() => toggleDropdown(0)}
                  >
                    Services
                    <i class="fas fa-plus  plus-icon"></i>
                  </Link>
                  <ul
                    className={`sub-menu ${
                      dropdowns.get(0) ? "d-block" : "d-block"
                    }`}
                  >
                    <li class="menu-item sub-menu-item">
                      <Link class="menu-link sub-menu-link" to="/our-offerings">
                        Our Offerings
                      </Link>
                    </li>
                  </ul>
                </li>

                <li class="menu-item has-sub-menu">
                  <Link
                    class="menu-link"
                    to="#0"
                    onClick={() => toggleDropdown(1)}
                  >
                    FDI<i class="fas fa-plus  plus-icon"> </i>
                  </Link>
                  <ul
                    className={`sub-menu ${
                      dropdowns.get(1) ? "d-block" : "d-block"
                    }`}
                  >
                    <li class="menu-item sub-menu-item">
                      <Link class="menu-link sub-menu-link" to="fdi-institute">
                        FDI Institute
                      </Link>
                    </li>
                    <li class="menu-item sub-menu-item">
                      <Link class="menu-link sub-menu-link" to="fdi-crm">
                        FDI CRM
                      </Link>
                    </li>
                    <li class="menu-item sub-menu-item">
                      <Link
                        class="menu-link sub-menu-link"
                        to="trade-intelligence-plateform"
                      >
                        Trade Intelligence Plateform
                      </Link>
                    </li>
                    <li class="menu-item sub-menu-item">
                      <Link
                        class="menu-link sub-menu-link"
                        to="fdi-intelligence-plateform"
                      >
                        FDI Intelligence Plateform
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="menu-item">
                  <Link class="menu-link  " to="/Insights">
                    Insights{" "}
                  </Link>
                </li>
                <li class="menu-item">
                  <Link class="menu-link  " to="/Career">
                    Career{" "}
                  </Link>
                </li>
                <li class="menu-item">
                  <Link class="menu-link  " to="/Resources">
                    Resouces{" "}
                  </Link>
                </li>

                <li class="menu-item">
                  <Link class="menu-link  " to="/elevate-by-im">
                    elevate by IM{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div class="controls-box">
              <div class="control menu-toggler" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div class="control header-search-btn">
                <i class="fa fa-search"></i>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
