import React from "react";
import { Link } from "react-router-dom";
export default function Alpha() {
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
                Signup
              </h1>
              <nav aria-label="breadcrumb ">
                <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" href="#0">
                      <i className="bi bi-house icon " />
                      home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">signup</li>
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
              <div class="col-md-8 mx-auto">
                <div className="card border-0">
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
                      <div class="form-floating mb-3 mt-3">
                        <input
                          type="text"
                          class="form-control"
                          id="startupname"
                          placeholder="Enter Startup Name"
                          name="startupname"
                        />
                        <label for="startup name">Startup Name</label>
                      </div>
                      <div class="form-floating mb-3 mt-3">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter Email ID"
                        />
                        <label for="email id">Email ID</label>
                      </div>
                      <div class="form-floating mb-3 mt-3">
                        <input
                          type="tel"
                          class="form-control"
                          placeholder="Enter Mobile No"
                        />
                        <label>Mobile Number </label>
                      </div>
                      <div class="form-floating mb-3 mt-3">
                        <select
                          className="form-control"
                          placeholder="Country Name"
                          id="country name"
                        >
                          {" "}
                          <option value="">Country Name</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Thailand">Thailand</option>
                        </select>
                        <label>Country Name</label>
                      </div>
                      <div class="form-floating mb-3 mt-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter City Name"
                        />
                        <label>City Name </label>
                      </div>
                      <div class="form-floating mb-3 mt-3">
                        <textarea
                          className="form-control"
                          placeholder="Startup Idea"
                        ></textarea>
                        <label>Startup Idea ( In Brief) </label>
                      </div>
                      <div class="form-floating mb-3 mt-3">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password"
                        />
                        <label>Password</label>
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          className="btn btn-solid"
                          value="Signup Now"
                        />
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
