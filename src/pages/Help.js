import React from "react";
import { useTranslation } from "react-i18next";
export default function Help() {
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
          <div className="container text-center">
            <div className="hero-text-area centerd">
              <h3 className="wow fadeInUp" data-wow-delay=".2s">
                IM support is ready 24/7 to help you
              </h3>
            </div>

            <form>
              <input
                type="text"
                id="search_help"
                className="mt-5"
                placeholder="Search Query"
              />
            </form>
          </div>
        </section>
        {/* End inner Page hero*/}
        {/* Start  about Section*/}
        <section className="about mega-section" id="about">
          <div className="container">
            {/* Start first about div*/}
            <div className="content-block">
              <div className="row bg-white text-dark rounded-4 p-5">
                <div className="col-md-12 mb-2">
                  <h3>Most helpful articles for you</h3>
                </div>
                <div className="col-md-4" id="qalist">
                  <a href="#0">
                    <span className="float-start">What is IM?</span>
                    <span className="float-end">
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
                <div className="col-md-4" id="qalist">
                  <a href="#0">
                    <span className="float-start">What is IM?</span>
                    <span className="float-end">
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
                <div className="col-md-4" id="qalist">
                  <a href="#0">
                    <span className="float-start">What is IM?</span>
                    <span className="float-end">
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
                <div className="col-md-4" id="qalist">
                  <a href="#0">
                    <span className="float-start">What is IM?</span>
                    <span className="float-end">
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
                <div className="col-md-4" id="qalist">
                  <a href="#0">
                    <span className="float-start">What is IM?</span>
                    <span className="float-end">
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
                <div className="col-md-4" id="qalist">
                  <a href="#0">
                    <span className="float-start">What is IM?</span>
                    <span className="float-end">
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*End first about div*/}
          </div>
        </section>
        {/* End  about Section*/}
      </div>
    </>
  );
}
