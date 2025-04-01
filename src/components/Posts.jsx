import React, { useEffect } from "react";
import { getPost } from "../Api/PostApi";

const Posts = () => {
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);
  return (
    <>
      <h1>Hello Post methods</h1>
    </>
  );
};

export default Posts;
