function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post Data Fetched");
    }, 3000);
  });
}

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment Data Fetched");
    }, 2000);
  });
}

const fetchAllBlogData = async () => {
  try {
    console.log("Fetching Data");
    const [postData, commetData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log(postData);
    console.log(commetData);
    console.log("All Data fetched");
  } catch (error) {
    console.log("Error occured");
  }
};

fetchAllBlogData();
