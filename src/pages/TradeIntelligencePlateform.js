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
              {t("fdi_page3.heading")}
            </h1>
            <nav aria-label="breadcrumb ">
              <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li class="breadcrumb-item">
                  <a class="breadcrumb-link" href="#0">
                    <i class="bi bi-house icon "></i>home
                  </a>
                </li>
                <li class="breadcrumb-item active"> {t("fdi_page3.para")}</li>
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
                        {t("fdi_page3.heading")}
                      </span>
                      <h2
                        className=" title    wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <span className="hollow-text">
                          {" "}
                          {t("fdi_page3.heading")}
                        </span>
                      </h2>
                    </div>
                  </div>
                  <h3>{t("fdi_page3.sub")}</h3>
                  <p>{t("fdi_page3.para1")}</p>
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
              <h2>{t("fdi_page3.list_heading")}</h2>
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
                    {t("fdi_page3.list.l1.title")}
                  </h3>
                  <p className="service-text">{t("fdi_page3.list.l1.para")}</p>
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
                  <h3 className="service-title">
                    {t("fdi_page3.list.l2.title")}
                  </h3>
                  <p className="service-text">{t("fdi_page3.list.l2.para")}</p>
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
                    {t("fdi_page3.list.l3.title")}
                  </h3>
                  <p className="service-text">{t("fdi_page3.list.l3.para")}</p>
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
                  <h3 className="service-title">
                    {t("fdi_page3.list.l4.title")}
                  </h3>
                  <p className="service-text">{t("fdi_page3.list.l4.para")}</p>
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
