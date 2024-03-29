export const doneAction = (data) => {
  return {
    type: "DONE",
    payload: data,
  };
};

export const errorAction = () => {
  return {
    type: "ERROR",
  };
};
export const loadingAction = () => {
  return {
    type: "LOADING",
  };
};
export const noDataAction = () => {
  return {
    type: "NO_DATA",
  };
};
export const chooseMovieAction = (idx) => {
  return {
    type: "CHOOSE_IMAGE",
    payload: idx,
  };
};
export const noUserInputAction = () => {
  return {
    type: "NO_USER_INPUT",
  };
};
