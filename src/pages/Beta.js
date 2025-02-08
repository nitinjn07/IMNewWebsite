import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Beta() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      title: "Month 1 - Refining the Business Model",
      content: [
        "Find a co-founder, if you don’t have one yet.",
        "Discuss your business model with two different mentors – Technology and Sales & Marketing.",
        "Take notes and refine business model.",
        "Deep dive into business model elements.",
        "Refine competitive analysis.",
        "Create a tentative product backlog.",
        "Create MLP Sprint backlog.",
        "List out the resources required to complete the MLP.",
        "Prepare for MVP development under the guidance of two dedicated mentors (tech and sales).",
      ],
    },
    {
      title: "Month 2 - Developing a Minimum Loveable Product (MLP)",
      content: [
        "Understand MLP concepts and methodologies with your co-founder.",
        "Onboard required resources to create MLP, including a tech vendor if necessary.",
        "Discuss the MLP sprint backlog with the team.",
        "Decide the roles of product owner, scrum master, and organize daily scrum calls.",
        "Create social media handles, brand identity, and start daily posting.",
        "Document the learnings at each step.",
        "Perform iterative testing and feedback loops.",
      ],
    },
    {
      title: "Month 3 - MLP Launch and Feedback",
      content: [
        "Complete MLP with initial user feedback.",
        "Sign off from founders and mentors for the successful MLP launch and feedback.",
        "Develop a basic branding strategy.",
        "Refine the marketing plan for initial outreach.",
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
            <h1 className="hero-title">Beta (Paid)</h1>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="breadcrumb-link">
                    <i className="bi bi-house icon" /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Beta</li>
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
                Beta - Business Development and MVP Creation
              </span>
              <h2 className="title">
                <span className="hollow-text">
                  Beta Quarter (Service Charge Applicable) –
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
