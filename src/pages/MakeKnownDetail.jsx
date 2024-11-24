import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default function MakeKnownDetail() {
  const { makeId } = useParams();
  // const location = useLocation();
  // const { lists } = location.state;
  // console.log(location.state);

  // const { id, title, content } = location.state.lists;
  const makeknown = useSelector((state) => state.makeknown);
  const [makes, setMakes] = useState();
  useEffect(() => {
    setMakes(makeknown.find((make) => make.id === parseInt(makeId)));
  }, [makeknown]);
  // useEffect(() => {
  //   // Fix 3: Add dependency and null check
  //   if (makeknown) {
  //     setMakes(makeknown.find((make) => make.id === parseInt(makeId)));
  //   }
  // }, [makeknown, makeId]);

  return (
    <div>
      <ul>
        <h3>{makes?.title}</h3>
        <p>{makes?.content}</p>
      </ul>
    </div>
  );
}
