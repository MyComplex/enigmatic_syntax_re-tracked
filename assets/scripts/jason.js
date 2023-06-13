

var searchButton = document.querySelector("#searchButton");
var searchText = document.querySelector("#searchText");
var localStorage;

var searchedItem;
var userSearches;

// var searchParameters = {
//     title: // fetch required
//     artist: // fetch required
    
// }

// var pushToStorage = [];

function findCover() {
    // add fetch here

}

var searches = [];

function addSearchHistory() {
    // save to local storage
    searches.push(searchText.value);
    console.log(searches);
    
    for (var i = 0; i < searches.length; i++) {
        console.log(searches[i]);
    }
    // userSearches.textContent = searches;
    // userSearches is the list of searches to display while searches is an array of them
}

searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    userSearches = JSON.stringify(localStorage.setItem("search", searchText.value));
    
    // addSearchHistory();
    // findCover();

})

function init () {
    
    searches = JSON.parse(localStorage.getItem("searches"));

}