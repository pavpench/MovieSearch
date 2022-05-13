export const getData = (title, keyword, year, type, plot) => {
  return new Promise((resolve, reject) => {
    const url =
      `http://127.0.0.1:3030/?` +
      ((title ? `t=${title}` : "") || (keyword ? `s=${keyword}` : "")) +
      (year ? `&y=${year}` : "") +
      (type ? `&type=${type}` : "") +
      (plot ? `&plot=${plot}` : "");
    console.log(url);

    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              console.log(data);
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(new Error(`response status is ${response.status}`));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
