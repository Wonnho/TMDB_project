import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function MakeKnownDetail() {
  const { makeId } = useParams();
  // const makeknown = useSelector((state) => state.makeknown);
  const [makes, setMakes] = useState();

  useEffect(() => {
    const url = `http://localhost:3000/makeknown/${makeId}`;
    // const url = `http://localhost:3000/posts/:${makeId}`;
    async function fetchMakeknown() {
      const response = await axios.get(url);
      const data = response.data;
      setMakes(data);
      }
    fetchMakeknown();
  },[]);

  return (
    <div>
      <ul>
        <h3>{makes?.title}</h3>
        <p>{makes?.content}</p>
      </ul>
    </div>
  );
}
