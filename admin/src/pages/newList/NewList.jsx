import React, { useContext, useState } from "react";
import "./newlist.css";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { useEffect } from "react";
import { getMovies } from "../../context/movieContext/apiCalls";
import { createList } from "../../context/listContext/apiCalls";

const NewList = () => {
  const [list, setList] = useState(null);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
  const { dispatch } = useContext(ListContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    e.preventDefault();
    setList({ ...list, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    e.preventDefault();
    let contentValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setList({ ...list, [e.target.name]: contentValues });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
  };

  return (
    <div className="newproduct">
      <h1 className="newproduct-title">New List</h1>
      <form className="newproduct-form">
        <div className="form-left">
          <div className="newproduct-item">
            <label htmlFor="">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="New Launched"
              onChange={handleChange}
            />
          </div>
          <div className="newproduct-item">
            <label htmlFor="">Genre</label>
            <input
              type="text"
              id="genre"
              name="genre"
              placeholder="Drama"
              onChange={handleChange}
            />
          </div>
          <div className="newproduct-item">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movies">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
          <div className="newproduct-item">
            <button className="newproduct-bt newlist-bt" onClick={handleSubmit}>
              Create
            </button>
          </div>
        </div>
        <div className="form-right">
          <div className="newproduct-item">
            <label>Content</label>
            <select
              multiple
              name="content"
              style={{ height: "280px" }}
              onChange={handleSelect}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewList;
