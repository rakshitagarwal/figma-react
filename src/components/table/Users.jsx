import React, { useMemo, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/usersSlice.js";
import Table from "./Table.jsx";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import "./Users.css";

const Users = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.users);
  const userData = data ? data.results : null;
  const dataCount = data ? data.count : 0;
  const [sortedData, setSortedData] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchUsers(currentPage + 1));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (userData !== null) {
      if (sortOrder === "asc" || sortOrder === "desc") {
        const sorted = [...userData].sort((a, b) =>
          sortOrder === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
        setSortedData(sorted);
      }
    } else {
      toast.error("Failed to fetch data. Please try again later.");
    }
  }, [userData, sortOrder]);

  const renderSortIndicator = useCallback(
    (columnName) => {
      if (columnName === "name") {
        return sortOrder === "asc" ? " 🔼" : " 🔽";
      }
      return null;
    },
    [sortOrder]
  );

  const handleSort = useCallback((columnName) => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  }, []);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = useMemo(() => {
    if (!searchQuery) return sortedData || userData;
    const query = searchQuery.toLowerCase();
    return (sortedData || userData).filter((user) => {
      return Object.values(user).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(query);
        }
        return false;
      });
    });
  }, [searchQuery, sortedData, userData]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        cell: (info) => {
          if (searchQuery) return Number(info.row.id) + 1;
          return currentPage * itemsPerPage + Number(info.row.id) + 1;
        },
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "name",
        cell: (info) => info.getValue(),
        header: () => (
          <span onClick={() => handleSort("name")}>
            Name {renderSortIndicator("name")}
          </span>
        ),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "height",
        header: () => "Height",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "mass",
        header: () => "Mass",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "hair_color",
        header: () => "Hair",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "skin_color",
        header: () => "Skin",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "eye_color",
        header: () => "Eye",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "gender",
        header: "Gender",
        footer: (props) => props.column.id,
      },
    ],
    [handleSort, renderSortIndicator, currentPage, searchQuery]
  );

  return (
    <>
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <Table
        data={status === "loading" ? [] : filteredData || []}
        columns={columns}
        count={searchQuery ? filteredData.length : dataCount}
      />
      {status !== "loading" && (
        <div style={{ textAlign: "center" }}>
          {!searchQuery ? (
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(dataCount / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              pageClassName={"page-item"}
              previousClassName={"page-item"}
              nextClassName={"page-item"}
              breakClassName={"page-item"}
              disabledClassName={"disabled"}
              pageLinkClassName={"page-link"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              breakLinkClassName={"page-link"}
              forcePage={currentPage}
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default Users;
