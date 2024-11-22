import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import postApi from "../../api/postApi";

export default function MovieDetail() {
  const navigate = useNavigate();
  const { id, category } = useParams();
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function fetchPost() {
      try {
        const data = await postApi.getPostById(postId);
        setPosts(data);
      } catch (err) {
        navigate("/not-found", { replace: true });
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, []);

  return (
    <>
      <h2>Cinema Korea</h2>
      return (
      <div>
        <h3>{category}</h3>
        <div className="flex">
          {data.map((post) => {
            const { id, title, poster_path } = post;
            return (
              <li key={id}>
                <h3>{title}</h3>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt=""
                  />
                </div>
              </li>
            );
          })}
        </div>
      </div>
      );
    </>
  );
}
