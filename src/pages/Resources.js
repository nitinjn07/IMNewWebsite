import React from 'react'

export default function Resources() {
  return (
    <>
      <div>
  <section className="d-flex align-items-center page-hero  inner-page-hero " id="page-hero">
    <div className="overlay-photo-image-bg parallax" data-bg-img="/assets/assets/images/hero/inner-page-hero.jpg" data-bg-opacity={1} />
    <div className="overlay-color" data-bg-opacity=".75" />
    <div className="container">
      <div className="hero-text-area centerd">
        <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">Resources</h1>
        <nav aria-label="breadcrumb ">
          <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
            <li className="breadcrumb-item"><a className="breadcrumb-link" href="#0"><i className="bi bi-house icon " />home</a></li>
            <li className="breadcrumb-item active">Resources</li>
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
        <div className="content-area"><span className=" pre-title       wow fadeInUp " data-wow-delay=".2s">Resources</span>
          <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">Awesome <span className="hollow-text">Resources</span></h2>
        </div>
        <div className=" cta-area   wow fadeInUp" data-wow-delay=".8s"><a className="cta-btn btn-solid    " href="portfolio-grid.html">see more <i className="bi bi-arrow-right icon " /></a></div>
      </div>
      <div className="portfolio-wrapper  ">
        {/*a menu of links to show the photos users needs   */}
        <ul className="portfolio-btn-list wow fadeInUp" data-wow-delay=".2s">
          <li className="portfolio-btn active " data-filter="*">All</li>
          <li className="portfolio-btn        " data-filter=".mobile">mobile apps</li>
          <li className="portfolio-btn        " data-filter=".web">cloud</li>
          <li className="portfolio-btn        " data-filter=".data">data analaysis</li>
          <li className="portfolio-btn        " data-filter=".hosting">hosting</li>
        </ul>
        <div className="portfolio-group wow fadeIn" data-wow-delay=".4s">
          <div className="row ">
            <div className="col-12  col-md-6  col-lg-4  portfolio-item mobile ">
              <div className="item   "><a className="portfolio-img-link" href="portfolio-single.html"><img className="portfolio-img   img-fluid " loading="lazy" src="/assets/assets/images/portfolio/1.jpg" alt="portfolio item photo" /></a>
                <div className="item-info ">
                  <h3 className="item-title">mobile apps</h3><i className="bi bi-arrow-right icon " />
                </div>
              </div>
            </div>
            <div className="col-12  col-md-6  col-lg-4  portfolio-item web  ">
              <div className="item   "><a className="portfolio-img-link" href="portfolio-single.html"><img className="portfolio-img   img-fluid " loading="lazy" src="/assets/assets/images/portfolio/2.jpg" alt="portfolio item photo" /></a>
                <div className="item-info ">
                  <h3 className="item-title">cloud</h3><i className="bi bi-arrow-right icon " />
                </div>
              </div>
            </div>
            <div className="col-12  col-md-6  col-lg-4  portfolio-item data ">
              <div className="item   "><a className="portfolio-img-link" href="portfolio-single.html"><img className="portfolio-img   img-fluid " loading="lazy" src="/assets/assets/images/portfolio/3.jpg" alt="portfolio item photo" /></a>
                <div className="item-info ">
                  <h3 className="item-title">data analaysis</h3><i className="bi bi-arrow-right icon " />
                </div>
              </div>
            </div>
            <div className="col-12  col-md-6  col-lg-4  portfolio-item mobile ">
              <div className="item   "><a className="portfolio-img-link" href="portfolio-single.html"><img className="portfolio-img   img-fluid " loading="lazy" src="/assets/assets/images/portfolio/4.jpg" alt="portfolio item photo" /></a>
                <div className="item-info ">
                  <h3 className="item-title">hosting</h3><i className="bi bi-arrow-right icon " />
                </div>
              </div>
            </div>
            <div className="col-12  col-md-6  col-lg-4  portfolio-item hosting ">
              <div className="item   "><a className="portfolio-img-link" href="portfolio-single.html"><img className="portfolio-img   img-fluid " loading="lazy" src="/assets/assets/images/portfolio/5.jpg" alt="portfolio item photo" /></a>
                <div className="item-info ">
                  <h3 className="item-title">SEO</h3><i className="bi bi-arrow-right icon " />
                </div>
              </div>
            </div>
            <div className="col-12  col-md-6  col-lg-4  portfolio-item mobile">
              <div className="item   "><a className="portfolio-img-link" href="portfolio-single.html"><img className="portfolio-img   img-fluid " loading="lazy" src="/assets/assets/images/portfolio/6.jpg" alt="portfolio item photo" /></a>
                <div className="item-info ">
                  <h3 className="item-title">other category</h3><i className="bi bi-arrow-right icon " />
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
  )
}
