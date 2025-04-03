import { useState } from "react";
import { postData } from "../Api/PostApi";

const Form = ({ data, setData }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addPostData = async () => {
    const res = await postData(addData);
    console.log("res", res);

    if ((res.status = 200)) {
      setData([...data, res.data]);
    }
  };

  //   Form submission
  const handleFormSubmit = () => {
    e.preventDefault();
    addPostData();
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            autoComplete="off"
            id="title"
            name="title"
            placeholder="Add Title"
            value={addData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="body"></label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Add Post"
            id="body"
            name="body"
            value={addData.body}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Form;
