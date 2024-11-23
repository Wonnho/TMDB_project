import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import postApi from "../../../api/postApi";

export default function MovieCatetegory() {
  const navigate = useNavigate();
  const { id, } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        console.log("진행중");
        const response = await postApi.getPosts('popular');
        const data = response;

        console.log(data);
        console.log(response);
        setMovies(data);
      } catch (err) {
        // navigate("/not-found", { replace: true });
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, []);

  console.log(movies);
  return (
    <>
      <h2>Cinema Korea</h2>

      <div>
        <h3>{category}</h3>
        <div className="flex">
          {movies.map((movie) => {
            const { id, title, poster_path } = movie;
            return (
              <li key={id}>
                <Link to={`/movies/category/${id}`} state={{ movie }}>
                  <h3>{title}</h3>
                </Link>
                <div>
                  <Link to={`/movies/category/${id}`} state={{ movie }}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      alt=""
                    />
                  </Link>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}
