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
            data-bg-img="/assets/assets/images/hero/inner-page-hero.jpg"
            data-bg-opacity={1}
          />
          <div className="overlay-color" data-bg-opacity=".75" />
          <div className="container">
            <div className="hero-text-area centerd">
              <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">
                Alpha ( Free Plan )
              </h1>
              <nav aria-label="breadcrumb ">
                <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" href="#0">
                      <i className="bi bi-house icon " />
                      home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">alpha</li>
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
            <div className="sec-heading  centered ">
              <div className="content-area">
                <span
                  className=" pre-title  wow fadeInUp "
                  data-wow-delay=".2s"
                >
                  Alpha
                </span>
                <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                  <span className="hollow-text">Alpha Quadrant </span> – 30 days{" "}
                </h2>
              </div>
            </div>
            <div className="faq-accordion " id="accordion">
              <div className="row">
                <div className="col-12 col-lg-12">
                  <div className="card mb-2">
                    <div className="card-header " id="heading-1">
                      <h5 className="mb-0 faq-title">
                        <button
                          className="btn btn-link  faq-btn  collapsed "
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-1"
                          aria-expanded="true"
                          aria-controls="collapse-1"
                        >
                          Week 1 - Introduction to Entrepreneurship
                        </button>
                      </h5>
                    </div>
                    <div
                      className="collapse "
                      id="collapse-1"
                      aria-labelledby="collapse-1"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        <p className="faq-answer">
                          <ul>
                            <li>Understanding the startup ecosystem</li>
                            <li>Identifying market needs</li>
                            <li>
                              Define problem statement and potential market size
                              in your country and globally.
                            </li>
                            <li>
                              Idea Ranking and chances of success meter (ESM
                              Score out of 100)
                            </li>
                            <li>Introduction to EIM and EIM Network</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-2">
                    <div className="card-header " id="heading-2">
                      <h5 className="mb-0 faq-title">
                        <button
                          className="btn btn-link  faq-btn  collapsed "
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-2"
                          aria-expanded="true"
                          aria-controls="collapse-2"
                        >
                          Week 2 - Business Idea Validation
                        </button>
                      </h5>
                    </div>
                    <div
                      className="collapse "
                      id="collapse-2"
                      aria-labelledby="collapse-2"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        <p className="faq-answer">
                          <ul>
                            <li>Techniques for validating ideas</li>
                            <li>Customer interviews and feedback</li>
                            <li>
                              Identify potential sales and distribution channel.
                            </li>
                            <li>
                              List out similar businesses, their success and
                              failures pattern
                            </li>
                            <li>
                              List out the potential impediments with this idea
                              and execution such as founders knowledge,
                              resources, money, technology exposure etc.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-2">
                    <div className="card-header " id="heading-3">
                      <h5 className="mb-0 faq-title">
                        <button
                          className="btn btn-link  faq-btn  collapsed "
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-3"
                          aria-expanded="true"
                          aria-controls="collapse-3"
                        >
                          Week 3 - First cut of Business Model
                        </button>
                      </h5>
                    </div>
                    <div
                      className="collapse "
                      id="collapse-3"
                      aria-labelledby="collapse-3"
                      data-bs-parent="#accordion3"
                    >
                      <div className="card-body">
                        <p className="faq-answer">
                          <ul>
                            <li>Introduction to business model canvas</li>
                            <li>
                              List out the potential competitors and prepare
                              matrix.
                            </li>
                            <li>
                              Examples of successful and failed business models
                            </li>
                            <li>
                              List out 10 potential customers who would pay for
                              your services and create customer persona.
                            </li>
                            <li>Finetune revenue model for your idea</li>
                            <li>
                              List out the required budget and resources for MLP
                              and for full-fledged product development.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-2">
                    <div className="card-header " id="heading-4">
                      <h5 className="mb-0 faq-title">
                        <button
                          className="btn btn-link  faq-btn  collapsed "
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-4"
                          aria-expanded="true"
                          aria-controls="collapse-4"
                        >
                          Week 4 - Finalizing Numbers and Decision Making
                        </button>
                      </h5>
                    </div>
                    <div
                      className="collapse "
                      id="collapse-4"
                      aria-labelledby="collapse-4"
                      data-bs-parent="#accordion3"
                    >
                      <div className="card-body">
                        <p className="faq-answer">
                          <ul>
                            <li>Recalculate ESM</li>
                            <li>
                              Create a viable plan to arrange the required
                              budget and resources listed out last week.
                            </li>
                            <li>
                              Create Potential Roadmap to 100 Crore Revenue and
                              positive EBITDA
                            </li>
                            <li>
                              Decision time &ndash; if you would like to pursue
                              this idea further or drop it right here.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-12 text-center">
                  <Link to="/Signup" class="cta-btn btn-solid">
                    Subscribe Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
