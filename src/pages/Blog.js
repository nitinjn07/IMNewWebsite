import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [postsPerPage] = useState(6); // Number of posts per page

  const { t } = useTranslation("");

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await fetch(
          "https://srepublic.in/api/get_recent_post.php"
        );
        const result = await response.json();

        if (result.success) {
          setPosts(result.data);
        } else {
          setError("Failed to fetch recent posts");
        }
      } catch (err) {
        setError("Error fetching posts: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://srepublic.in/api/get_category.php"
        );
        const result = await response.json();

        if (result.success) {
          setCategories(result.data);
        } else {
          setError("Failed to fetch categories");
        }
      } catch (err) {
        setError("Error fetching categories: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://srepublic.in/api/get_post.php");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        console.log("API Response:", result); // Log the response for debugging
        setData(result.data || []); // Access the data array
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch data immediately
    fetchData();

    // Set up a loop to fetch data every 10 seconds
    const interval = setInterval(fetchData, 10000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  // Filter posts based on the search query
  const filteredPosts = data.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); // Update search query on input change
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Update current page
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
            data-bg-img="/./../../assets/assets/./../../assets/assets/images/hero/inner-page-hero.jpg"
            data-bg-opacity={1}
          />
          <div className="overlay-color" data-bg-opacity=".75" />
          <div className="container">
            <div className="hero-text-area centerd">
              <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">
                Blog
              </h1>
              <nav aria-label="breadcrumb ">
                <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" href="#0">
                      <i className="bi bi-house icon " />
                      home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">Blog</li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        <section className="blog blog-home mega-section">
          <div className="container ">
            <div className="row ">
              <div className="col-12 col-lg-8 ">
                <div className="posts-grid">
                  <div className="row">
                    {currentPosts.map((post) => (
                      <div className="col-12 col-lg-6" key={post.id}>
                        <div className="post-box">
                          <a
                            className="post-link"
                            href={`https://srepublic.in/${post.title_slug}`}
                            title={post.title}
                            target="_blank"
                          >
                            <div className="post-img-wrapper">
                              <img
                                className="parallax-img post-img"
                                loading="lazy"
                                src={`https://srepublic.in/${post.image_default}`} // Use default image if no image URL is provided
                                alt={post.title}
                              />
                              <span className="post-date">
                                <span className="day">
                                  {new Date(post.created_at).getDate()}{" "}
                                </span>
                                {new Date(post.created_at).toLocaleString(
                                  "en-US",
                                  {
                                    month: "short",
                                    year: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                          </a>
                          <div className="post-summary">
                            <div className="post-info">
                              <a className="info post-cat" href="#">
                                <i className="bi bi-bookmark icon" />
                                {post.category_name || "Uncategorized"}{" "}
                                {/* Use category if available */}
                              </a>
                              <a className="info post-author" href="#">
                                <i className="bi bi-person icon" />
                                {post.author_name || "Unknown Author"}{" "}
                                {/* Use author if available */}
                              </a>
                            </div>
                            <div className="post-text">
                              <a
                                className="read-more"
                                href={`https://srepublic.in/${post.title_slug}`}
                                title={post.title}
                                target="_blank"
                              >
                                <h2 className="post-title">{post.title}</h2>
                              </a>
                              <p className="post-excerpt">
                                {post.summary || "No description available."}
                              </p>
                              <a
                                className="read-more"
                                href={`https://srepublic.in/${post.title_slug}`}
                                title={post.title}
                                target="_blank"
                              >
                                read more
                                <i className="bi bi-arrow-right icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pagination */}
                <div className="pagination-container">
                  <ul className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li
                        key={index + 1}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="blog-sidebar">
                  {/*search box*/}
                  <div className="search sidebar-box">
                    <form className="search-form" action="#">
                      <input
                        className="search-input"
                        type="search"
                        name="seach_form"
                        placeholder="Search Posts..."
                        value={searchQuery}
                        onChange={handleSearch} // Add onChange handler
                      />
                      <button className="search-btn" type="submit">
                        <i className="bi bi-search icon" />
                      </button>
                    </form>
                  </div>
                  {/*categories box*/}
                  <div className="cats sidebar-box">
                    <h6 className="sidebar-box-title">Categories:</h6>
                    <ul className="sidebar-list cats-list  ">
                      {categories.map((category) => (
                        <li key={category.id} className="cat-item">
                          <a
                            className="cat-link"
                            href={`https://srepublic.in/${category.slug}`}
                            target="_blank"
                          >
                            {category.name}
                            <span className="cat-count">
                              {category.post_count}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/*Recent posts  */}
                  <div className="recent-posts sidebar-box">
                    <h6 className="sidebar-box-title">recent posts: </h6>
                    <ul className="sidebar-list r-posts-list ">
                      {posts.map((post, index) => (
                        <li key={index} className="r-post-item">
                          <a
                            className="r-post-link"
                            href={`/post/${post.title_slug}`}
                          >
                            <div className="r-post-img-wrapper">
                              <img
                                className="r-post-img"
                                loading="lazy"
                                src={`https://srepublic.in/${post.image_small}`}
                                alt={post.title}
                              />
                            </div>
                            <div className="content">
                              <h6 className="r-post-title">{post.title}</h6>
                              <span className="r-post-date">
                                {post.created_at}
                              </span>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
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
