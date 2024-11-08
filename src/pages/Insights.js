import React from 'react'
import { useEffect, useState } from 'react';

export default function Insights() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.localhost/incubationmasters.com/WebPanel/Api/GetEvents');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Update data state with fetched data
      } catch (error) {
        setError(error); // Handle any errors
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <>
       <section class="d-flex align-items-center page-hero  inner-page-hero " id="page-hero">
      <div class="overlay-photo-image-bg parallax" data-bg-img="assets/images/hero/inner-page-hero.jpg" data-bg-opacity="1"></div>
      <div class="overlay-color" data-bg-opacity=".75"></div>
      <div class="container">
        <div class="hero-text-area centerd">
          <h1 class="hero-title  wow fadeInUp" data-wow-delay=".2s">Insights </h1>
          <nav aria-label="breadcrumb ">
            <ul class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
              <li class="breadcrumb-item"><a class="breadcrumb-link" href="#0"><i class="bi bi-house icon "></i>home</a></li>
              <li class="breadcrumb-item active">Insights</li>
            </ul>
          </nav>
        </div>
      </div>
      </section>
    <section className="services services-boxed mega-section  " id="services">
    <div className="container">
      <div className="sec-heading  ">
        <div className="content-area"><span className="pre-title wow fadeInUp " data-wow-delay=".2s">All Events</span>
          <h2 className="title  wow fadeInUp" data-wow-delay=".4s"><span className="hollow-text">Insights</span> IM
          </h2>
         </div>
        
      </div>
        <div className="row gx-4 gy-4 services-row ">
            {data.data.map((item) => (
            
        <div className="col-12 col-md-6  col-lg-4 mx-auto ">
          {/*Start First service box*/}
          <div className="box service-box  h-100 wow fadeInUp reveal-start" data-wow-offset={0} data-wow-delay=".1s">
            
                  <img src={"https://www.localhost/incubationmasters.com/WebPanel/uploads/event/" + item.event_img} style={{width:'100%',height:'250px'}} />
                  
            <div className="service-content">
              <h3 className="service-title py-2">{item.event_name}</h3>
                  <p className="service-text">{item.event_short.substring(1,100)+"[...]"}</p>
            </div>
          </div>
          {/* End First service box   */}
            </div>
          ))}
       
      </div>
    </div>
  </section>
  </> 
  )
}
