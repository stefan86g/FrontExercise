import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"
import "./blog.scss"
  
  const Blog: React.FC = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      axios.get("/db/blogs.json")
        .then((response) => {
          const data = response.data;
          setBlogs(data.blogs);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    if (!blogs) {
      return <div>Loading...</div>;
    }

    return (
      <div className="blog-container">
      <div className="blog-list">
      {blogs.map((blog: any) => (
      <Link to={`/post/${blog.id}`} key={blog.id} className="blog-card">
          <h2>{blog.title}</h2>
          <p>Date: {blog.date}</p>
          <p>{blog.text}</p>
      </Link>
    ))}
      </div>
    </div>
    );
  };
    
    export default Blog;