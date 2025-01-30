import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { email_id: email, password };

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(`Login successful: Welcome, ${result.user.startup_name}`);
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to login. Please try again.");
    }
  };
  return (
    <>
      <div>
        <section
          className="d-flex align-items-center page-hero  inner-page-hero "
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
              <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">
                Login
              </h1>
              <nav aria-label="breadcrumb ">
                <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" href="#0">
                      <i className="bi bi-house icon " />
                      home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">login</li>
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
              <div class="col-md-10 mx-auto">
                <div className="card border-0" id="signin">
                  <div className="card-header">
                    <Link to="/Login" className="btn btn-solid bg-dark mx-3">
                      Login
                    </Link>
                  </div>
                  <div class="card-body">
                    <div className="text-white">{message}</div>
                    <form onSubmit={handleLogin}>
                      <div className="row">
                        <div class="form-group mb-3 mt-3 col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>

                        <div class="form-group mb-3 mt-3 col-md-6">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="submit"
                            className="btn btn-solid"
                            value="Login"
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
    </>
  );
}
