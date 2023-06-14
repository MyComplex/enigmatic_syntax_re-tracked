/* Jason's area */

var searchButton = document.querySelector("#searchButton");
var searchText = document.querySelector("#searchText");

var searchedItem;
var userSearches;

// var searchParameters = {
//     title: // fetch required
//     artist: // fetch required
    
// }

// var pushToStorage = [];

// function findCover() {
    // add fetch here

// }

var searches = [];

searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    searches.push(searchText.value);
    searchText.value = "";

    localStorage.setItem("search", JSON.stringify(searches));
    
    // addSearchHistory();
    // findCover();
})

// function init () {
//     var searchesList = JSON.parse(localStorage.getItem("search"));
//     if (searchesList !== null) {
//         searches = searchesList;
//     }
// }

// function addSearchHistory() {
//     // save to local storage
//     console.log(searches);
    
//     for (var i = 0; i < searches.length; i++) {
//         console.log(searches[i]);
//     }
//     // userSearches.textContent = searches;
//     // userSearches is the list of searches to display while searches is an array of them
// }

init();

/* Jason's area */

/* Jackson's area */
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

/* Jackson's area */

/* Lidell's area */

/* Lidell's area */

/* Jesus' area */

/* Jesus' area */

