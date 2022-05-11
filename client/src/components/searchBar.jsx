import React, { useState, useContext } from "react";
import { getData } from "../api";
import { StorageContext } from "../contexts";
import {
  loadingAction,
  doneAction,
  errorAction,
  noDataAction,
} from "../actions";

export default function Search() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const mainState = useContext(StorageContext);

  const searchBtnClick = () => {
    // mainState.dispatch(loadingAction());

    getData(title, year, type)
      .then((data) => {
        // console.log(title);
        // console.log("data", data);
        if (data) {
          mainState.dispatch(doneAction(data));
        } else {
          mainState.dispatch(noDataAction());
        }

        console.log("get data triggered", data);
      })
      .catch((error) => {
        mainState.dispatch(errorAction());
        console.log(error);
      });
  };
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
            <label className="input-group-text">Type</label>
          </div>
          <select
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}>
            <option value="">Choose...</option>
            <option value="grayscale">grayscale</option>
          </select>
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
            <option value="backgrounds">backgrounds</option>
            <option value="fashion">fashion</option>
            <option value="nature">nature</option>
            <option value="science">science</option>
            <option value="education">education</option>
            <option value="feelings">feelings</option>
            <option value="health">health</option>
            <option value="people">people</option>
            <option value="religion">religion</option>
            <option value="places">places</option>
            <option value="animals">animals</option>
            <option value="industry">industry</option>
            <option value="computer">computer</option>
            <option value="food">food</option>
            <option value="sports">sports</option>
            <option value="transportation">transportation</option>
            <option value="travel">travel</option>
            <option value="buildings">buildings</option>
            <option value="business">business</option>
            <option value="music">music</option>
          </select>
        </div>
      </div>
      console.log(title, year);
    </div>
  );
}
