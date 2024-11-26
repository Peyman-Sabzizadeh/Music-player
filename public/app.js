// Test sending request to API
fetch("http://localhost:3000/posts/1")
    .then(res => res.json())
    .then(data => console.log(data))