import React, { useContext } from "react";
import { StorageContext } from "../contexts";
// import { chooseMovieAction } from "../actions/actions";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

export default function Gallery() {
  const mainState = useContext(StorageContext);

  //   function choosenMovieClick(id) {
  //     mainState.dispatch(chooseMovieAction(id));
  //   }

  let movieFlyer;
  switch (mainState.state.searchStatus) {
    case "done":
      console.log(mainState.state.searchResult);
      if (mainState.state.searchResult.constructor === Array) {
        movieFlyer = mainState.state.searchResult.map((movie, id) => {
          return (
            <Card className="p-1 m-1 w-25 h-10">
              <Card.Img
                className="vh-5"
                variant="top"
                src={movie.Poster}
                alt="No preview available"
              />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Year}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{movie.Type}</small>
              </Card.Footer>
            </Card>
          );
        });
      } else {
        movieFlyer = (
          <Card className="p-1 m-1 w-25 h-10">
            <Card.Img
              className="vh-5"
              variant="top"
              src={mainState.state.searchResult.Poster}
              alt="No preview available"
            />
            <Card.Body>
              <Card.Title>{mainState.state.searchResult.Title}</Card.Title>
              <Card.Text>{mainState.state.searchResult.Year}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                {mainState.state.searchResult.Type}
              </small>
            </Card.Footer>
          </Card>
        );
      }
      break;
    case "loading":
      console.log("case loading");
      movieFlyer = "Loading...";
      break;
    case "no_data":
      console.log("no data");
      movieFlyer = "Oups, nothing found...";
      break;
    case "no_user_input":
      console.log("no input");
      movieFlyer =
        "Please provide either Movie Title or a Key word to search for your favorite movie";
      break;
    default:
      console.log("default");
      movieFlyer = "";
      break;
  }
  return (
    <CardGroup className="p-2 w-90 d-flex justify-content-evenly flex-wrap">
      {movieFlyer}
    </CardGroup>
  );
}
