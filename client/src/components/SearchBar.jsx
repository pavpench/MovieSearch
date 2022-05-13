import { useState, useContext } from "react";
import { getData } from "../api/ApiCommunication";
import Form from "react-bootstrap/Form";
import { StorageContext } from "../contexts";
import {
  doneAction,
  errorAction,
  noDataAction,
  noUserInputAction,
  loadingAction,
} from "../actions/actions";

export default function Search() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [keyWord, setKeyWord] = useState("");

  const mainState = useContext(StorageContext);

  const SearchBtnClick = (title, keyWord, year, type) => {
    if (title || keyWord) {
      mainState.dispatch(loadingAction());
      getData(title, keyWord, year, type)
        .then((data) => {
          if (data.Search) {
            mainState.dispatch(doneAction(data.Search));
          } else if (data.Title) {
            mainState.dispatch(doneAction(data));
          } else {
            mainState.dispatch(noDataAction());
          }
        })
        .catch((error) => {
          mainState.dispatch(errorAction());
          console.log(error);
        });
    } else {
      mainState.dispatch(noUserInputAction());
    }
  };

  return (
    <div className="w-10 p-3">
      <div className="col-12">
        <div>
          <label className="input-group-text">Search by...</label>
          <input
            type="text"
            className="form-control mt-1 mb-1"
            placeholder="Movie title "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="col-12">
        <div>
          <label className="input-group-text">or ...</label>
          <input
            type="text"
            className="form-control mt-1 mb-1"
            placeholder="By Keyword"
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
          />
        </div>
      </div>
      <label className="input-group-text ">Limit search to...</label>
      <div className="col-12 d-flex flex-wrap justify-content-evenly">
        <input
          type="text"
          className="form-control m-1 "
          placeholder="Year of release"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <div className="input-group-prepend m-1">
          <Form.Select onChange={(e) => setType(e.target.value)}>
            <option value="">Category</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </Form.Select>
        </div>
      </div>
      <div className="col-12">
        <div className="d-grid gap2 mt-2">
          <button
            onClick={(e) => SearchBtnClick(title, keyWord, year, type)}
            className="primary"
            type="button"
            size="lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
