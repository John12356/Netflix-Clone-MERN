import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./productList.css";
import { DeleteOutline } from "@mui/icons-material";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovies, getMovies } from "../../context/movieContext/apiCalls";

const ProductList = () => {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovies(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "Id", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="product-list-item">
            <img src={params.row.img} alt="" className="product-list-img" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "limit", headerName: "Limit", width: 120 },
    { field: "isSeries", headerName: "Series", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={"/product/" + params.row._id}
              state={{ movie: params.row }}
            >
              <button className="product-list-edit-bt">Edit</button>
            </Link>
            <DeleteOutline
              className="product-list-del-bt"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productlist">
      <DataGrid
        rows={movies}
        disableSelectionOnclick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default ProductList;
