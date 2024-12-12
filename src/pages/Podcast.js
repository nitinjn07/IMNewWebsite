import React from "react";

export default function Podcast() {
  const videos = [
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fref%3Dsearch%26v%3D1525229908322785%26external_log_id%3D77959402-1b9f-411e-a141-d2f9d5a6bdfe%26q%3Dsatna%2520incubation%2520center&width=500&show_text=false&appId=2042405652802030&height=281",
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fref%3Dsearch%26v%3D882374780105468%26external_log_id%3D77959402-1b9f-411e-a141-d2f9d5a6bdfe%26q%3Dsatna%2520incubation%2520center&width=500&show_text=false&appId=2042405652802030&height=281",
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fref%3Dsearch%26v%3D326416016383006%26external_log_id%3D77959402-1b9f-411e-a141-d2f9d5a6bdfe%26q%3Dsatna%2520incubation%2520center&width=500&show_text=false&appId=2042405652802030&height=283",
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fref%3Dsearch%26v%3D1146737020023721%26external_log_id%3D55d7ca5b-db89-4f5f-a46a-b7ff773b15c8%26q%3Drise%2520-%2520rani%2520laxmi%2520bai%2520incubator%2520for%2520sustainable...&width=500&show_text=false&appId=2042405652802030&height=281",
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fref%3Dsearch%26v%3D406672875147885%26external_log_id%3D55d7ca5b-db89-4f5f-a46a-b7ff773b15c8%26q%3Drise%2520-%2520rani%2520laxmi%2520bai%2520incubator%2520for%2520sustainable...&width=500&show_text=false&appId=2042405652802030&height=281",
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fref%3Dsearch%26v%3D835309858070365%26external_log_id%3D55d7ca5b-db89-4f5f-a46a-b7ff773b15c8%26q%3Drise%2520-%2520rani%2520laxmi%2520bai%2520incubator%2520for%2520sustainable...&width=500&show_text=false&appId=2042405652802030&height=281",
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
                Podcast
              </h1>
              <nav aria-label="breadcrumb ">
                <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" href="#0">
                      <i className="bi bi-house icon " />
                      home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">podcast</li>
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
