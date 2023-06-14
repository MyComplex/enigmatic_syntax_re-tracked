

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