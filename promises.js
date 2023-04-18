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

async function createPostAsync(post) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    posts.push(post);
  } catch (error) {
    throw new Error("Error: Something went wrong");
  }
}

async function deleteLastPostAsync() {
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

async function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

const newPost = { title: "Post Three", body: "This is post three" };
createPostAsync(newPost)
  .then(() => updateLastUserActivityTime())
  .then(() => {
    console.log(`All posts:`);
    getPosts();
    console.log(`Last activity time: ${lastActivityTime}`);
  })
  .then(() => deleteLastPostAsync())
  .then((result) => {
    console.log(result);
    console.log(`New posts:`);
    getPosts();
  })
  .catch((error) => console.error(error));
