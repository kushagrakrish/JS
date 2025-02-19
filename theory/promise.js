const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching Data");
      let success = true;
      if (success) {
        resolve("Data fetch Successfully");
      } else {
        reject("Erorr 404 occured");
      }
    }, 3000);
  });
};

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
