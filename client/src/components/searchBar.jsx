import React, { useState } from "react";
import { searchBtnClick } from "../api";

export default function Search() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  //Confirm search
  searchBtnClick(title, year, type);

  return (
    <div className="row">
      <div className="col-12">
        <div className="input-group mb-3 mt-3">
          <div className="input-group-prepend">
            <button
              onClick={searchBtnClick}
              className="btn btn-outline-secondary"
              type="button">
              Search
            </button>
          </div>
          <div>
            <label>Move name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Movie title or keyword"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="input-group mb-3 mt-3">
          <div className="input-group-prepend">
            <label className="input-group-text">Year</label>
            <input
              type="text"
              className="form-control"
              placeholder="Movie title or keyword"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="input-group mb-3 mt-3">
          <div className="input-group-prepend">
            <label className="input-group-text">Category</label>
          </div>
          <select
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}>
            <option value="">Choose...</option>
            <option value="movies">movies</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
          </select>
        </div>
      </div>
    </div>
  );
}
