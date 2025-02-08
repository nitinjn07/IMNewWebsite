import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Sigma() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      title: "Month 1 - Assessing Product Market Fit",
      content: [
        "Establishing metrics for customer acquisition, retention, and revenue growth",
        "Operational efficiency and scaling processes.",
        "Financial modelling for growth.",
        "Constant Customer feedback and constant improvement on the products and services",
        "Developing strong sales funnels and customer journey maps",
        "Developing action plans for product improvements and market expansion",
        "Setting timelines and accountability structures",
      ],
    },
    {
      title: "Month 2 - Scaling Strategies",
      content: [
        "Researching other markets",
        "Identifying scaling opportunities",
        "Key performance indicators (KPIs) for growth",
        "Case studies on successful scaling strategies",
        "Peer accountability sessions to track progress",
        "Identify other regions to expand",
        "Adapting products for other regions’ audiences",
      ],
    },
    {
      title: "Month 3 -Fundraising and Growth Execution",
      content: [
        "Understanding funding options (equity, debt, grants)",
        "Crafting a pitch deck and financial projections",
        "Networking event with potential investors and mentors",
        "Mock pitch sessions with feedback from industry experts",
        "Finalizing pitch decks based on feedback",
        "Final pitch preparation: Tailoring presentations for different audiences",
        "One-on-one coaching sessions with mentors",
        "Investor meeting simulations",
        "Understanding term sheets, deal structures and investment agreements",
        "Negotiation strategies with potential investors",
        "Building relationships with investors and managing follow-ups",
        "Understanding term sheets",
        "Final pitch presentations to a panel of investors",
        "Reflecting on the journey: Lessons learned and next steps",
        "Creating a post-program growth plan with mentor support",
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
            <h1 className="hero-title">Sigma (Paid)</h1>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="breadcrumb-link">
                    <i className="bi bi-house icon" /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Sigma</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="faq mega-section" id="faq">
        <div className="container">
          <div className="sec-heading centered">
            <div className="content-area">
              <span className="pre-title">
                Sigma - Business Development and MVP Creation
              </span>
              <h2 className="title">
                <span className="hollow-text">
                  Sigma Quarter (Service Charge Applicable) –
                </span>{" "}
                90 Days
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
