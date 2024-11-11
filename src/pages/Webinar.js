import React from 'react'

export default function Webinar() {
  return (
      <>
          <div>
  <section className="d-flex align-items-center page-hero  inner-page-hero " id="page-hero">
    <div className="overlay-photo-image-bg parallax" data-bg-img="/assets/assets/images/hero/inner-page-hero.jpg" data-bg-opacity={1} />
    <div className="overlay-color" data-bg-opacity=".75" />
    <div className="container">
      <div className="hero-text-area centerd">
        <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">About Us</h1>
        <nav aria-label="breadcrumb ">
          <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
            <li className="breadcrumb-item"><a className="breadcrumb-link" href="#0"><i className="bi bi-house icon " />home</a></li>
            <li className="breadcrumb-item active">about us</li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
  {/* End inner Page hero*/}
  {/* Start  about Section*/}
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
  {/* End  about Section*/}
  
</div>
    </>
  )
}
