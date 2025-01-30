import React, { useState } from "react";
import API_URL from "./../common/config";

export default function Alpha() {
  const [form, setForm] = useState({
    startup_name: "",
    email_id: "",
    mobile_no: "",
    country_name: "",
    industry: "",
    stage: "",
    city_name: "",
    startup_idea: "",
    password: "",
    usertype: "alpha", // Default value
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^\d{10}$/; // 10 digit mobile number validation (Indian format)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Password must be at least 8 characters with letters and numbers

  const validateForm = () => {
    const errors = {};

    if (!form.startup_name) errors.startup_name = "Startup name is required";
    if (!emailRegex.test(form.email_id)) errors.email_id = "Invalid email";
    if (!mobileRegex.test(form.mobile_no))
      errors.mobile_no = "Invalid mobile number (10 digits required)";
    if (!form.country_name) errors.country_name = "Country is required";
    if (!form.industry) errors.industry = "Industry is required";
    if (!form.stage) errors.stage = "Stage is required";
    if (!form.city_name) errors.city_name = "City is required";
    if (!form.startup_idea) errors.startup_idea = "Startup idea is required";
    if (!form.usertype) errors.usertype = "User type is required";
    if (!passwordRegex.test(form.password))
      errors.password =
        "Password must be at least 8 characters with letters and numbers";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) return;

    try {
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setForm({
          startup_name: "",
          email_id: "",
          mobile_no: "",
          country_name: "",
          industry: "",
          stage: "",
          city_name: "",
          startup_idea: "",
          password: "",
          usertype: "alpha",
        });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data. Please try again.");
    }
  };

  return (
    <div>
      <section
        className="d-flex align-items-center page-hero inner-page-hero"
        id="page-hero"
      >
        <div
          className="overlay-photo-image-bg parallax"
          data-bg-img="./assets/assets/images/hero/inner-page-hero.jpg"
          data-bg-opacity={1}
        />
        <div className="overlay-color" data-bg-opacity=".75" />
        <div className="container">
          <div className="hero-text-area centerd">
            <h1 className="hero-title wow fadeInUp" data-wow-delay=".2s">
              Signup
            </h1>
            <nav aria-label="breadcrumb ">
              <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li className="breadcrumb-item">
                  <a className="breadcrumb-link" href="#0">
                    <i className="bi bi-house icon " />
                    home
                  </a>
                </li>
                <li className="breadcrumb-item active">signup</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="faq mega-section" id="faq">
        <div className="shape-top-left" />
        <div className="shape-bottom-right" />
        <div className="pattern-top-end-dir" />
        <div className="pattern-bottom-start-dir" />
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="card border-0" id="signup">
                <div className="card-header">
                  <h2 className="text-white text-center">
                    Startup <span style={{ color: "#09aff4" }}>Signup</span>
                  </h2>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group mb-3 mt-3 col-md-6">
                        <input
                          type="text"
                          name="usertype"
                          value="alpha"
                          readOnly
                          hidden
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="startupname"
                          placeholder="Enter Startup Name (*)"
                          name="startup_name"
                          value={form.startup_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.startup_name && errors.startup_name && (
                          <p className="text-danger">{errors.startup_name}</p>
                        )}
                      </div>
                      <div className="form-group mb-3 mt-3 col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email ID (*)"
                          value={form.email_id}
                          onChange={handleChange}
                          name="email_id"
                          onBlur={handleBlur}
                        />
                        {touched.email_id && errors.email_id && (
                          <p className="text-danger">{errors.email_id}</p>
                        )}
                      </div>
                      <div className="form-group mb-3 mt-3 col-md-6">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Enter Mobile No (*)"
                          name="mobile_no"
                          value={form.mobile_no}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.mobile_no && errors.mobile_no && (
                          <p className="text-danger">{errors.mobile_no}</p>
                        )}
                      </div>
                      <div className="form-group mb-3 mt-3 col-md-6">
                        <select
                          className="form-control"
                          placeholder="Country Name (*)"
                          id="country name"
                          value={form.country_name}
                          onChange={handleChange}
                          name="country_name"
                          onBlur={handleBlur}
                        >
                          <option value="">Country Name (*)</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Thailand">Thailand</option>
                        </select>
                        {touched.country_name && errors.country_name && (
                          <p className="text-danger">{errors.country_name}</p>
                        )}
                      </div>
                      <div className="form-group mb-3 mt-3 col-md-6">
                        <select
                          id="industry"
                          className="form-control"
                          name="industry"
                          value={form.industry}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Select Industry (*)</option>
                          <option value="technology">Technology</option>
                          <option value="finance">Finance</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="education">Education</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="retail">Retail</option>
                          <option value="transportation">Transportation</option>
                          <option value="energy">Energy</option>
                          <option value="entertainment">Entertainment</option>
                          <option value="construction">Construction</option>
                          <option value="other">Other</option>
                        </select>
                        {touched.industry && errors.industry && (
                          <p className="text-danger">{errors.industry}</p>
                        )}
                      </div>
                      <div className="form-group mb-3 mt-3 col-md-6">
                        <select
                          id="stage"
                          className="form-control"
                          name="stage"
                          value={form.stage}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Select Stage (*)</option>
                          <option value="ideation">IDEATION</option>
                          <option value="mvp">MVP</option>
                          <option value="pmf">PMF</option>
                          <option value="growth">GROWTH</option>
                        </select>
                        {touched.stage && errors.stage && (
                          <p className="text-danger">{errors.stage}</p>
                        )}
                      </div>
                      <div className="form-group mb-3 mt-3 col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter City Name (*)"
                          value={form.city_name}
                          onChange={handleChange}
                          name="city_name"
                          onBlur={handleBlur}
                        />
                        {touched.city_name && errors.city_name && (
                          <p className="text-danger">{errors.city_name}</p>
                        )}
                      </div>
                      <div className="form-group mb-3 mt-3 col-md-6">
                        <textarea
                          className="form-control"
                          placeholder="Startup Idea (*)"
                          onChange={handleChange}
                          name="startup_idea"
                          onBlur={handleBlur}
                        >
                          {form.startup_idea}
                        </textarea>
                        {touched.startup_idea && errors.startup_idea && (
                          <p className="text-danger">{errors.startup_idea}</p>
                        )}
                      </div>
                      <div className="form-group mb-3 mt-3 col-md-12">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password (*)"
                          value={form.password}
                          onChange={handleChange}
                          name="password"
                          onBlur={handleBlur}
                        />
                        {touched.password && errors.password && (
                          <p className="text-danger">{errors.password}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          className="btn btn-solid"
                          value="Signup Now"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
