import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Gamma() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      title: "Month 1 - Product Development – journey towards PMF",
      content: [
        "Analysing Product Backlog and plan sprints for product launch in the market.",
        "Onboard team, vendors and other resources to complete product development.",
        "Discuss product architecture, roadmap and resource allocation with your mentors.",
        "Understand legal structures and compliance basics",
        "Navigating local regulations",
        "Legal structures and compliance basics",
        "Register a legal entity for your startup and a bank account",
        "Form the advisory board for your startup and organize monthly board meetings",
        "Developing go-to-market strategies",
      ],
    },
    {
      title: "Month 2 - Market Entry Strategies & Customer Acquisition",
      content: [
        "Sales strategies and techniques",
        "Brand Development and Marketing",
        "Building a customer pipeline",
        "List out 100 customers who would use your product.",
        "Redefine pricing strategies",
        "Understand taxation, invoicing, billing, CRM and use software to handle them.",
        "Onboard at least 10 paying customers in this phase.",
      ],
    },
    {
      title: "Month 3 -Team Building and Financial Planning",
      content: [
        "Understanding funding options (VCs, angel investors)",
        "Basics of financial projections and budgeting",
        "Discuss with your other founders and mentors about the need of fundraising",
        "Hiring strategies and best practices",
        "Setting up HR policies and culture",
        "Build a customer relationship management practice at your startup.",
        "Prepare financial projections (revenue and burn) for next few quarters",
        "Calculate vital metrics of your startup including cash runway, churn, burn, EBITDA etc.",
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
            <h1 className="hero-title">Gamma (Paid)</h1>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="breadcrumb-link">
                    <i className="bi bi-house icon" /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Gamma</li>
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
                Gamma - Business Development and MVP Creation
              </span>
              <h2 className="title">
                <span className="hollow-text">
                  Gamma Quarter (Service Charge Applicable) –
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
