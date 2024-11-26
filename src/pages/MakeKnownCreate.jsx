import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addWriting } from "../store/slice/makeKnownSlice";
import { useNavigate } from "react-router-dom";
import isLoggedIn from "../log/Logging";
import { login, logout } from "../store/slice/authSlice";
import axios from "axios";
// import { formHandler } from "../utils/formHandler";

export default function MakeKnownCreate() {
  // Move useState to component level
  const [formData, setFormData] = useState({ title: "", content: "" });
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  //합치기
  function handleChange(e) {
    const inputValue = e.target.value;
    const key = e.target.name;
    setFormData({
      ...formData,
      [key]: inputValue,
    });
  }

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn]);
  // setFormData({
  //   ...formData,
  //   [key]: inputValue,
  // });

  const id = Date.now();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    // dispatch(addWriting({ ...formData, id }));
    // navigate(`/makeknown/${id}`);

    const url = "http://localhost:3000/makeknown";
    // const url = "http://localhost:3000/posts";
    async function createMakeKnown() {
      const response = await axios.post(url, formData);
      const data = response.data;
      setFormData(data);
      const id = data.id;
      navigate(`/makeknown/${id}`);
    }
    createMakeKnown();
  }

  return (
    <>
      <form
        // action="https://jsonplaceholder.typicode.com/makeknown"
        onSubmit={handleSubmit}
      >
        <div className="formBox">
        <label htmlFor="title">
          제목:
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            // onChange={formHandler}
          />
        </label>
        </div>
        <div className="formBox">
        <label htmlFor="content">
          content
          <textarea
            name="content"
            id="content"
            value={formData.content}
            onChange={handleChange}
          ></textarea>
        </label></div>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
