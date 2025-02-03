import React from "react";

export default function Webinar() {
  const videos = [
    "https://www.youtube.com/embed/0KCijXWUjj4?si=T19EFqe9SW86Z3FZ",
    "https://www.youtube.com/embed/laIV6TtT8lE?si=XzQ2OkEVa9y84z03",
    "https://www.youtube.com/embed/0vHwBkjtHA0?si=9Al8-SeqfIiHjmkU",
    "https://www.youtube.com/embed/9q1Plohiu24?si=E9kF6NL3zg2LprUo",
    "https://www.youtube.com/embed/oVDOm5RzSdE?si=FrPFDmo02blw57aq",
    "https://www.youtube.com/embed/FP4bcSSe73w?si=s2RVwsfkV3WYhUTP",
  ];

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
                Webinar
              </h1>
              <nav aria-label="breadcrumb ">
                <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" href="#0">
                      <i className="bi bi-house icon " />
                      home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">Webinar</li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        {/* End inner Page hero*/}
        {/* Start  about Section*/}
        <section className="about mega-section" id="about">
          <div className="container">
            <div className="row">
              {videos.map((video, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card bg-dark">
                    <div className="card-header"></div>
                    <div className="card-body">
                      <iframe
                        src={video}
                        width="100%"
                        height={281}
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder={0}
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End  about Section*/}
      </div>
    </>
  );
}
