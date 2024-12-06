import React from "react";
import { useTranslation } from "react-i18next";
export default function FDICRM() {
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
              FDI CRM{" "}
            </h1>
            <nav aria-label="breadcrumb ">
              <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li class="breadcrumb-item">
                  <a class="breadcrumb-link" href="#0">
                    <i class="bi bi-house icon "></i>home
                  </a>
                </li>
                <li class="breadcrumb-item active">FDI CRM</li>
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
                        FDI CRM
                      </span>
                      <h2
                        className=" title    wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <span className="hollow-text">FDI CRM</span>
                      </h2>
                    </div>
                  </div>
                  <h3>FDi CRM - Redefining Investor Relationship Management</h3>
                  <p>
                    Traditional CRM systems fall short when it comes to managing
                    the intricate investor life-cycle that Economic Development
                    Organizations (EDOs) and Investment Promotion Agencies
                    (IPAs) encounter daily. Enter InterDiplom CRM, an integral
                    component of our FDiMasters Suite.
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
                    A Holistic Approach to Investor Management
                  </h3>
                  <p className="service-text">
                    InterDiplom CRM, unlike conventional solutions, empowers
                    EDOs and IPAs to manage the entire investor life-cycle
                    seamlessly. Our innovative platform is designed to help you
                    not only attract new investments but also build and nurture
                    invaluable investor relationships. It facilitates engagement
                    with investors, enabling them to realize their full
                    potential, and supports existing investors through robust
                    aftercare and business retention and expansion (BRE)
                    strategies.
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
                  <h3 className="service-title">
                    Customization Without Hidden Costs
                  </h3>
                  <p className="service-text">
                    What sets InterDiplom CRM apart is its intuitive design that
                    allows for rapid customization. Tailor the system to align
                    perfectly with your unique service offerings, without the
                    burden of hidden costs. We believe in transparency and
                    simplicity, ensuring that our platform aligns precisely with
                    your organization's requirements.
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
                    Streamlined Onboarding and Support
                  </h3>
                  <p className="service-text">
                    We understand that adopting a new system can be challenging.
                    That's why we've streamlined the process to make it as
                    smooth as possible. With InterDiplom CRM, you can expect
                    fast and easy onboarding, supported by our expert team. From
                    system setup to data migration and training, every step is
                    included in the license fee. We're here to ensure that your
                    transition to our CRM solution is hassle-free.
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
                  <h3 className="service-title">
                    Your Partner in Investor Success
                  </h3>
                  <p className="service-text">
                    InterDiplom CRM isn't just a tool; it's a strategic partner
                    in your mission to drive economic growth and attract
                    investments. We provide you with the capabilities and
                    support you need to manage investors effectively, nurturing
                    relationships, and maximizing aftercare efforts.
                  </p>
                </div>
              </div>
              {/* End fourth service box   */}
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h2 className="text-center">
                Choose InterDiplom CRM as your trusted companion in redefining
                investor relationship management. Join us in the pursuit of
                excellence, where investor success is the ultimate goal.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
