import React from "react";
import { useTranslation } from "react-i18next";

export default function FDIIntelligence() {
  const { t } = useTranslation("");
  return (
    <>
      <section
        class="d-flex align-items-center page-hero  inner-page-hero "
        id="page-hero"
      >
        <div
          class="overlay-photo-image-bg parallax"
          data-bg-img="assets/images/hero/inner-page-hero.jpg"
          data-bg-opacity="1"
        ></div>
        <div class="overlay-color" data-bg-opacity=".75"></div>
        <div class="container">
          <div class="hero-text-area centerd">
            <h1 class="hero-title  wow fadeInUp" data-wow-delay=".2s">
              FDI Intelligence{" "}
            </h1>
            <nav aria-label="breadcrumb ">
              <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li class="breadcrumb-item">
                  <a class="breadcrumb-link" href="#0">
                    <i class="bi bi-house icon "></i>home
                  </a>
                </li>
                <li class="breadcrumb-item active">FDI Intelligence</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section className="about mega-section" id="about">
        <div className="container">
          {/* Start first about div*/}
          <div className="content-block  ">
            <div className="row">
              <div
                className="col-12 col-lg-6 d-flex align-items-center order-1 order-lg-0 about-col pad-end  wow fadeInUp "
                data-wow-delay="0.6s"
              >
                <div className="text-area ">
                  <div className="sec-heading  light-title ">
                    <div className="content-area">
                      <span
                        className=" pre-title       wow fadeInUp "
                        data-wow-delay=".2s"
                      >
                        FDI Intelligence Plateform
                      </span>
                      <h2
                        className=" title    wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <span className="hollow-text">
                          FDI Intelligence Plateform
                        </span>
                      </h2>
                    </div>
                  </div>
                  <h3>
                    FDI Intelligence Platform: Unlock Investment Opportunities
                    with Precision
                  </h3>
                  <p>
                    At the heart of the FDiMasters Suite, our FDI Intelligence
                    Platform is your gateway to a world of investment insights
                    and opportunities. Powered by an extensive in-house
                    database, we specialize in identifying Indian companies with
                    international expansion plans and investment potential.
                  </p>
                </div>
              </div>
              <div
                className="col-12 col-lg-6 d-flex align-items-center order-0 order-lg-1 about-col  wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="img-area  " data-tilt>
                  <div className="image   ">
                    <img
                      className="about-img img-fluid "
                      loading="lazy"
                      src="/assets/assets/images/about/1.png"
                      alt="Our vision"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End first about div*/}
        </div>
      </section>
      <section className="services services-boxed mega-section  " id="services">
        <div className="container">
          <div className="row gx-4 gy-4 services-row ">
            <div class="col-md-12 py-5">
              <h2>Key Features</h2>
            </div>
            <div className="col-12 col-md-6  col-lg-4 mx-auto ">
              {/*Start First service box*/}
              <div
                className="box service-box  h-100 wow fadeInUp reveal-start"
                data-wow-offset={0}
                data-wow-delay=".1s"
              >
                <div className="service-icon">
                  <i className="flaticon-web-development font-icon" />
                </div>
                <span className="service-num hollow-text">1 </span>
                <div className="service-content">
                  <h3 className="service-title">
                    Comprehensive Indian Insights
                  </h3>
                  <p className="service-text">
                    Our platform boasts a meticulously curated database of
                    Indian companies and contacts, offering unparalleled
                    accuracy. Every piece of information undergoes manual
                    verification to ensure reliability.
                  </p>
                </div>
              </div>
              {/* End First service box   */}
            </div>
            <div className="col-12 col-md-6  col-lg-4 mx-auto ">
              {/*Start Second service box*/}
              <div
                className="box service-box  h-100 wow fadeInUp reveal-start"
                data-wow-offset={0}
                data-wow-delay=".2s"
              >
                <div className="service-icon">
                  <i className="flaticon-nanotechnology font-icon" />
                </div>
                <span className="service-num hollow-text">2 </span>
                <div className="service-content">
                  <h3 className="service-title">Industry-Focused Searches</h3>
                  <p className="service-text">
                    Tailor your searches to specific Indian industries across
                    various sectors, allowing you to pinpoint investment
                    prospects that align with your objectives.
                  </p>
                </div>
              </div>
              {/* End Second service box*/}
            </div>
            <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
              {/*Start Third service box*/}
              <div
                className="box service-box  h-100 wow fadeInUp reveal-start"
                data-wow-offset={0}
                data-wow-delay=".3s"
              >
                <div className="service-icon">
                  <i className="flaticon-web-domain font-icon" />
                </div>
                <span className="service-num hollow-text">3 </span>
                <div className="service-content">
                  <h3 className="service-title">
                    Investment Potential Analysis
                  </h3>
                  <p className="service-text">
                    Dive deep into individual companies to scan for signs of
                    investment potential, helping you identify the most
                    promising opportunities in the Indian market.
                  </p>
                </div>
              </div>
              {/* End Third service box*/}
            </div>
            <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
              {/*Start fourth service box*/}
              <div
                className="box service-box  h-100 wow fadeInUp reveal-start"
                data-wow-offset={0}
                data-wow-delay=".4s"
              >
                <div className="service-icon">
                  <i className="flaticon-profile font-icon" />
                </div>
                <span className="service-num hollow-text">4 </span>
                <div className="service-content">
                  <h3 className="service-title">Effortless Customization</h3>
                  <p className="service-text">
                    Our platform empowers you to search, filter, sort, and
                    export targeted lists effortlessly, streamlining your
                    investment research and decision-making process.
                  </p>
                </div>
              </div>
              {/* End fourth service box   */}
            </div>

            {/* End 6th service box*/}
          </div>
        </div>
      </section>
    </>
  );
}
