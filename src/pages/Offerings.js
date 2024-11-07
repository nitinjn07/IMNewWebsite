import React from 'react'

export default function Offerings() {
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
