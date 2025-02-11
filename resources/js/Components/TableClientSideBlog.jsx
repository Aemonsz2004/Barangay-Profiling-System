import { router } from "@inertiajs/react";
import React, { useState } from "react";

// TableHeader//////////////////////////////////////////////////
const TableHeader = ({ headers, onSortColumnChange, sortColumn, sortDirection }) => {
  const handleHeaderClick = (column) => {
    onSortColumnChange(column);
  };

  return (
    <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
      <tr>
        {headers.map((header) => (
          <th
            key={header.column}
            onClick={() => handleHeaderClick(header.column)}
            className="px-4 py-2 cursor-pointer hover:bg-gray-300"
          >
            {header.label} {sortColumn === header.column && <span>{sortDirection === "asc" ? "↑" : "↓"}</span>}
          </th>
        ))}
      </tr>
    </thead>
  );
};

// TABLEBODY///////////////////////////////////////////////////////////
const TableBody = ({ headers, data, currentPage, itemsPerPage, sortColumn, sortDirection, isLoading }) => {


  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const sortedData = [...data].sort((a, b) => {


    const columnA = a[sortColumn];
    const columnB = b[sortColumn];

    if (columnA < columnB) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (columnA > columnB) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  const paginatedData = sortedData.slice(startIdx, endIdx);

  return (
    <tbody className="divide-y divide-gray-200">
      {!isLoading &&
        paginatedData.map((item) => (
          <tr key={item.id} className="bg-white hover:bg-gray-100">
            {headers.map((header) => (
              <td key={header.column} className="px-4 py-2 border">{item[header.column]}</td>
            ))}

            {/* edit bnuttn */}
            <td className="px-4 py-2 border">
              <button
              
              className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700"
              onClick={() =>
              router.visit(`/resident/${item.id}/edit`)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

// PAGINATION/////////////////////////////////////////////////////
const Pagination = ({ currentPage, totalNumberOfPages, handlePageChange }) => {
  const maxVisiblePages = 5;
  const pages = [];
  const [customPageInput, setCustomPageInput] = useState(null);

  for (let i = 1; i <= totalNumberOfPages; i++) {
    if (
      i === 1 ||
      i === totalNumberOfPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pages.push("...");
    }
  }

  const handleCustomPageSubmit = (e) => {
    if (e.key === "Enter") {
      const pageNumber = Number(e.target.value);
      if (pageNumber >= 1 && pageNumber <= totalNumberOfPages) {
        handlePageChange(pageNumber);
      }
      setCustomPageInput(null); // Hide input after selecting a page
    }
  };

  return (
    <div className="flex justify-center items-center mt-4 space-x-2">
      {/* First Button */}
      <button
        className={`px-3 py-1 border rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        « First
      </button>

      {/* Previous Button */}
      <button
        className={`px-3 py-1 border rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹ Prev
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-2">
        {pages.map((page, index) => (
          <div key={index} className="relative">
            {page === "..." ? (
              <button
                className="px-3 py-1 border rounded-md hover:bg-gray-200"
                onClick={() => setCustomPageInput(index)}
              >
                ...
              </button>
            ) : (
              <button
                className={`px-3 py-1 border rounded-md ${currentPage === page ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )}

            {customPageInput === index && (
              <input
                type="number"
                className="absolute text-center z-10 w-[38px] p-0 top-0 left-0 aspect-square border rounded-md "
                placeholder=""
                onKeyDown={handleCustomPageSubmit}
                onBlur={() => setCustomPageInput(null)} // Hide input on blur
                autoFocus
                style={{appearance: "textfield"}} // Hide up/down arrows in number input
              />
            )}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        className={`px-3 py-1 border rounded-md ${currentPage === totalNumberOfPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalNumberOfPages}
      >
        Next ›
      </button>

      {/* Last Button */}
      <button
        className={`px-3 py-1 border rounded-md ${currentPage === totalNumberOfPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
        onClick={() => handlePageChange(totalNumberOfPages)}
        disabled={currentPage === totalNumberOfPages}
      >
        Last »
      </button>
    </div>
  );
};



// TABLE ////////////////////////////////////////////////////////////
const Table = ({ headers, data, isLoading, loadingTag }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortColumn, setSortColumn] = useState(headers[0].column);
  const [sortDirection, setSortDirection] = useState("asc");

  const filteredData = data.filter((item) =>
    headers.some((header) =>
      String(item[header.column])
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    )
  );

  const totalNumberOfPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortColumnChange = (column) => {
    if (sortColumn === column) {
      setSortDirection((prevDirection) => (prevDirection === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span>Show</span>
          <select
            className="border px-6 py-1 rounded-md"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(parseInt(e.target.value, 10));
              setCurrentPage(1);
            }}
          >
            {[5, 10, 25, 50, 100].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span>entries</span>
        </div>

        <input
          className="border px-2 py-1 rounded-md"
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search all columns"
        />

      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <TableHeader
            headers={headers}
            onSortColumnChange={handleSortColumnChange}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
          />
          <TableBody
            headers={headers}
            data={filteredData}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
            isLoading={isLoading}
            loadingTag={loadingTag}
          />
        </table>
      </div>

      {isLoading && <p className="text-center mt-4">{loadingTag}</p>}
      <Pagination currentPage={currentPage} totalNumberOfPages={totalNumberOfPages} handlePageChange={handlePageChange} />
    </div>
  );
};

export default Table;
