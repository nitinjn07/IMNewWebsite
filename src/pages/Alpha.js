import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Alpha() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      title: "Week 1 - Introduction to Entrepreneurship",
      content: [
        "Understanding the startup ecosystem",
        "Identifying market needs",
        "Define problem statement and potential market size in your country and globally.",
        "Idea Ranking and chances of success meter (ESM Score out of 100)",
        "Introduction to EIM and EIM Network",
      ],
    },
    {
      title: "Week 2 - Business Idea Validation",
      content: [
        "Techniques for validating ideas",
        "Customer interviews and feedback",
        "Identify potential sales and distribution channels.",
        "List out similar businesses, their success and failure patterns",
        "List out the potential impediments with this idea and execution such as founders' knowledge, resources, money, technology exposure, etc.",
      ],
    },
    {
      title: "Week 3 - First Cut of Business Model",
      content: [
        "Introduction to business model canvas",
        "List out the potential competitors and prepare a matrix.",
        "Examples of successful and failed business models",
        "List out 10 potential customers who would pay for your services and create a customer persona.",
        "Fine-tune revenue model for your idea",
        "List out the required budget and resources for MLP and for full-fledged product development.",
      ],
    },
    {
      title: "Week 4 - Finalizing Numbers and Decision Making",
      content: [
        "Recalculate ESM",
        "Create a viable plan to arrange the required budget and resources listed out last week.",
        "Create Potential Roadmap to 100 Crore Revenue and positive EBITDA",
        "Decision time – if you would like to pursue this idea further or drop it right here.",
      ],
    },
  ];

  return (
    <div>
      <section
        className="d-flex align-items-center page-hero inner-page-hero"
        id="page-hero"
      >
        <div
          className="overlay-photo-image-bg parallax"
          data-bg-img="/assets/assets/images/hero/inner-page-hero.jpg"
        />
        <div className="overlay-color" />
        <div className="container">
          <div className="hero-text-area centerd">
            <h1 className="hero-title">Alpha ( Free Plan )</h1>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="breadcrumb-link">
                    <i className="bi bi-house icon" /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Alpha</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq mega-section" id="faq">
        <div className="container">
          <div className="sec-heading centered">
            <div className="content-area">
              <span className="pre-title">Alpha</span>
              <h2 className="title">
                <span className="hollow-text">Alpha Quadrant</span> – 30 days
              </h2>
            </div>
          </div>

          <div className="faq-accordion" id="accordion">
            <div className="row">
              <div className="col-12 col-lg-12">
                {faqItems.map((faq, index) => (
                  <div className="card mb-2" key={index}>
                    <div className="card-header" id={`heading-${index}`}>
                      <h5 className="mb-0 faq-title">
                        <button
                          className={`btn btn-link faq-btn ${
                            openIndex === index ? "" : "collapsed"
                          }`}
                          onClick={() => toggleFaq(index)}
                        >
                          {faq.title}
                        </button>
                      </h5>
                    </div>
                    {openIndex === index && (
                      <div className="card-body">
                        <ul className="faq-answer">
                          {faq.content.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Subscribe Button */}
              <div className="col-md-12 text-center">
                <Link to="/Signup" className="cta-btn btn-solid">
                  Subscribe Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
