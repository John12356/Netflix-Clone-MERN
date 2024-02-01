import React, { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import "./newProduct.css";
import storage from "../../firebase";
import {
  getDownloadURL,
  getMetadata,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { createMovies } from "../../context/movieContext/apiCalls";

const NewProduct = () => {
  const { dispatch } = useContext(MovieContext);
  const [movieIp, setMovieIp] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [video, setVideo] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    setMovieIp({ ...movieIp, [e.target.name]: e.target.value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/items/${fileName}`);
      const uploadTask = uploadBytesResumable(
        storageRef,
        item.file,
        getMetadata(storageRef)
      );
      uploadTask.on(
        "stage_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + " % done");
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovieIp((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovies(movieIp, dispatch);
  };

  return (
    <div className="newproduct">
      <h1 className="newproduct-title">New Movie</h1>
      <form className="newproduct-form">
        <div className="newpro-left">
          <div className="newproduct-item">
            <label htmlFor="">Image</label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div className="newproduct-item">
            <label htmlFor="">Title Image</label>
            <input
              type="file"
              id="imgTitle"
              name="imgTitle"
              onChange={(e) => setImgTitle(e.target.files[0])}
            />
          </div>
          <div className="newproduct-item">
            <label htmlFor="">Thumbnail Image</label>
            <input
              type="file"
              id="imgSm"
              name="imgSm"
              onChange={(e) => setImgSm(e.target.files[0])}
            />
          </div>
          <div className="newproduct-item">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="John Wick"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="newproduct-item">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="description"
              name="desc"
              onChange={handleChange}
            />
          </div>
          <div className="newproduct-item">
            <label htmlFor="">Genre</label>
            <input
              type="text"
              placeholder="Action"
              name="genre"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="newpro-right">
          <div className="newproduct-item">
            <label htmlFor="">Year</label>
            <input
              type="text"
              placeholder="2020"
              name="year"
              onChange={handleChange}
            />
          </div>
          <div className="newproduct-item">
            <label htmlFor="">Limit</label>
            <input
              type="text"
              placeholder="16"
              name="limit"
              onChange={handleChange}
            />
          </div>

          <div className="newproduct-item">
            <label htmlFor="">Duration</label>
            <input
              type="text"
              placeholder="136min"
              name="duration"
              onChange={handleChange}
            />
          </div>
          <div className="newproduct-item">
            <label htmlFor="">Is Series</label>
            <select name="isSeries" id="series" onChange={handleChange}>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          <div className="newproduct-item">
            <label htmlFor="">Trailer</label>
            <input
              type="file"
              id="trailer"
              name="trailer"
              onChange={(e) => setTrailer(e.target.files[0])}
            />
          </div>
          <div className="newproduct-item">
            <label htmlFor="">Video</label>
            <input
              type="file"
              id="video"
              name="video"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>
          {uploaded !== 0 ? (
            <button className="newproduct-bt" onClick={handleSubmit}>
              Create
            </button>
          ) : (
            <button className="newproduct-bt" onClick={handleUpload}>
              Upload
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
