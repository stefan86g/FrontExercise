import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './post.scss';

interface Post {
  id: string;
  title: string;
  author: string;
  img: string;
  text: string;
}

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/db/posts.json`)
      .then((response) => {
        const data = response.data;
        const foundPost = data.posts.find((post: Post) => post.id === id);
        setPost(foundPost || null);
      })
      .catch((error) => {
        console.error(error);
        setPost(null);
      });
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  const { title, author, img, text } = post;

  return (
    <div className="post-container">
       <button onClick={handleGoBack} className='btn-back'>Back</button>
      <h1 className="post-title">{title}</h1>
      <p className="post-author">Author: {author}</p>
      <img className="post-image" src={img} alt={title} />
      <p className="post-text">{text}</p>
    </div>
  );
};

export default PostPage;
