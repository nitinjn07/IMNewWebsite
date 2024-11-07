import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {

  return (
    
    <> <header class="page-header   header-basic" id="page-header">
    <div class="header-search-box">
      <div class="close-search"></div>
      <form class="nav-search search-form" role="search" method="get" action="#">
        <div class="search-wrapper"> 
          <label class="search-lbl">Search for:</label>
          <input class="search-input" type="search" placeholder="Search..." name="searchInput" autofocus="autofocus"/>
          <button class="search-btn" type="submit"><i class="bi bi-search icon"></i></button>
        </div>
      </form>
    </div>
    <div class="container">
      <nav class="menu-navbar">
        <div class="header-logo"><Link class="logo-link" to="/"><img class="logo-img light-logo" loading="lazy" src="./assets/assets/images/logo/logo-light.png" alt="logo"/><img class="logo-img  dark-logo" loading="lazy" src="./assets/assets/images/logo/logo-dark.png" alt="logo"/></Link></div>
        <div class="links menu-wrapper ">
            <ul class="list-js links-list">
            <li class="menu-item"><Link class="menu-link  " to="/About">About IM </Link></li>
            <li class="menu-item has-sub-menu"><Link class="menu-link   active" to="#0">Services <i class="fas fa-plus  plus-icon"> </i></Link>
              <ul class="sub-menu ">
                <li class="menu-item sub-menu-item"><Link class="menu-link sub-menu-link" to="/our-offerings">Our Offerings</Link></li>
                <li class="menu-item sub-menu-item"><Link class="menu-link sub-menu-link" to="/startup-idea-validator-tools">Startup Idea Validator Tools</Link></li>
                <li class="menu-item sub-menu-item"><Link class="menu-link sub-menu-link" to="/business-model-generator">Business Model Generator</Link></li>
               
              </ul>
            </li>
            
            <li class="menu-item has-sub-menu"><Link class="menu-link" to="#0">FDI<i class="fas fa-plus  plus-icon"> </i></Link>
              <ul class="sub-menu ">
                <li class="menu-item sub-menu-item"><Link class="menu-link sub-menu-link" to="fdi-institute">FDI Institute</Link></li>
                  <li class="menu-item sub-menu-item"><Link class="menu-link sub-menu-link" to="fdi-crm">FDI CRM</Link></li>
                  <li class="menu-item sub-menu-item"><Link class="menu-link sub-menu-link" to="trade-intelligence-plateform">Trade Intelligence Plateform</Link></li>
                  <li class="menu-item sub-menu-item"><Link class="menu-link sub-menu-link" to="fdi-intelligence-plateform">FDI Intelligence Plateform</Link></li>
              </ul>
              </li>
              <li class="menu-item"><Link class="menu-link  " to="/insights">Insights </Link></li>
              <li class="menu-item"><Link class="menu-link  " to="/Career">Career </Link></li>
              <li class="menu-item"><Link class="menu-link  " to="/resources">Resouces </Link></li>
            
            <li class="menu-item"><Link class="menu-link  " to="/contact-us">Contact us </Link></li>
          </ul>
        </div>
        <div class="controls-box">
          
          <div class="control  menu-toggler"><span></span><span></span><span></span></div>
          
          <div class="control header-search-btn"><i class="bi bi-search icon"></i></div>
          
          <div class="mode-switcher ">
            <div class="switch-inner go-light " title="Switch To Light Mode "><i class="bi bi-sun icon "></i></div>
            <div class="switch-inner go-dark" title="Switch To Dark Mode "><i class="bi bi-moon icon "></i></div>
          </div>
          
        </div>
      </nav>
    </div>
  </header></>
  )
}
