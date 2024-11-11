import React from 'react'

export default function Career() {
  return (
    <div>
    <section className="d-flex align-items-center page-hero  inner-page-hero " id="page-hero">
      <div className="overlay-photo-image-bg parallax" data-bg-img="/assets/assets/images/hero/inner-page-hero.jpg" data-bg-opacity={1} />
      <div className="overlay-color" data-bg-opacity=".75" />
      <div className="container">
        <div className="hero-text-area centerd">
          <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">Career</h1>
          <nav aria-label="breadcrumb ">
            <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
              <li className="breadcrumb-item"><a className="breadcrumb-link" href="#0"><i className="bi bi-house icon " />home</a></li>
              <li className="breadcrumb-item active">Career</li>
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
            <div class="row">
              <div className='col-md-12'>
                
              </div>
           </div>
           
        </div>
        {/*End first about div*/}
      </div>
    </section>
    {/* End  about Section*/}
    
  </div>
  )
}
