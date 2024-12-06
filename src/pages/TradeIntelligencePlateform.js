import React from "react";
import { useTranslation } from "react-i18next";

export default function TradeIntelligencePlateform() {
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
              Trade Intelligence{" "}
            </h1>
            <nav aria-label="breadcrumb ">
              <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li class="breadcrumb-item">
                  <a class="breadcrumb-link" href="#0">
                    <i class="bi bi-house icon "></i>home
                  </a>
                </li>
                <li class="breadcrumb-item active">Trade Intelligence</li>
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
                        Trade Intelligence{" "}
                      </span>
                      <h2
                        className=" title    wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <span className="hollow-text">Trade Intelligence</span>
                      </h2>
                    </div>
                  </div>
                  <h3>
                    Trade Intelligence Platform: Unleash Market Insights with
                    Precision
                  </h3>
                  <p>
                    As a vital component of the FDiMasters Suite, our Trade
                    Intelligence Platform is your gateway to a wealth of market
                    insights and support services. Designed to empower
                    international companies, our platform offers a single,
                    on-demand, email-enabled call center for export counseling
                    and assistance, ensuring a seamless journey into the Indian
                    market.
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
                  <h3 className="service-title">Navigating Complex Terrain</h3>
                  <p className="service-text">
                    We provide essential information on import tariffs, taxes,
                    and customs procedures in India, helping you efficiently
                    manage the intricacies of cross-border trade.
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
                  <h3 className="service-title">Compliance and Regulations</h3>
                  <p className="service-text">
                    Stay informed about commercial standards, regulations, and
                    practices, ensuring your operations align with Indian
                    business norms and intellectual property rights.
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
                  <h3 className="service-title">Market Expertise</h3>
                  <p className="service-text">
                    Access detailed market information, including distribution
                    channels, business travel insights, and other invaluable
                    data, to make informed decisions in the Indian market.
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
                  <h3 className="service-title">Strategic Insights</h3>
                  <p className="service-text">
                    Identify opportunities and best prospects tailored to your
                    industry and company profile, ensuring you maximize your
                    growth potential in India.
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
