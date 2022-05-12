import { useState } from "react";
import { SearchBtnClick } from "../api";
import Form from "react-bootstrap/Form";

export default function Search() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  return (
    <div className="row">
      {console.log(title, year, type)}
      <div className="col-12">
        <div className="input-group mb-3 mt-3">
          <div className="input-group-prepend">
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
            <Form.Select onChange={(e) => setType(e.target.value)}>
              <option value="">Please select type</option>
              <option value="movie">Movies</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
            </Form.Select>
          </div>
        </div>
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
  );
}
