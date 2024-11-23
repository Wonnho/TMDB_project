import React, { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");
  // const [like, setLike] = useState("Likes");
  const [isLiked, setIsLiked] = useState("false");
  return (
    <>
      <div>Change in Increment:{num}</div>
      <button
        onClick={(num) => {
          setNum((num) => num + 1);
          setNum((num) => num + 1);
          setNum((num) => num + 1);
        }}
      >
        더하기+
      </button>
      <button onClick={() => console.log(num)}>더하기+</button>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>{text}</p>

      {/* <button onClick={(e) => setLike("canceal Likes")}>{like}👍</button> */}
      <button style={{backgroundColor:isLiked?"gray":"magenta"}} onClick={(e) => setIsLiked((prev) => !prev)}>
        {isLiked ? "좋아요취소" : "좋아요"}
      </button>
    </>
  );
}
