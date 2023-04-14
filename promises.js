const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];
let lastActivityTime = null;

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false; 
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const deletedPost = posts.pop();
      if (deletedPost) {
        resolve(`Post '${deletedPost.title}' deleted successfully.`);
      } else {
        reject("Error: No post found to delete.");
      }
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

const newPost = { title: "Post Three", body: "This is post three" };
createPost(newPost)
  .then(() => updateLastUserActivityTime()) 
  .then(() => {
    console.log(`All posts:`);
    getPosts(); 
    console.log(`Last activity time: ${lastActivityTime}`);
  })
  .then(() => deleteLastPost())
  .then((result) => {
    console.log(result);
    console.log(`New posts:`);
    getPosts(); 
  })
  .catch((error) => console.error(error));
