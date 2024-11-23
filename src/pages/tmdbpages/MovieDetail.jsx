import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import postApi from "../../api/postApi";

export default function MovieDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("테스트");
  console.log(id);
  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await postApi.getDetail(id);
        const data = response.results;
        console.log(data);
        setPosts(data);
      } catch (err) {
        // navigate("/not-found", { replace: true });
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, []);

  return (
      
    <>
      <h2>Cinema Korea</h2>

      <div>
        <div className="flex">
          <li key={id}>
            <h3>{data.title}</h3>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt=""
              />
            </div>
          </li>
        </div>
      </div>
    </>
  );
}
