import { useEffect } from "react";
import { getPost } from "./Api/PostApi";
import Posts from "./components/Posts";
// import "./App.css";

function App() {
  return (
    <>
      <Posts />
    </>
  );
}

export default App;
