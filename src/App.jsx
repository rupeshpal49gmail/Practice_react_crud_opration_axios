import { useEffect } from "react";
import { getPost } from "./Api/PostApi";
// import "./App.css";

function App() {
  console.log(getPost());

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);
  return (
    <>
      <h1>Hello axios</h1>
    </>
  );
}

export default App;
