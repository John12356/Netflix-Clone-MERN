import React, { useContext, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { deleteList, getList } from "../../context/listContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";

const List = () => {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getList(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "Id", width: 250 },
    { field: "title", headerName: "Title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "Type", width: 150 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/lists/" + params.row._id} state={{ list: params.row }}>
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
        rows={lists}
        disableSelectionOnclick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default List;
