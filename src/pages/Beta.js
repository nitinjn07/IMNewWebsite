import React from "react";

export default function Beta() {
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
                Beta ( Paid )
              </h1>
              <nav aria-label="breadcrumb ">
                <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" href="#0">
                      <i className="bi bi-house icon " />
                      home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">Beta</li>
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
                  Beta - Business development and MVP creation.
                </span>
                <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                  <span className="hollow-text">
                    Beta Quarter (Service Charge Applicable) –{" "}
                  </span>{" "}
                  90 days{" "}
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
                          Month 1 - Refining the Business Model
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
                            <li>
                              Find a co-founder, if don&rsquo;t have it yet.
                            </li>
                            <li>
                              Discuss your business model with two different
                              mentors &ndash; Technology and&nbsp; Sales &amp;
                              Marketing
                            </li>
                            <li>Take notes and redevise business model</li>
                            <li>Deep dive into business model elements</li>
                            <li>Refine Competitive analysis</li>
                            <li>Create a tentative product backlog</li>
                            <li>Create MLP Sprint backlog</li>
                            <li>
                              List out the resources required to complete the
                              MLP.
                            </li>
                            <li>
                              All set to start the MVP under the guidance of two
                              dedicated mentors (tech and sales)
                            </li>
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
                          Month 2 - Developing a Minimum Loveable Product (MLP)
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
                            <li>
                              Understand MLP concepts and methodologies with
                              your co-founder.
                            </li>
                            <li>
                              Onboard the required resources to create MLP
                              including the tech vendor, if required.
                            </li>
                            <li>
                              Discuss the MLP sprint backlog with the team.
                            </li>
                            <li>
                              Decide the roles of product owner, scrum master
                              and organize daily scrum calls.
                            </li>
                            <li>
                              Create social media handles, create a brand
                              identity
                            </li>
                            <li>&nbsp;and start posting everyday.</li>
                            <li>Document the learnings at each step.</li>
                            <li>Iterative testing and feedback loops</li>
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
                          Month 3 -MLP Launch and Feedback
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
                            <li>Completed MLP with initial users feedback.</li>
                            <li>
                              Signoff from founders and mentors for the
                              successful MLP launch and feedback.
                            </li>
                            <li>Developed a basic branding strategy.</li>
                            <li>
                              Refined&nbsp; marketing plan for initial outreach.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-12 text-center">
                  <button class="cta-btn btn-solid">Subscribe Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
