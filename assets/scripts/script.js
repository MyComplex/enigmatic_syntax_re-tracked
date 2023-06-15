/* Jason's area */

// var searchButton = document.querySelector("#searchButton");
// var searchText = document.querySelector("#searchText");

// var searchedItem;
// var userSearches;

// // var searchParameters = {
// //     title: // fetch required
// //     artist: // fetch required

// // }

// // var pushToStorage = [];

// // function findCover() {
//     // add fetch here

// // }

// var searches = [];

// searchButton.addEventListener("click", function(event) {
//     event.preventDefault();

//     searches.push(searchText.value);
//     searchText.value = "";

//     localStorage.setItem("search", JSON.stringify(searches));

//     // addSearchHistory();
//     // findCover();
// })

// // function init () {
// //     var searchesList = JSON.parse(localStorage.getItem("search"));
// //     if (searchesList !== null) {
// //         searches = searchesList;
// //     }
// // }

// // function addSearchHistory() {
// //     // save to local storage
// //     console.log(searches);

// //     for (var i = 0; i < searches.length; i++) {
// //         console.log(searches[i]);
// //     }
// //     // userSearches.textContent = searches;
// //     // userSearches is the list of searches to display while searches is an array of them
// // }

// // init();

/* Jason's area */

/* Jackson's area */

//musixmatch track search api query string https://api.musixmatch.com/ws/1.1/track.search?q_track=thunderstruck&apikey=1bea274e43466310a83604d5c9dffd24

var searchInput = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", performSearch);

// function performSearch(event) {
//   event.preventDefault();
//   var searchTerm = searchInput.value;
//   console.log(searchTerm);
//   var apiUrl = `https://api.musixmatch.com/ws/1.1/track.search?q_track=${encodeURIComponent(searchTerm)}&apikey=1bea274e43466310a83604d5c9dffd24`;

//   fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => displayResults(data))
//   .catch((error) => console.log(error));

//   console.log(apiUrl);
// }

function performSearch(event) {
  //testing function
  event.preventDefault();
  var apiUrl = "./assets/json/musixMatch.json";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => displayResults(data))
    .catch((error) => console.log(error));
}

var seeData ="";

function displayResults(data) {
  var resultData = data.message.body.track_list;
  console.log(resultData);
  seeData = resultData;
  var resultsContainer = document.querySelector(".hero-section");
  console.log(resultsContainer);
  var hideHolder = document.querySelector(".hero-section-text");
  console.log(hideHolder);
  hideHolder.style.display = "none";

  for (let i = 0; i < resultData.length; i++) {
    const element = resultData[i];
    var newBox = document.createElement("div");
    newBox.textContent = element.track.track_name;
    resultsContainer.appendChild(newBox);
  }


  // Set content or modify other attributes of the new box element
  // resultsContainer.textContent = resultData;
  // resultsContainer.style.backgroundColor = "lightblue";
  // resultsContainer.style.padding = "10px";

  // Append the new box element to the results container
  // resultsContainer.appendChild(resultsContainer);
}
console.log(seeData);
/* Jackson's area */

/* Lidell's area */

/* Lidell's area */

/* Jesus' area */

/* Jesus' area */
