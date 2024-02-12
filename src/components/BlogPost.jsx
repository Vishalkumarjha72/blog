import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data";
import { useState, useEffect } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const blogpost = blogPosts.find((posts) => posts.id === parseInt(id));
    setPost(blogpost);
  }, [id]);

  if (!post) {
    return <div> Post not found ....</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>

      <Link to="/">Go back </Link>
    </div>
  );
};

export default BlogPost;
