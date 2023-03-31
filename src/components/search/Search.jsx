import React, { useState } from "react";
export default function Search() {
  const searchData = [
    { id: 1, title: "title1", des: "ahmed" },
    { id: 2, title: "title2", des: "saber" },
    { id: 3, title: "title3", des: "ali" },
    { id: 4, title: "title4", des: "mohamed" },
  ];
  const [query, setQuery] = useState("");
  let error = "";

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredData = searchData.filter((item) => {
    if (!item) {
      error = "there are no items";
      return error;
    } else {
      error = "";
      return (
        item.title.toLowerCase().includes(query.toLowerCase()),
        item.des.toLowerCase().includes(query.toLowerCase())
      );
    }
  });

  return (
    <div className="w-50 mx-auto mb-5">
      <div className="container mt-3">
        <label className="form-label">Search</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={handleInputChange}
        />

        {filteredData.map((item) => (
          <div className="card py-2 my-4">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.des}</p>
            </div>
            <span className="bg-danger">{error}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
