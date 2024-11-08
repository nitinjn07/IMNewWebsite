import React from 'react'

export default function Footer() {
  return (
   <><footer className="page-footer dark-color-footer" id="page-footer">
  <div className="overlay-photo-image-bg" data-bg-img="./assets/assets/images/sections-bg-images/footer-bg-1.jpg" data-bg-opacity=".25" />
  <div className="container">
    <div className="row footer-cols">
      <div className="col-12 col-md-8 col-lg-4  footer-col "><img className="img-fluid footer-logo" loading="lazy" src="./assets/assets/images/logo/logo-colored.png" alt="logo" />
        <div className="footer-col-content-wrapper">
         
        </div>
        <div className="form-area ">
          <div className="mailchimp-form ">
            <form className="one-field-form" method="post" action="#0">
              <div className="field-group ">
                <label className="email-label" htmlFor="email-input"> Subscribe to our news letter</label>
                <input className="email-input " type="email" defaultValue name="EMAIL" id="email-input" placeholder="Email Address" autoComplete="off" />
                <div className="cta-area">
                  <input className="btn-solid subscribe-btn" type="submit" defaultValue="Subscribe" name="subscribe" />
                </div>
              </div><span className="email-notice">*we will not share your personal info</span>
            </form>
          </div>
        </div>
      </div>
      <div className="col-6 col-lg-2  footer-col ">
        <h2 className=" footer-col-title    ">useful links</h2>
        <div className="footer-col-content-wrapper">
          <ul className="footer-menu ">
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">About Us</a>
            </li>
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">Insights</a>
            </li>
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">Career</a>
            </li>
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">Resources</a>
                </li>
                <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-6 col-lg-2 footer-col ">
        <h2 className=" footer-col-title    ">Resources</h2>
        <div className="footer-col-content-wrapper">
          <ul className="footer-menu">
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">FDI</a>
            </li>
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">FDI CRM</a>
            </li>
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">Trade Intelligence Plateform</a>
            </li>
            <li className="footer-menu-item"><i className="bi bi-arrow-right icon " /><a className="footer-menu-link" href="#0">FDI Intelligence Plateform</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-12     col-lg-4 footer-col ">
        <h2 className=" footer-col-title    ">contact information</h2>
        <div className="footer-col-content-wrapper">
          <div className="contact-info-card"><i className="bi bi-envelope icon" /><a className="text-lowercase  info" href="mailto:info@incubationmasters.com">info@incubationmasters.com</a></div>
          <div className="contact-info-card"><i className="bi bi-geo-alt icon" /><span className="text-lowercase  info">007, 8th floor, Bansal One Bhopal Madhya Pradesh, India</span></div>
          <div className="contact-info-card"><i className="bi bi-phone icon" /><a className="info" href="tel:+9107552992942">0755-299-2942</a></div>
          <div className="contact-info-card">
            <div className="social-icons">
              <div className="sc-wrapper dir-row sc-size-32">
                <ul className="sc-list">
                  <li className="sc-item " title="Facebook"><a className="sc-link" href="https://www.facebook.com/IncubationMasters/" title="social media icon"><i className="fab fa-facebook-f sc-icon" /></a></li>
                  <li className="sc-item " title="youtube"><a className="sc-link" href="https://www.linkedin.com/company/incubation-masters/" title="social media icon"><i className="fab fa-linkedin sc-icon" /></a></li>
                  <li className="sc-item " title="instagram"><a className="sc-link" href="https://www.instagram.com/incubationmasters/" title="social media icon"><i className="fab fa-instagram sc-icon" /></a></li>
                  <li className="sc-item " title="X"><a className="sc-link" href="https://twitter.com/IncubationMS/" title="social media icon"><i className="fab fa-x-twitter sc-icon" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyrights ">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-start">
          <p className="creadits">
            © 2024
            Created by:
            <a className="link" href="#0">IncubationMasters</a>
          </p>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-end">
          <div className="terms-links"><a href="#0">Terms of Use </a>
            | <a href="#0" data-bs-toggle="modal" data-bs-target="#privacyPolicyModal">Privacy Policy.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
</>

  )
}
