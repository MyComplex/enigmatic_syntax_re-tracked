/* Jason's area */

var searchButton = document.querySelector("#searchButton");
var searchText = document.querySelector("#searchText");
var clearHistory = document.querySelector("#clearHistory");
var searchLi = document.querySelector("#li");
var listItems = document.querySelector("#listItem");

var searches = [];

var searchString = null;

searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    searches.push(searchText.value);
    searchString = searchText.value;
    showOneSearchAtATime();

    searchText.value = "";

    localStorage.setItem("search", JSON.stringify(searches));
    showHistory();
})

clearHistory.addEventListener("click", function(event) {
    localStorage.clear();
    searches = [];
    listItems.innerHTML = "";
})

function showHistory() {
  if (searchLi) {
    searchLi.innerHTML = "";
  }  
}

function showSearchesArrayOnReload() {
  for (var i = 0; i < searches.length; i++) {
    var element = searches[i];
    
    var listContainer = document.getElementById("listItem");
    var listItem = document.createElement("li");

    listItem.setAttribute("id", i);
    listItem.textContent = element;
    listContainer.appendChild(listItem);
  }
}

function showOneSearchAtATime() {
    var element = searchString;

    var listContainer = document.getElementById("listItem");
    var listItem = document.createElement("li");

    listItem.setAttribute("id", 0);
    listItem.textContent = element;
    listContainer.appendChild(listItem);

}

function init () {
    var searchesList = JSON.parse(localStorage.getItem("search"));
    if (searchesList !== null) {
        searches = searchesList;
        showSearchesArrayOnReload(searches);
    }
}

init();







/* Jason's area */

/* Jackson's area */
// var searchInput = document.getElementById("search-input");
// var searchButton = document.getElementById("search-button");
// var resultsContainer = document.getElementById("results-container");

// searchButton.addEventListener("click", performSearch);

// function performSearch(event) {
//   event.preventDefault();
//   var searchTerm = searchInput.value;
//   console.log(searchTerm);
//   var apiUrl = `https://api.publicapis.org/entries=${encodeURIComponent(searchTerm)}`;

//   fetch(apiUrl, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => displayResults(data))
//     .catch((error) => console.log(error));

//   console.log(apiUrl);
// }

// function displayResults(data) {
//   resultsContainer.innerHTML = "";

//   data.forEach((result) => {
//     var resultItem = document.createElement("div");
//     resultItem.textContent = result.title;
//     resultsContainer.appendChild(resultItem);
//   });
// }

/* Jackson's area */

/* Lidell's area */

/* Lidell's area */

/* Jesus' area */

/* Jesus' area */

