import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("");
  return (
    <>
      <footer className="page-footer dark-color-footer" id="page-footer">
        <div
          className="overlay-photo-image-bg"
          data-bg-img="./assets/assets/images/sections-bg-images/footer-bg-1.jpg"
          data-bg-opacity=".25"
        />
        <div className="container">
          <div className="row footer-cols">
            <div className="col-12 col-md-8 col-lg-4  footer-col ">
              <img
                className="img-fluid footer-logo"
                loading="lazy"
                src="./assets/assets/images/logo/logo-light.png"
                alt="logo"
              />
              <div className="footer-col-content-wrapper"></div>
              <div className="form-area ">
                <div className="mailchimp-form ">
                  <form className="one-field-form" action="/ThankYou">
                    <div className="field-group ">
                      <label className="email-label" htmlFor="email-input">
                        {" "}
                        {t("footer.section1.p1")}
                      </label>
                      <input
                        className="email-input "
                        type="email"
                        defaultValue=""
                        name="EMAIL"
                        id="email-input"
                        placeholder="Email Address"
                        autoComplete="off"
                      />
                      <div className="cta-area">
                        <input
                          className="btn-solid subscribe-btn"
                          type="submit"
                          defaultValue="Subscribe"
                          name="subscribe"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-2  footer-col ">
              <h2 className=" footer-col-title    ">
                {t("footer.section2.heading")}
              </h2>
              <div className="footer-col-content-wrapper">
                <ul className="footer-menu ">
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" to="/about">
                      {t("footer.section2.menu1")}
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" to="/insights">
                      {t("footer.section2.menu2")}
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" to="/career">
                      {t("footer.section2.menu3")}
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" to="/resources">
                      {t("footer.section2.menu4")}
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" to="/contact-us">
                      {t("footer.section2.menu5")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-2 footer-col ">
              <h2 className=" footer-col-title    ">
                {t("footer.section3.heading")}
              </h2>
              <div className="footer-col-content-wrapper">
                <ul className="footer-menu">
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" to="/fdi-institute">
                      {t("footer.section3.menu1")}
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" to="/fdi-crm">
                      {t("footer.section3.menu2")}
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link
                      className="footer-menu-link"
                      to="/trade-intelligence-plateform"
                    >
                      {t("footer.section3.menu3")}
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link
                      className="footer-menu-link"
                      to="/fdi-intelligence-plateform"
                    >
                      {t("footer.section3.menu4")}
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" to="/help">
                      Help
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12     col-lg-4 footer-col ">
              <h2 className=" footer-col-title    ">
                {t("footer.section4.heading")}
              </h2>
              <div className="footer-col-content-wrapper">
                <div className="contact-info-card">
                  <i className="bi bi-envelope icon" />
                  <a
                    className="text-lowercase  info"
                    href="mailto:info@incubationmasters.com"
                  >
                    info@incubationmasters.com
                  </a>
                </div>
                <div className="contact-info-card">
                  <i className="bi bi-geo-alt icon" />
                  <span className="text-capitalize info">
                    {t("footer.section4.address")}
                  </span>
                </div>

                <div className="contact-info-card">
                  <div className="social-icons">
                    <div className="sc-wrapper dir-row sc-size-32">
                      <ul className="sc-list">
                        <li className="sc-item " title="Facebook">
                          <a
                            className="sc-link"
                            href="https://www.facebook.com/IncubationMasters/"
                            title="social media icon"
                            target="_blank"
                          >
                            <i className="fab fa-facebook-f sc-icon" />
                          </a>
                        </li>
                        <li className="sc-item " title="youtube">
                          <a
                            className="sc-link"
                            href="https://www.linkedin.com/company/incubation-masters/"
                            title="social media icon"
                            target="_blank"
                          >
                            <i className="fab fa-linkedin sc-icon" />
                          </a>
                        </li>
                        <li className="sc-item " title="instagram">
                          <a
                            className="sc-link"
                            href="https://www.instagram.com/incubationmasters/"
                            title="social media icon"
                            target="_blank"
                          >
                            <i className="fab fa-instagram sc-icon" />
                          </a>
                        </li>
                        <li className="sc-item " title="X">
                          <a
                            className="sc-link"
                            href="https://twitter.com/IncubationMS/"
                            title="social media icon"
                            target="_blank"
                          >
                            <i className="fab fa-x-twitter sc-icon" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 d-flex justify-content-start">
                <p className="creadits">
                  © 2024
                  <Link className="link" to="/">
                    &nbsp;Incubation Masters{" "}
                  </Link>
                  All Rights Reserved
                </p>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-end">
                <div className="terms-links">
                  <Link to="/term-of-use">{t("footer_bottom.menu1")} </Link>|{" "}
                  <Link to="/privacy-policy">{t("footer_bottom.menu2")} </Link>|{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
