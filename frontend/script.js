async function callAPI() {
  const response = await fetch(
    "http://localhost:5000/api/hello"
  );
  const data = await response.json();
  document.getElementById("result").innerText =
    data.message + " | " + data.time;
}
