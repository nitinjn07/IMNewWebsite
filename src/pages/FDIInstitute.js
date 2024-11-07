import React from 'react'

export default function FDIInstitute() {
  return (
    <>
        <section class="d-flex align-items-center page-hero  inner-page-hero " id="page-hero">
      <div class="overlay-photo-image-bg parallax" data-bg-img="assets/images/hero/inner-page-hero.jpg" data-bg-opacity="1"></div>
      <div class="overlay-color" data-bg-opacity=".75"></div>
      <div class="container">
        <div class="hero-text-area centerd">
          <h1 class="hero-title  wow fadeInUp" data-wow-delay=".2s">Services </h1>
          <nav aria-label="breadcrumb ">
            <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
              <li class="breadcrumb-item"><a class="breadcrumb-link" href="#0"><i class="bi bi-house icon "></i>home</a></li>
              <li class="breadcrumb-item active">services</li>
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
          <div className="col-12 col-lg-6 d-flex align-items-center order-1 order-lg-0 about-col pad-end  wow fadeInUp " data-wow-delay="0.6s">
            <div className="text-area ">
              <div className="sec-heading  light-title ">
                <div className="content-area"><span className=" pre-title       wow fadeInUp " data-wow-delay=".2s">about Us</span>
                  <h2 className=" title    wow fadeInUp" data-wow-delay=".4s"><span className="hollow-text">Change it to</span> Incubation Masters<span className="featured-text">  IM. <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" /></svg></span></h2>
                </div>
              </div>
                                      <p className=" about-text">
                                      Incubation Masters is a mission based organisation and a global leader in cultivating innovation within the public and private sectors through our umbrella of services.


                                      </p>
                                      <p>
                                      Incubation Masters is a global leader in cultivating innovation within the public and private sectors through our umbrella of services including Startup and Incubation support, specialized acceleration program for startups working in public sector solutions, angel investment, cross border innovation exchange, market access programs, trade and investment promotion to name a few. We also provide strategic advisory services to startups seeking to enhance their market positioning and operational efficiency. Our international wing IM Global specializes in facilitating market entry for startups worldwide, providing strategic insights and networks crucial for navigating diverse global markets.
                                      </p>
            
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center order-0 order-lg-1 about-col  wow fadeInUp" data-wow-delay="0.2s">
            <div className="img-area  " data-tilt>
              <div className="image   "><img className="about-img img-fluid " loading="lazy" src="/assets/assets/images/about/1.png" alt="Our vision" /></div>
            </div>
          </div>
        </div>
      </div>
      {/*End first about div*/}
    </div>
  </section>
       <section className="services services-boxed mega-section  " id="services">
    <div className="container">
      <div className="sec-heading  ">
        <div className="content-area"><span className="pre-title wow fadeInUp " data-wow-delay=".2s">services</span>
          <h2 className="title  wow fadeInUp" data-wow-delay=".4s"><span className="hollow-text">services</span> we offer
          </h2>
          <p className="subtitle  wow fadeInUp " data-wow-delay=".6s">At Incubation Masters, we are dedicated to driving innovation and fostering growth in the public and private sectors. As a global consulting leader, we offer a comprehensive suite of services designed to elevate local and global economic development.</p>
        </div>
        <div className="cta-area  wow fadeInUp" data-wow-delay=".8s"><a className="cta-btn btn-solid    ">see all <i className="bi bi-arrow-right icon " /></a></div>
      </div>
      <div className="row gx-4 gy-4 services-row ">
        <div className="col-12 col-md-6  col-lg-4 mx-auto ">
          {/*Start First service box*/}
          <div className="box service-box  wow fadeInUp reveal-start" data-wow-offset={0} data-wow-delay=".1s">
            <div className="service-icon"><i className="flaticon-web-development font-icon" /></div><span className="service-num hollow-text">1 </span>
            <div className="service-content">
              <h3 className="service-title">Incubation and Startup Consulting</h3>
              <p className="service-text">Providing startups with tailored mentorship, resources, and strategic guidance to accelerate growth.</p>
            </div><a className="read-more" href="service-single.html">read more<i className="bi bi-arrow-right icon " /></a>
          </div>
          {/* End First service box   */}
        </div>
        <div className="col-12 col-md-6  col-lg-4 mx-auto ">
          {/*Start Second service box*/}
          <div className="box service-box  wow fadeInUp reveal-start" data-wow-offset={0} data-wow-delay=".2s">
            <div className="service-icon"><i className="flaticon-nanotechnology font-icon" /></div><span className="service-num hollow-text">2 </span>
            <div className="service-content">
              <h3 className="service-title">Investment Promotion</h3>
              <p className="service-text">Driving economic growth by connecting investors with high-potential opportunities and fostering a thriving investment ecosystem.</p>
            </div><a className="read-more" href="service-single.html">read more<i className="bi bi-arrow-right icon " /></a>
          </div>
          {/* End Second service box*/}
        </div>
        <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
          {/*Start Third service box*/}
          <div className="box service-box  wow fadeInUp reveal-start" data-wow-offset={0} data-wow-delay=".3s">
            <div className="service-icon"><i className="flaticon-web-domain font-icon" /></div><span className="service-num hollow-text">3 </span>
            <div className="service-content">
              <h3 className="service-title">Strategic Advisory to Governments </h3>
              <p className="service-text">Offering expert advice to government bodies on policy, strategy, and economic development for impactful, sustainable growth.</p>
            </div><a className="read-more" href="service-single.html">read more<i className="bi bi-arrow-right icon " /></a>
          </div>
          {/* End Third service box*/}
        </div>
        <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
          {/*Start fourth service box*/}
          <div className="box service-box  wow fadeInUp reveal-start" data-wow-offset={0} data-wow-delay=".4s">
            <div className="service-icon"><i className="flaticon-profile font-icon" /></div><span className="service-num hollow-text">4 </span>
            <div className="service-content">
              <h3 className="service-title">International Market Entry Assistance</h3>
              <p className="service-text">Guiding businesses through market research, strategy, and connections to successfully enter and expand in global markets.</p>
            </div><a className="read-more" href="service-single.html">read more<i className="bi bi-arrow-right icon " /></a>
          </div>
          {/* End fourth service box   */}
        </div>
        <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
          {/*Start 5th service box*/}
          <div className="box service-box  wow fadeInUp reveal-start" data-wow-offset={0} data-wow-delay=".5s">
            <div className="service-icon"><i className="flaticon-search font-icon" /></div><span className="service-num hollow-text">5 </span>
            <div className="service-content">
              <h3 className="service-title">Fundraising Support through IM Angels</h3>
              <p className="service-text">Connecting startups with a network of investors to secure essential funding and fuel their growth journeys.</p>
            </div><a className="read-more" href="service-single.html">read more<i className="bi bi-arrow-right icon " /></a>
          </div>
          {/* End 5th service box*/}
        </div>
        <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
          {/*Start 6th service box*/}
          <div className="box service-box  wow fadeInUp  reveal-start" data-wow-offset={0} data-wow-delay=".6s">
            <div className="service-icon"><i className="flaticon-strategy font-icon" /></div><span className="service-num hollow-text">6 </span>
            <div className="service-content">
              <h3 className="service-title">Curated Cohorts for Public Sector</h3>
              <p className="service-text">Building tailored programs to address specific public sector needs, enhancing innovation and collaborative solutions.</p>
            </div><a className="read-more" href="service-single.html">read more<i className="bi bi-arrow-right icon " /></a>
          </div>
          {/* End 6th service box*/}
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
