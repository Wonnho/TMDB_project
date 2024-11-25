import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWriting } from "../store/slice/makeKnownSlice";
import { useNavigate } from "react-router-dom";

export default function MakeKnownCreate() {
  // Move useState to component level
  const [formData, setFormData] = useState({ title: "", content: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define handler functions at component level
  // function handleTitleChange(e) {
  //   const inputValue = e.target.value;
  //   setFormData({
  //     ...formData,
  //     title: inputValue,
  //   });
  // }

  // function handleContentChange(e) {
  //   const inputValue = e.target.value;
  //   setFormData({
  //     ...formData,
  //     content: inputValue,
  //   });

  //합치기
  function handleChange(e) {
    const inputValue = e.target.value;
    const key = e.target.name;

    setFormData({
      ...formData,
      [key]: inputValue,
    });
  }

  const id = Date.now();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    dispatch(addWriting({ ...formData, id }));
    navigate(`/makeknown/${id}`);
  }

  return (
    <>
      <form
        action="https://jsonplaceholder.typicode.com/makeknown"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">
          제목:
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="content">
          content
          <textarea
            name="content"
            id="content"
            value={formData.content}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
