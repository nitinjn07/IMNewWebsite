import React from "react";
import { useTranslation } from "react-i18next";

export default function Resources() {
  const { t } = useTranslation("");
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
                {t("resource_page.heading")}
              </h1>
              <nav aria-label="breadcrumb ">
                <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" href="#0">
                      <i className="bi bi-house icon " />
                      home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">
                    {t("resource_page.heading")}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        {/* End inner Page hero*/}
        {/* Start  portfolio Section*/}
        <section className="portfolio mega-section   " id="portfolio">
          <div className="container">
            <div className="sec-heading  ">
              <div className="content-area">
                <span
                  className=" pre-title       wow fadeInUp "
                  data-wow-delay=".2s"
                >
                  {t("resource_page.heading")}
                </span>
                <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                  <span className="hollow-text">
                    {t("resource_page.heading")}
                  </span>
                </h2>
              </div>
            </div>
            <div className="portfolio-wrapper  ">
              {/*a menu of links to show the photos users needs   */}

              <div className="portfolio-group wow fadeIn" data-wow-delay=".4s">
                <div className="row ">
                  <div className="col-12  col-md-6  col-lg-4  portfolio-item mobile ">
                    <div className="item   ">
                      <a className="portfolio-img-link" href="/Podcast">
                        <img
                          className="portfolio-img   img-fluid "
                          loading="lazy"
                          src="/assets/assets/images/resources/1.png"
                          alt="IM Podcast"
                        />
                      </a>
                      <div className="item-info ">
                        <h3 className="item-title">
                          {t("resource_page.list.l1")}
                        </h3>
                        <i className="bi bi-arrow-right icon " />
                      </div>
                    </div>
                  </div>
                  <div className="col-12  col-md-6  col-lg-4  portfolio-item web  ">
                    <div className="item   ">
                      <a className="portfolio-img-link" href="/Webinar">
                        <img
                          className="portfolio-img   img-fluid "
                          loading="lazy"
                          src="/assets/assets/images/resources/2.png"
                          alt="IM Webinar"
                        />
                      </a>
                      <div className="item-info ">
                        <h3 className="item-title">
                          {t("resource_page.list.l2")}
                        </h3>
                        <i className="bi bi-arrow-right icon " />
                      </div>
                    </div>
                  </div>
                  <div className="col-12  col-md-6  col-lg-4  portfolio-item data ">
                    <div className="item   ">
                      <a
                        className="portfolio-img-link"
                        href="https://srepublic.in/"
                        target="_blank"
                      >
                        <img
                          className="portfolio-img   img-fluid "
                          loading="lazy"
                          src="/assets/assets/images/resources/3.png"
                          alt="IM Blog"
                        />
                      </a>
                      <div className="item-info ">
                        <h3 className="item-title">
                          {t("resource_page.list.l3")}
                        </h3>
                        <i className="bi bi-arrow-right icon " />
                      </div>
                    </div>
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
