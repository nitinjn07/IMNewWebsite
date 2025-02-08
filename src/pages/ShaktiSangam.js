import React, { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Carousel } from "react-bootstrap";
import {
  FaRegHandshake,
  FaLightbulb,
  FaChalkboardTeacher,
  FaStar,
  FaFemale,
  FaBriefcase,
  FaPaintBrush,
  FaUsers,
} from "react-icons/fa";

export default function ShaktiSangam() {
  const districtsMP = [
    "Agar Malwa",
    "Alirajpur",
    "Anuppur",
    "Ashok Nagar",
    "Balaghat",
    "Barwani",
    "Betul",
    "Bhopal",
    "Burhanpur",
    "Chhatarpur",
    "Chhindwara",
    "Damoh",
    "Datia",
    "Dewas",
    "Dhar",
    "Dindori",
    "Guna",
    "Gwalior",
    "Harda",
    "Hoshangabad",
    "Indore",
    "Jabalpur",
    "Jhabua",
    "Katni",
    "Khandwa",
    "Khargone",
    "Mandla",
    "Mandsaur",
    "Morena",
    "Narsinghpur",
    "Neemuch",
    "Panchmahals",
    "Panna",
    "Rewa",
    "Rajgarh",
    "Ratlam",
    "Rewa",
    "Sagar",
    "Satna",
    "Sehore",
    "Seoni",
    "Shahdol",
    "Shivpuri",
    "Singrauli",
    "Tikamgarh",
    "Ujjain",
    "Umaria",
    "Vidisha",
  ];
  const logos = [
    { src: "./../assets/images/slider/1.jpg", alt: "Startup Republic" },
    { src: "./../assets/images/slider/2.jpg", alt: "Im Global" },
    {
      src: "./../assets/images/slider/3.jpg",
      alt: "Jabalpur Incubation Center",
    },
    { src: "./../assets/images/slider/4.jpg", alt: "Radio Mirchi" },

    // Add more logos as needed
  ];
  const events = [
    {
      time: "11:00 AM",
      description:
        "Registration of Participants & Time to announce your Presence",
    },
    {
      time: "11:30 AM",
      description: "Arrival of guests, Enablers and Other Dignitaries",
    },
    {
      time: "11:45 AM",
      description: "Setting up day's agenda",
    },
    {
      time: "12:00 PM",
      description: "Lightening of Lamp",
    },
    {
      time: "12:15 PM",
      description: "Felicitation of Guests & Enablers",
    },
    {
      time: "12:20 PM",
      description: "Keynote address by the Chief Guest",
    },
    {
      time: "12:30 PM",
      description: "Enablers session",
    },
    {
      time: "01:00 PM",
      description: "Panel Discussion",
    },
    {
      time: "01:30 PM",
      description: "Session on Women's Health",
    },
    {
      time: "01:40 PM",
      description: "Session on Work life Balance",
    },
    {
      time: "01:50 PM",
      description: "Words of Gratitude and Way Forward",
    },
    {
      time: "02:00 PM",
      description: "Networking Lunch",
    },
  ];
  const leaders = [
    {
      name: "Mrs. Sadhna Singh",
      designation: "Chief Technology Officer",
      photo: "./../assets/images/Guest/1.png",
    },
    {
      name: "Divyanka Tripathi",
      designation: "VP of Engineering",
      photo: "./../assets/images/Guest/2.png",
    },
    {
      name: "Renuka Shahne",
      designation: "Head of Research",
      photo: "./../assets/images/Guest/3.png",
    },
    {
      name: "Neha Tiwari",
      designation: "Director of Innovation",
      photo: "./../assets/images/Guest/4.png",
    },
    {
      name: "Dr. Leela Joshi",
      designation: "Principal Scientist",
      photo: "./../assets/images/Guest/5.png",
    },
    {
      name: "Kanika Tekriwal",
      designation: "Lead Product Architect",
      photo: "./../assets/images/Guest/6.png",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    mobile: "",
    occupation: "",
    reason: "",
    district: "", // Add this field if you're using it
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const occupationOptions = [
    "Student",
    "Entrepreneur",
    "Corporate Professional",
    "Home Maker",
    "Other",
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation using regular expression
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Mobile validation using regular expression (example for 10-digit numbers)
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    } else if (!mobileRegex.test(formData.mobile.trim())) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.district.trim()) {
      newErrors.district = "City is required";
    }

    if (!formData.occupation) {
      newErrors.occupation = "Please select your occupation";
    }

    if (!formData.reason.trim()) {
      newErrors.reason = "Please share your reason for joining";
    } else if (formData.reason.trim().length < 20) {
      newErrors.reason =
        "Please provide a more detailed reason (minimum 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setErrors({}); // Clear errors after successful submission
      try {
        const response = await fetch(
          "https://app.incubationmasters.com:5000/api/shaktiSangam/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();
        if (response.ok) {
          console.log(data.message); // Log success message
          // Show success message
        } else {
          console.error(data.message); // Log error message
          setErrors({ submit: data.message });
        }
      } catch (error) {
        console.error("Error:", error);
        setErrors({ submit: "Error occurred while submitting the form." });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/50">
        <div className="max-w-md mx-auto p-6 bg-dark rounded-lg shadow-lg">
          <div className="text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">
              Registration Successful!
            </h2>
            <p className="text-gray-200">
              Thank you for registering for Shakti Sangam 2025.
            </p>
            {/* Optional Close Button */}
            <button
              onClick={() => setSubmitted(false)} // Close the modal
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>
          Shakti Sangam 2025 | The Biggest Women's Day Event in Madhya Pradesh
        </title>

        <meta
          name="description"
          content="Shakti Sangam 2025 | The Biggest Women's Day Event in Madhya Pradesh - Celebrating the power, achievements, and spirit of women with inspiring talks, cultural performances, and networking opportunities."
        />

        <meta
          name="keywords"
          content="Shakti Sangam 2025
Women's Day Celebration
Women in Madhya Pradesh
Bhopal Women's Day Event
International Women's Day 
Shakti Sangam Event"
        />
      </Helmet>
      <div>
        <div className="container">
          <div
            className="row d-flex align-items-center page-hero  inner-page-hero"
            id="first"
          >
            <div className="col-md-5 col-6 pt-5">
              <img
                src="./../assets/images/logo_shakti_sangam.png"
                className="img-fluid"
              />
            </div>
            <div className="col-md-7 col-6">
              <img src="./../assets/images/bg.png" className="img-fluid" />
            </div>
            <div className="col-md-12 col-12 text-center">
              <h1>
                Celebrating the power of Women at the Biggest Women's Meet of{" "}
                <br />
                Central India
              </h1>
            </div>
          </div>
          <hr />
          <div className="row mt-5">
            <div className="col-md-8 pt-5">
              <h3>
                <span style={{ color: "#ce2c84" }}>Shakti Sangam 2025 –</span>{" "}
                Breaking Barriers, Building Connections, Empowering Futures!"
              </h3>
              <p>
                Join Shakti Sangam 2025 and get a chance to be inspired by
                successful women, connect with professionals across Madhya
                Pradesh, and grow through workshops and Panel discussions.
                Celebrate women’s achievements, gain valuable insights, and get
                a chance to join the SheRISE club for lifelong empowerment and
                support!
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="./../assets/images/logo_shakti_sangam.png"
                className="img-fluid"
                style={{ width: "60%" }}
              />
            </div>
          </div>
          <hr />
          <div className="row mt-5">
            <div className="col-md-4">
              <img src="./../assets/images/sheriseclublogo.png" />
            </div>
            <div className="col-md-8 pt-5">
              <h3>
                <span style={{ color: "#ce2c84" }}>SheRISE.club</span>{" "}
                Empowering Madhya Pradesh's women to rise together.
              </h3>
              <p>
                Connecting aspiring women with established leaders, SheRISE.club
                provides mentorship, resources, and a supportive community.
                Upskilling and enabling thousands, SheRISE.club unlocks the
                potential of women across Madhya Pradesh. Join SheRISE.club and
                be part of a movement transforming the lives of women in MP.
              </p>
            </div>
          </div>
          <hr />
          <div className="row mt-5">
            <div className="col-md-8 pt-5">
              <h3>
                <span style={{ color: "#ce2c84" }}>
                  Shakti Sangam Awards 2025 –
                </span>{" "}
              </h3>
              <p>
                Empowering Women, Celebrating Excellence! The Shakti Sangam
                Awards 2025 celebrate the extraordinary achievements of women in
                Madhya Pradesh, honoring trailblazers and game-changers who are
                making a significant impact across diverse sectors. These awards
                recognize the dedication, innovation, and leadership of women
                shaping the future of MP, inspiring future generations by
                showcasing the power and potential of women in all fields.
                Shakti Sangam Awards 2025 serve as a tribute to the strength,
                resilience, and excellence of Madhya Pradesh's women,
                highlighting their invaluable contributions to society.
              </p>
            </div>
            <div className="col-md-4">
              <img src="./../assets/images/award.png" />
            </div>
          </div>
          <hr />
          <div className="row mt-5">
            <div className="col-md-12">
              <h2 className="text-2xl font-bold text-center mb-8 text-white">
                Event Schedule - 2 March 2025
              </h2>
              <div className="max-w-2xl mx-auto p-6">
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-24 top-0 bottom-0 w-0.5 bg-pink-400"></div>

                  {/* Timeline Events */}
                  {events.map((event, index) => (
                    <div key={index} className="flex mb-8 relative">
                      {/* Time */}
                      <div className="w-24 pt-1 font-semibold text-right pr-8 text-white">
                        {event.time}
                      </div>

                      {/* Dot */}
                      <div className="absolute left-24 -translate-x-2.5 top-2">
                        <div className="w-5 h-5 rounded-full bg-pink-400 border-4 border-pink-200/20"></div>
                      </div>

                      {/* Description */}
                      <div className="flex-1 ml-12 pt-1">
                        <p className="text-white">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="container mx-auto p-4">
              <h1 className="text-3xl font-bold text-center mb-8 text-purple-600">
                Celebrating Women in Leadership
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leaders.map((leader, index) => (
                  <div
                    key={index}
                    className=" rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 p-6 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="relative w-40 h-40">
                        <img
                          src={leader.photo}
                          alt={leader.name}
                          className="rounded-full w-full h-full object-cover border-4 border-purple-500 p-1"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {leader.name} (*)
                      </h3>
                      {/* <p className="text-purple-600 mt-1">
                        {leader.designation}
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4 pt-5 mt-5">
              <div>
                <div>
                  <img src="./../assets/images/2.jpg" className="img-fluid" />
                  <ul
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.8",
                      color: "white", // White text
                      listStyleType: "none",
                      padding: 0,
                    }}
                  >
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaUsers
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Women Seeking Connection & Inspirations
                    </li>
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaLightbulb
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Aspiring Professionals & Entrepreneurs
                    </li>
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaChalkboardTeacher
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Established Leaders & Professionals
                    </li>
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaStar
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Community & Social Change Advocates
                    </li>
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaFemale
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Women in Business & Industry
                    </li>
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaPaintBrush
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Creative Professionals & Artists
                    </li>
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaRegHandshake
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Members of Self-Help Groups (SHGs)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="max-w-md mx-auto mt-8 p-6 backdrop-blur-sm bg-white/10 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-purple-300 mb-6 text-center">
                  Shakti Sangam 2025 Registration
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-black/20 border rounded-md ${
                        errors.name ? "border-red-500" : "border-purple-400"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400`}
                    />
                    {errors.name && (
                      <div className="flex items-center mt-1 text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-black/20 border rounded-md ${
                        errors.email ? "border-red-500" : "border-purple-400"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400`}
                    />
                    {errors.email && (
                      <div className="flex items-center mt-1 text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                      Mobile
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-black/20 border rounded-md ${
                        errors.mobile ? "border-red-500" : "border-purple-400"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400`}
                    />
                    {errors.mobile && (
                      <div className="flex items-center mt-1 text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.mobile}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                      District
                    </label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-gray-800 border rounded-md ${
                        errors.district ? "border-red-500" : "border-purple-400"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400`}
                    >
                      <option value="" disabled className="text-gray-400">
                        Select a district
                      </option>
                      {districtsMP.map((district, index) => (
                        <option
                          key={index}
                          value={district}
                          className="text-black"
                        >
                          {district}
                        </option>
                      ))}
                    </select>
                    {errors.district && (
                      <div className="flex items-center mt-1 text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.district}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                      Occupation
                    </label>
                    <select
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-black/20 border rounded-md ${
                        errors.occupation
                          ? "border-red-500"
                          : "border-purple-400"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500 text-white`}
                    >
                      <option value="" className="bg-gray-800">
                        Select your occupation
                      </option>
                      {occupationOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="bg-gray-800"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.occupation && (
                      <div className="flex items-center mt-1 text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.occupation}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">
                      What's your reason for joining Shakti Sangam 2025?
                    </label>
                    <textarea
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-3 py-2 bg-black/20 border rounded-md ${
                        errors.reason ? "border-red-500" : "border-purple-400"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400`}
                    />
                    {errors.reason && (
                      <div className="flex items-center mt-1 text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.reason}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-4 pt-5 mt-5">
              <div>
                <div style={{ marginBottom: "40px" }}>
                  <img src="./../assets/images/1.jpg" className="img-fluid" />
                  <ul
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.8",
                      color: "white", // White text
                      listStyleType: "none",
                      padding: 0,
                    }}
                  >
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaUsers
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Be Inspired
                    </li>
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaLightbulb
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Networking Lunch
                    </li>
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaChalkboardTeacher
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Learn & Grow
                    </li>
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaStar
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Celebrate the womanhood
                    </li>
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaFemale
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Empower yourself
                    </li>
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaPaintBrush
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Discover New Opportunities
                    </li>
                    <li
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaRegHandshake
                        style={{ color: "#9b59b6", marginRight: "10px" }}
                      />
                      Lifelong exclusive membership of SheRise club
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="partner-logo-slider bg-gradient-purple-pink py-5">
              <h2 className="text-center text-white mb-4">Our Partners</h2>
              <div className="row">
                {logos.map((logo, index) => (
                  <div key={index} className="col-md-3 col-6 mb-3">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="img-fluid rounded shadow"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr />
          <div className="row mt-5">
            <div className="col-md-6 pt-5">
              <h1>Get Direction to the Venue</h1>
              <h2>Courtyard by Marriott Bhopal</h2>
              <p>
                Dainik Bhaskar Mall, DB City Mall, Zone-I, Arera Hills, Bhopal,
                Madhya Pradesh 462011
              </p>
              <p>
                <i className="fa fa-phone"></i> +91 8319056237
              </p>
              <p>
                <i className="fa fa-envelope"></i> clubsherise@gmail.com
              </p>
            </div>
            <div className="col-md-6">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2795107437873!2d77.42690947601228!3d23.2329137084447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4260c8051079%3A0xa455a4bc62fc4ac2!2sCourtyard%20by%20Marriott%20Bhopal!5e0!3m2!1sen!2sin!4v1738918195982!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
