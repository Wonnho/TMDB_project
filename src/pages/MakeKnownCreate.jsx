import React from 'react'

export default function MakeKnownCreate() {
  function handleChange(e) {
    e.preventDefault();

    const inputValue=e.target.value;
    const key=e.target.name;
    data=new FormData(form);
    setFormData({
      ...FormData,
      [key]:inputValue,
    });
  }

  return (
    <div>
      <head>Create</head>
      <form action="">
        <label htmlFor="">제목: 
        <input type="text" name="title"/>
        </label>
        <label htmlFor=""> content
        <textarea name="content" id="content"></textarea>
        </label>
        <button onClick={()=>console.log(formData)}>submit</button>
      </form>
    </div>
  )
}
