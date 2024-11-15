import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div>
        <section
          className="d-flex align-items-center page-hero  inner-page-hero "
          id="page-hero"
        >
          <div
            className="overlay-photo-image-bg parallax"
            data-bg-img="./assets/assets/images/hero/inner-page-hero.jpg"
            data-bg-opacity={1}
          />
          <div className="overlay-color" data-bg-opacity=".75" />
          <div className="container">
            <div className="hero-text-area centerd">
              <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">
                Login
              </h1>
              <nav aria-label="breadcrumb ">
                <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" href="#0">
                      <i className="bi bi-house icon " />
                      home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">login</li>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        <section className="faq mega-section" id="faq">
          <div className="shape-top-left" />
          <div className="shape-bottom-right" />
          <div className="pattern-top-end-dir" />
          <div className="pattern-bottom-start-dir" />
          <div className="container">
            <div className="row">
              <div class="col-md-10 mx-auto">
                <div className="card border-0" id="signin">
                  <div
                    className="card-header"
                    style={{ background: "#09aff4" }}
                  >
                    <Link to="/Signup" className="btn btn-solid">
                      Signup
                    </Link>
                    <Link to="/Login" className="btn btn-solid bg-dark mx-3">
                      Login
                    </Link>
                  </div>
                  <div class="card-body">
                    <form>
                      <div className="row">
                        <div class="form-group mb-3 mt-3 col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            id="username"
                            placeholder="Enter username"
                            name="username"
                          />
                        </div>

                        <div class="form-group mb-3 mt-3 col-md-6">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="submit"
                            className="btn btn-solid"
                            value="Login"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
