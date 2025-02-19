function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Kushagra",
        job: "dev",
      });
    }, 3000);
  });
}

const getUserData = async () => {
  try {
    console.log("Fetching user Data....");
    const response = await fetchUserData();
    console.log("User Data successfully fetched");
    console.log("Data is :", response);
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

getUserData();
