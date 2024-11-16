import React from "react";
import { Link } from "react-router-dom";
export default function ThankYou() {
  return (
    <div>
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
            <img src="./assets/assets/images/logo/thank-you.png" />
            <p>Our team will contact you soon.</p>

            <Link to="/" className="btn btn-solid">
              Go Back
            </Link>
          </div>
        </section>
        {/* End inner Page hero*/}
        {/* Start  about Section*/}
        <section className="about mega-section" id="about">
          <div className="container">
            {/* Start first about div*/}
            <div className="content-block  ">
              <div className="row">
                <div
                  className="col-12 col-lg-6 d-flex align-items-center order-0 order-lg-1 about-col  wow fadeInUp"
                  data-wow-delay="0.2s"
                ></div>
              </div>
            </div>
            {/*End first about div*/}
          </div>
        </section>
        {/* End  about Section*/}
      </div>
    </div>
  );
}
