import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    why_choose_us: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w.%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    // Why Choose Us validation
    if (!formData.why_choose_us.trim()) {
      newErrors.why_choose_us = "Please provide a reason";
    }

    // Resume validation
    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    } else if (!formData.resume.name.match(/\.(pdf|doc|docx)$/i)) {
      newErrors.resume = "Only PDF, DOC, or DOCX files are allowed";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      window.location.href = "/ThankYou";
      setFormData({
        name: "",
        email: "",
        mobile: "",
        why_choose_us: "",
        resume: null,
      });
      setErrors({});
    } else {
      console.log("Validation errors:", errors);
    }
  };
  return (
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
              Career
            </h1>
            <nav aria-label="breadcrumb ">
              <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li className="breadcrumb-item">
                  <a className="breadcrumb-link" href="#0">
                    <i className="bi bi-house icon " />
                    home
                  </a>
                </li>
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
          <p>
            At IM, we are more than just a business consulting firm; we are a
            community of passionate individuals driven by a shared mission to
            empower businesses globally. We believe in nurturing talent,
            fostering creativity, and providing opportunities for professional
            growth. If you are passionate about innovation, strategic
            consulting, and helping startups thrive, we want to hear from you!
          </p>
          {/* Start first about div*/}
          <div className="content-block  ">
            <form onSubmit={handleSubmit}>
              <div class="row" id="signup">
                <div class="form-group col-md-6 my-2">
                  <label>Name (*)</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                </div>
                <div class="form-group col-md-6 my-2">
                  <label>Email (*)</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                </div>
                <div class="form-group col-md-6 my-2">
                  <label>Mobile (*)</label>
                  <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  {errors.mobile && (
                    <p style={{ color: "red" }}>{errors.mobile}</p>
                  )}
                </div>
                <div class="form-group col-md-6 my-2">
                  <label>Why do you want to work for IM? (*)</label>
                  <input
                    type="text"
                    name="why_choose_us"
                    className="form-control"
                    value={formData.why_choose_us}
                    onChange={handleChange}
                  />
                  {errors.why_choose_us && (
                    <p style={{ color: "red" }}>{errors.why_choose_us}</p>
                  )}
                </div>
                <div class="form-group col-md-12 my-2">
                  <label>Upload Resume (*)</label>
                  <input
                    type="file"
                    name="resume"
                    className="form-control"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                  {errors.resume && (
                    <p style={{ color: "red" }}>{errors.resume}</p>
                  )}
                </div>
                <div class="form-group col-md-12 my-2">
                  <input type="submit" className="btn btn-solid" />
                </div>
              </div>
            </form>
          </div>
          {/*End first about div*/}
        </div>
      </section>
      {/* End  about Section*/}
    </div>
  );
}
