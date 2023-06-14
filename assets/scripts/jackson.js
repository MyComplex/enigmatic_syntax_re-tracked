var searchInput = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");
var resultsContainer = document.getElementById("results-container");

searchButton.addEventListener("click", performSearch);

function performSearch(event) {
  event.preventDefault();
  var searchTerm = searchInput.value;
  console.log(searchTerm);
  var apiUrl = `https://api.publicapis.org/entries=${encodeURIComponent(searchTerm)}`;

  fetch(apiUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => displayResults(data))
    .catch((error) => console.log(error));

  console.log(apiUrl);
}

function displayResults(data) {
  resultsContainer.innerHTML = "";

  data.forEach((result) => {
    var resultItem = document.createElement("div");
    resultItem.textContent = result.title;
    resultsContainer.appendChild(resultItem);
  });
}