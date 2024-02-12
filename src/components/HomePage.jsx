import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data";

const HomePage = () => {
  return (
    <div style={{ margin: "10px" }}>
      <div
        className="nav"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          gap: "20px",
        }}
      >
        <h2>Blog Posts</h2>
        <Link to="/about" style={{ textDecoration: "null" }}>
          About
        </Link>
      </div>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}> {post.title}</Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
