async function callAPI() {
  const response = await fetch(
    "https://backenddeb-h0fnfbg9esc0f4h3.centralindia-01.azurewebsites.net/api/hello"
  );
  const data = await response.json();
  document.getElementById("result").innerText =
    data.message + " | " + data.time;
}
