export const getData = (title, year, type) => {
  return new Promise((resolve, reject) => {
    const url =
      `http://127.0.0.1:3000/?s=${title}` +
      (year ? `&y=${year}` : "") +
      (type ? `&t=${type}` : "");
    console.log(url);

    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
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

export const searchBtnClick = (title, year, type) => {
  getData(title, year, type)
    .then((data) => {
      if (data) {
        console.log("server response:", data.Search);
      } else {
        console.log("no data");
      }

      console.log("get data triggered", data);
    })
    .catch((error) => {
      console.log(error);
    });
};
