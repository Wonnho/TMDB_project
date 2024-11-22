import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import postApi from "../../api/postApi";

export default function MovieList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // [now, top, something].forEach(el => postApi.getPosts(el))
    const categories = ["now_playing", "top_rated", "popular"];

    async function fetchData() {
      try {
        const newArray = await Promise.all(
          categories.map(async (category) => {
            const response = await postApi.getPosts(category);
            return { category, data: response.results.slice(0, 3) };
          })
        );

        console.log(newArray);
        setPosts(newArray);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Cinema Korea</h2>
      <ul>
        {posts.map(({ category, data }) => {
          return (
            <div>
              {/* <h3>{category}</h3> */}
              <Link to={`${category}`}>
                <h3>{category}</h3> <span>more view...</span>
              </Link>
              <div className="flex">
                {data.map((post) => {
                  const { id, title, poster_path } = post;
                  return (
                    <li key={id}>
                      <Link to={`/posts/${id}`} state={{ post }}>
                        <h3>{title}</h3>
                      </Link>
                      <div>
                        <Link to={`/posts/${id}`} state={{ post }}>
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
          );
        })}
      </ul>
    </div>
  );
}
