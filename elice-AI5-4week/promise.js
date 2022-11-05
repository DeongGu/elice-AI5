const promise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("성공");
  } else {
    reject("실패");
  }
})
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  return data.json();
}

const asyncTest = async () => {
  try {
    const test = await fetchData();
    console.log(test);
  } catch (e) {
    console.log(e);
  }
};

asyncTest();

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
