import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../Api/PostApi";
import "../App.css";

const Posts = () => {
  const [data, setData] = useState([]);
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  // Delete the Card //
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        // console.log(res);
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPosts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="section-post">
      <ol>
        {data.map((curElement) => {
          const { id, body, title } = curElement;
          return (
            <li key={id}>
              <p>Title: {title}</p>
              <p>Body: {body}</p>
              <button>Edit</button>
              <button
                className="btn-delete"
                onClick={() => handleDeletePost(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Posts;
