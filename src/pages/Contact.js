import React from "react";

export default function Contact() {
  return (
    <>
      <div>
        <section
          className="d-flex align-items-center page-hero  inner-page-hero "
          id="page-hero"
        >
          <div
            className="overlay-photo-image-bg parallax"
            data-bg-img="/assets/images/hero/inner-page-hero.jpg"
            data-bg-opacity={1}
          />
          <div className="overlay-color" data-bg-opacity=".75" />
          <div className="container">
            <div className="hero-text-area centerd">
              <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">
                Contact Us
              </h1>
              <nav aria-label="breadcrumb ">
                <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" href="#0">
                      <i className="bi bi-house icon " />
                      home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">contact us</li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        {/* End inner Page hero*/}
        {/* Start contact-us */}
        <section className="contact-us  mega-section  pb-0" id="contact-us">
          <div className="container">
            <section className="locations-section  mega-section ">
              <div className="sec-heading centered  ">
                <div className="content-area">
                  <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                    our offices around the world
                  </h2>
                </div>
              </div>
              <div className=" contact-info-panel ">
                <div className="info-section ">
                  <div className="row">
                    <div className="col-12 col-lg-4">
                      <div
                        className="info-panel  wow fadeInUp"
                        data-wow-delay=".4s "
                      >
                        <h4 className="location-title">
                          Corporate Headquarter
                        </h4>
                        <div className="line-on-side "> </div>
                        <p className="location-address">
                          007, 8th floor, Bansal One Bhopal Madhya Pradesh,
                          India
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div
                        className="info-panel  wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        <h4 className="location-title">Regional Office</h4>
                        <div className="line-on-side "> </div>
                        <p className="location-address">
                          4th Floor, Infinity Prius, Vile Parle East – Mumbai.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div
                        className="info-panel  wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        <h4 className="location-title">Other Addresses</h4>
                        <div className="line-on-side "> </div>
                        <p className="location-address">
                          Wework - 240 Richmond Street West, Toronto, Ontario,
                          Canada
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="contact-us-form-section  mega-section  ">
              <div className="row">
                <div className="col-12 ">
                  <div className="contact-form-panel">
                    <div className="sec-heading centered    ">
                      <div className="content-area">
                        <h2
                          className=" title    wow fadeInUp"
                          data-wow-delay=".4s"
                        >
                          Have any questions? Let's answer them
                        </h2>
                      </div>
                    </div>
                    <div
                      className="contact-form-inputs wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <div className="custom-form-area input-boxed">
                        {/*Form To have user messages*/}
                        <form
                          className="main-form"
                          id="contact-us-form"
                          action="https://amincode.com/html/flex-it/php/send-mail.php"
                          method="post"
                        >
                          <span className="done-msg" />
                          <div className="row ">
                            <div className="col-12 col-lg-6">
                              <div className="   input-wrapper">
                                <input
                                  className="text-input"
                                  id="user-name"
                                  name="UserName"
                                  type="text"
                                />
                                <label
                                  className="input-label"
                                  htmlFor="user-name"
                                >
                                  {" "}
                                  Name <span className="req">*</span>
                                </label>
                                <span className="b-border" />
                                <span className="error-msg" />
                              </div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div className="input-wrapper">
                                <input
                                  className="text-input"
                                  id="user-email"
                                  name="UserEmail"
                                  type="email"
                                />
                                <label
                                  className="input-label"
                                  htmlFor="user-email"
                                >
                                  {" "}
                                  E-mail <span className="req">*</span>
                                </label>
                                <span className="b-border" />
                                <span className="error-msg" />
                              </div>
                            </div>
                            <div className="col-12 ">
                              <div className="   input-wrapper">
                                <input
                                  className="text-input"
                                  id="msg-subject"
                                  name="subject"
                                  type="text"
                                />
                                <label
                                  className="input-label"
                                  htmlFor="msg-subject"
                                >
                                  {" "}
                                  Subject <span className="req">*</span>
                                </label>
                                <span className="b-border" />
                                <span className="error-msg" />
                              </div>
                            </div>
                            <div className="col-12 ">
                              <div className="   input-wrapper">
                                <textarea
                                  className=" text-input"
                                  id="msg-text"
                                  name="message"
                                  defaultValue={""}
                                />
                                <label
                                  className="input-label"
                                  htmlFor="msg-text"
                                >
                                  {" "}
                                  your message <span className="req">*</span>
                                </label>
                                <span className="b-border" />
                                <i />
                                <span className="error-msg" />
                              </div>
                            </div>
                            <div className="col-12 submit-wrapper">
                              <button
                                className=" btn-solid"
                                id="submit-btn"
                                type="submit"
                                name="UserSubmit"
                              >
                                Send your message
                              </button>
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
        </section>
      </div>
    </>
  );
}
