import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movies } from "../../Data";
import "../../App.css";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    Title: "",
    Images: [],
    Plot: "",
    Genre: "",
  });

  const navigate = useNavigate();
  const HandleSubmit = () => {
    Movies.push(movie);
    setMovie({
      Title: "",
      Images: [],
      Plot: "",
      Genre: "",
    });
    let path = "/";
    navigate(path);
  };

  return (
    <div className="add movie_card">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="control">
          <h1>Add Your Favorite Movie</h1>
        </div>
        <div className="control block-cube block-input">
          <input
            name="Title"
            placeholder="Title"
            type="text"
            onChange={(e) => setMovie({ ...movie, Title: e.target.value })}
          />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            name="Description"
            placeholder=" Movie Description"
            type="Text"
            onChange={(e) => setMovie({ ...movie, Plot: e.target.value })}
          />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            name="Genre"
            placeholder=" Genre"
            type="Text"
            onChange={(e) => setMovie({ ...movie, Genre: e.target.value })}
          />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            placeholder=" Poster URL"
            type="Text"
            multiple
            onChange={(e) => setMovie({ ...movie, Images: [e.target.value] })}
          />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <button
          className="btn block-cube block-cube-hover"
          type="button"
          onClick={HandleSubmit}
        >
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">Add To your List</div>
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
