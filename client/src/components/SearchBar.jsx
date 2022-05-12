import { useState, useContext } from "react";
import { getData } from "../api/ApiCommunication";
import Form from "react-bootstrap/Form";
import { StorageContext } from "../contexts";
import { doneAction, errorAction, noDataAction } from "../actions/actions";

export default function Search() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const mainState = useContext(StorageContext);

  const SearchBtnClick = (title, year, type) => {
    // mainState.dispatch(loadingAction());
    getData(title, year, type)
      .then((data) => {
        if (data.Search) {
          mainState.dispatch(doneAction(data.Search));
          console.log("server provided data");
        } else {
          mainState.dispatch(noDataAction(data));
          console.log("no data responding to the request");
        }
      })
      .catch((error) => {
        mainState.dispatch(errorAction());
        console.log(error);
      });
  };

  return (
    <div className="w-50 p-3">
      {console.log(title, year, type)}
      <div className="col-12">
        <div>
          <label className="input-group-text">Movie name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Movie title or keyword"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="col-12">
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
      <div className="col-12">
        <div className="input-group-prepend">
          <label className="input-group-text">Category</label>
          <Form.Select onChange={(e) => setType(e.target.value)}>
            <option value="">Please select type</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </Form.Select>
        </div>
        <div className="d-grid gap2 mt-2">
          <button
            onClick={(e) => SearchBtnClick(title, year, type)}
            variant="primary"
            type="button"
            size="lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
