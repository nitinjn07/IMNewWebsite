import React from "react";
import { useTranslation } from "react-i18next";
export default function FDIInstitute() {
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
              FDI Institute{" "}
            </h1>
            <nav aria-label="breadcrumb ">
              <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li class="breadcrumb-item">
                  <a class="breadcrumb-link" href="#0">
                    <i class="bi bi-house icon "></i>home
                  </a>
                </li>
                <li class="breadcrumb-item active">FDI Institute</li>
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
                        about Us
                      </span>
                      <h2
                        className=" title    wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <span className="hollow-text">FDI Institute</span>
                      </h2>
                    </div>
                  </div>
                  <h3>
                    Introducing the FDi Institute - Empowering Economic
                    Development Professionals
                  </h3>
                  <p>
                    Working as an economic development professional is an
                    intricate and demanding endeavor. It necessitates not only a
                    profound understanding of market dynamics and industry
                    trends but also a keen insight into corporate strategies and
                    how these intricate elements interconnect on a daily basis.
                  </p>
                  <p>
                    At InterDiplom Masters, we recognize the challenges and
                    complexities that economic development professionals face.
                    To empower you with the knowledge and skills essential for
                    success, we proudly present the FDi Institute—an integral
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
                  <h3 className="service-title">Elevating Expertise</h3>
                  <p className="service-text">
                    The FDi Institute is your gateway to practical tools and
                    resources designed to enhance your proficiency and expertise
                    as an economic developer. It is a subscription service
                    meticulously crafted to cater to the unique needs of
                    professionals like you, who are committed to driving
                    economic growth and investment attraction.
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
                    A Comprehensive Learning Platform
                  </h3>
                  <p className="service-text">
                    Our platform covers a wide spectrum of essential subjects,
                    from investment promotion best practices and marketing
                    strategies to understanding value propositions, lead
                    generation techniques, and the intricacies of facilitating
                    investments. We provide comprehensive resources that equip
                    you with the knowledge and tools required for successful
                    business retention and expansion (aftercare) services.
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
                  <h3 className="service-title">Professional Certification</h3>
                  <p className="service-text">
                    Subscribers to the FDi Institute not only gain access to a
                    wealth of knowledge but also have the opportunity to earn
                    professional certifications. These certifications are a
                    testament to your expertise and dedication to your field,
                    enhancing your credibility in the industry.
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
                  <h3 className="service-title">Cutting-Edge Insights</h3>
                  <p className="service-text">
                    In addition to the valuable training and certification,
                    subscribers benefit from exclusive access to specially
                    developed report content. Stay updated with the latest
                    industry insights, policy advancements, and practical
                    strategies. Our platform offers a direct connection to our
                    team's most recent thinking on issues ranging from policy
                    development to hands-on practices.
                  </p>
                </div>
              </div>
              {/* End fourth service box   */}
            </div>
            <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
              {/*Start 5th service box*/}
              <div
                className="box service-box  h-100 wow fadeInUp reveal-start"
                data-wow-offset={0}
                data-wow-delay=".5s"
              >
                <div className="service-icon">
                  <i className="flaticon-search font-icon" />
                </div>
                <span className="service-num hollow-text">5 </span>
                <div className="service-content">
                  <h3 className="service-title">
                    Personal and Organizational Enhancement
                  </h3>
                  <p className="service-text">
                    The FDi Institute isn't just about personal growth; it's an
                    opportunity for your entire organization to excel. It
                    enables your team to update and refresh critical knowledge
                    and skills, ultimately enhancing both personal and
                    organizational effectiveness. By investing in your
                    professional development, you're investing in your
                    organization's success.
                  </p>
                </div>
              </div>
              {/* End 5th service box*/}
            </div>
            <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
              {/*Start 6th service box*/}
              <div
                className="box service-box h-100 wow fadeInUp  reveal-start"
                data-wow-offset={0}
                data-wow-delay=".6s"
              >
                <div className="service-icon">
                  <i className="flaticon-strategy font-icon" />
                </div>
                <span className="service-num hollow-text">6 </span>
                <div className="service-content">
                  <h3 className="service-title">
                    Join Us in the Pursuit of Excellence
                  </h3>
                  <p className="service-text">
                    The FDi Institute is your companion on the journey to
                    excellence in economic development. Whether you're an
                    industry veteran or just beginning your career, our platform
                    provides the knowledge, certification, and resources to help
                    you thrive in this dynamic field.
                  </p>
                </div>
              </div>
              {/* End 6th service box*/}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                Embrace the future of economic development with the FDi
                Institute —a testament to our commitment to your success.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
