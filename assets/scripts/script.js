/* Code to run */
/* GLOBAL VARIABLES */
var apiKey = '1bea274e43466310a83604d5c9dffd24';
var historyContainer = document.getElementById('history-container');
var trackSearchDisplay = document.getElementById('main-container');
var searchText = document.getElementById('search-text');
var searchButton = document.getElementById('search-button');
var trackSearchResultsContainer = document.getElementById('results-container');

var searches = localStorage.getItem('searches');
searches = (searches) ? JSON.parse(searches) : [];

/* INITIATE SEARCH */
searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  var trackTitle = searchText.value;
  performSearch(trackTitle);

  // searches.push(searchText.value);

  // localStorage.setItem("searches", JSON.stringify(searches));
});

function performSearch(trackTitle) {
  var trackSearchUrl = `https://api.musixmatch.com/ws/1.1/track.search?q_track=${encodeURIComponent(trackTitle)}&f_has_lyrics=1&f_is_instrumental=0&s_track_rating=desc&apikey=${apiKey}`;

  fetch(trackSearchUrl)
    .then((trackSearchResponse) => trackSearchResponse.json())
    .then((trackSearchData) => displayTrackSearchResults(trackSearchData))
    .catch((error) => console.log(error));
};

function displayTrackSearchResults(trackSearchData) {
  console.log(trackSearchData.message.body.track_list);
  trackSearchDisplay.style.display = 'none';

  trackSearchResultsContainer.innerHTML = "";

  for (let i = 0; i < trackSearchData.message.body.track_list.length; i++) {
    var trackIndex = trackSearchData.message.body.track_list[i];
    var trackId = trackIndex.track.track_id;
    var trackName = trackIndex.track.track_name;
    // var albumId = trackIndex.track.album_id;
    var albumName = trackIndex.track.album_name;
    // var artistId = trackIndex.track.artist_id;
    var artistName = trackIndex.track.artist_name;

    var trackSearchResultsItem = document.createElement('div');
    trackSearchResultsItem.setAttribute('id', trackId + '-container');
    trackSearchResultsItem.setAttribute('class', 'card-user-container');

    var trackAlbumArtContainer = document.createElement('div');
    trackAlbumArtContainer.setAttribute('id', trackId + '-art-container');
    trackAlbumArtContainer.setAttribute('class', 'card-user-avatar');

    var trackAlbumArt = document.createElement('img');
    trackAlbumArt.setAttribute('id', trackId + '-album-art');
    trackAlbumArt.setAttribute('src', 'https://via.placeholder.com/350x350');
    trackAlbumArt.setAttribute('alt', albumName + ' cover art.');
    trackAlbumArt.setAttribute('class', 'user-image');


    trackAlbumArtContainer.appendChild(trackAlbumArt);
    trackSearchResultsItem.appendChild(trackAlbumArtContainer);

    var trackLinksContainer = document.createElement('div');
    trackLinksContainer.setAttribute('id', trackId + '-album-links');
    trackLinksContainer.setAttribute('class', 'card-user-social');

    var trackLinksListContainer = document.createElement('ul');
    trackLinksListContainer.setAttribute('id', trackId + '-album-links-list');
    trackLinksListContainer.setAttribute('class', 'menu');

    var trackLinksListLyrics = document.createElement('li');
    trackLinksListLyrics.setAttribute('id', trackId + '-track-lyrics');
    trackLinksListLyrics.setAttribute('class', 'fa-solid fa-microphone-lines fa-2xl');

    var trackLinksListWatch = document.createElement('li');
    trackLinksListWatch.setAttribute('id', trackId + '-track-watch');
    trackLinksListWatch.setAttribute('class', 'fa-brands fa-youtube fa-2xl');

    var trackLinksListListen = document.createElement('li');
    trackLinksListListen.setAttribute('id', trackId + '-track-listen');
    trackLinksListListen.setAttribute('class', 'fa-brands fa-spotify fa-2xl');

    var trackLinksListBuy = document.createElement('li');
    trackLinksListBuy.setAttribute('id', trackId + '-track-buy');
    trackLinksListBuy.setAttribute('class', 'fa-brands fa-amazon fa-2xl');

    trackLinksListContainer.appendChild(trackLinksListLyrics);
    trackLinksListContainer.appendChild(trackLinksListWatch);
    trackLinksListContainer.appendChild(trackLinksListListen);
    trackLinksListContainer.appendChild(trackLinksListBuy);
    trackLinksContainer.appendChild(trackLinksListContainer);
    trackSearchResultsItem.appendChild(trackLinksContainer);

    var trackTitlesContainer = document.createElement('div');
    trackTitlesContainer.setAttribute('id', trackId + '-track-info-container');
    trackTitlesContainer.setAttribute('class', 'card-user-bio');

    var trackTitlesArtist = document.createElement('h4');
    trackTitlesArtist.setAttribute('id', trackId + '-track-artist');
    trackTitlesArtist.textContent = artistName;

    var trackTitlesTrack = document.createElement('p');
    trackTitlesTrack.setAttribute('id', trackId + '-track-title');
    trackTitlesTrack.textContent = trackName;

    trackTitlesContainer.appendChild(trackTitlesArtist);
    trackTitlesContainer.appendChild(trackTitlesTrack);
    trackSearchResultsItem.appendChild(trackTitlesContainer);

    trackSearchResultsContainer.appendChild(trackSearchResultsItem);
  }

  // '<h4 id="album-artist">AC/DC</h4>' +
  // '<p id="album-track">Thunderstruck</p>' +
  // '<span class="location"><span class="location-icon fa fa-map-marker"></span><span class="location-text">Makkah Al-Mukaramah</span></span>' +
  // '</div>' +
  // '<div class="card-user-button">' +
  // '<a href="#" class="button">FOLLOW</a>' +
  // '</div>'


  // trackSearchData.body.track_list.forEach((result) => {
  //   trackSearchResultsContainer.appendChild(trackSearchResultsItem);
  //   var trackLyricsIcon = document.querySelector('.fa-microphone-lines');
  //   resultItem.textContent = result.title;
  //   resultsContainer.appendChild(resultItem);
  // });


  trackSearchResultsContainer.style.display = 'flex';
}

/* Code to run */

/* Jason's area */
/* Jason's area */

/* Jackson's area */

// var searchInput = document.getElementById("search-input");
// var searchButton = document.getElementById("search-button");
// var resultsContainer = document.getElementById("results-container");

// searchButton.addEventListener("click", performSearch);

// function performSearch(event) {
//     event.preventDefault();
//     var searchTerm = searchInput.value;
//     console.log(searchTerm);
//     var apiUrl = `https://api.publicapis.org/entries=${encodeURIComponent(searchTerm)}`;

//     fetch(apiUrl, {
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => displayResults(data))
//         .catch((error) => console.log(error));

//     console.log(apiUrl);
// }

// function displayResults(data) {
//     resultsContainer.innerHTML = "";

//     data.forEach((result) => {
//         var resultItem = document.createElement("div");
//         resultItem.textContent = result.title;
//         resultsContainer.appendChild(resultItem);
//     });
// }

/* Jackson's area */

// /* Lidell's area */

// const APIController = (function () {

//     const clientId = '07ff8b4538b94722848066ac1547ceb1';
//     const clientSecret = 'e29634d15e1d4ac4bf533209bcc77367';

//     // private methods
//     const _getToken = async () => {

//         const result = await fetch('https://accounts.spotify.com/api/token', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
//             },
//             body: 'grant_type=client_credentials'
//         });

//         const data = await result.json();
//         return data.access_token;
//     }

//     const _getGenres = async (token) => {

//         const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
//             method: 'GET',
//             headers: { 'Authorization': 'Bearer ' + token }
//         });

//         const data = await result.json();
//         return data.categories.items;
//     }

//     const _getPlaylistByGenre = async (token, genreId) => {

//         const limit = 10;

//         const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
//             method: 'GET',
//             headers: { 'Authorization': 'Bearer ' + token }
//         });

//         const data = await result.json();
//         return data.playlists.items;
//     }

//     const _getTracks = async (token, tracksEndPoint) => {

//         const limit = 10;

//         const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
//             method: 'GET',
//             headers: { 'Authorization': 'Bearer ' + token }
//         });

//         const data = await result.json();
//         return data.items;
//     }

//     const _getTrack = async (token, trackEndPoint) => {

//         const result = await fetch(`${trackEndPoint}`, {
//             method: 'GET',
//             headers: { 'Authorization': 'Bearer ' + token }
//         });

//         const data = await result.json();
//         return data;
//     }

//     return {
//         getToken() {
//             return _getToken();
//         },
//         getGenres(token) {
//             return _getGenres(token);
//         },
//         getPlaylistByGenre(token, genreId) {
//             return _getPlaylistByGenre(token, genreId);
//         },
//         getTracks(token, tracksEndPoint) {
//             return _getTracks(token, tracksEndPoint);
//         },
//         getTrack(token, trackEndPoint) {
//             return _getTrack(token, trackEndPoint);
//         }
//     }
// })();


// // UI Module
// const UIController = (function () {

//     //object to hold references to html selectors
//     const DOMElements = {
//         selectGenre: '#select_genre',
//         selectPlaylist: '#select_playlist',
//         buttonSubmit: '#btn_submit',
//         divSongDetail: '#song-detail',
//         hfToken: '#hidden_token',
//         divSonglist: '.song-list'
//     }

//     //public methods
//     return {

//         //method to get input fields
//         inputField() {
//             return {
//                 genre: document.querySelector(DOMElements.selectGenre),
//                 playlist: document.querySelector(DOMElements.selectPlaylist),
//                 tracks: document.querySelector(DOMElements.divSonglist),
//                 submit: document.querySelector(DOMElements.buttonSubmit),
//                 songDetail: document.querySelector(DOMElements.divSongDetail)
//             }
//         },

//         // need methods to create select list option
//         createGenre(text, value) {
//             const html = `<option value="${value}">${text}</option>`;
//             document.querySelector(DOMElements.selectGenre).insertAdjacentHTML('beforeend', html);
//         },

//         createPlaylist(text, value) {
//             const html = `<option value="${value}">${text}</option>`;
//             document.querySelector(DOMElements.selectPlaylist).insertAdjacentHTML('beforeend', html);
//         },

//         // need method to create a track list group item 
//         createTrack(id, name) {
//             const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}</a>`;
//             document.querySelector(DOMElements.divSonglist).insertAdjacentHTML('beforeend', html);
//         },

//         // need method to create the song detail
//         createTrackDetail(img, title, artist) {

//             const detailDiv = document.querySelector(DOMElements.divSongDetail);
//             // any time user clicks a new song, we need to clear out the song detail div
//             detailDiv.innerHTML = '';

//             const html =
//                 `
//             <div class="row col-sm-12 px-0">
//                 <img src="${img}" alt="">        
//             </div>
//             <div class="row col-sm-12 px-0">
//                 <label for="Genre" class="form-label col-sm-12">${title}:</label>
//             </div>
//             <div class="row col-sm-12 px-0">
//                 <label for="artist" class="form-label col-sm-12">By ${artist}:</label>
//             </div> 
//             `;

//             detailDiv.insertAdjacentHTML('beforeend', html)
//         },

//         resetTrackDetail() {
//             this.inputField().songDetail.innerHTML = '';
//         },

//         resetTracks() {
//             this.inputField().tracks.innerHTML = '';
//             this.resetTrackDetail();
//         },

//         resetPlaylist() {
//             this.inputField().playlist.innerHTML = '';
//             this.resetTracks();
//         },

//         storeToken(value) {
//             document.querySelector(DOMElements.hfToken).value = value;
//         },

//         getStoredToken() {
//             return {
//                 token: document.querySelector(DOMElements.hfToken).value
//             }
//         }
//     }

// })();

// const APPController = (function (UICtrl, APICtrl) {

//     // get input field object ref
//     const DOMInputs = UICtrl.inputField();

//     // get genres on page load
//     const loadGenres = async () => {
//         //get the token
//         const token = await APICtrl.getToken();
//         //store the token onto the page
//         UICtrl.storeToken(token);
//         //get the genres
//         const genres = await APICtrl.getGenres(token);
//         //populate our genres select element
//         genres.forEach(element => UICtrl.createGenre(element.name, element.id));
//     }

//     // create genre change event listener
//     DOMInputs.genre.addEventListener('change', async () => {
//         //reset the playlist
//         UICtrl.resetPlaylist();
//         //get the token that's stored on the page
//         const token = UICtrl.getStoredToken().token;
//         // get the genre select field
//         const genreSelect = UICtrl.inputField().genre;
//         // get the genre id associated with the selected genre
//         const genreId = genreSelect.options[genreSelect.selectedIndex].value;
//         // ge the playlist based on a genre
//         const playlist = await APICtrl.getPlaylistByGenre(token, genreId);
//         // create a playlist list item for every playlist returned
//         playlist.forEach(p => UICtrl.createPlaylist(p.name, p.tracks.href));
//     });


//     // create submit button click event listener
//     DOMInputs.submit.addEventListener('click', async (e) => {
//         // prevent page reset
//         e.preventDefault();
//         // clear tracks
//         UICtrl.resetTracks();
//         //get the token
//         const token = UICtrl.getStoredToken().token;
//         // get the playlist field
//         const playlistSelect = UICtrl.inputField().playlist;
//         // get track endpoint based on the selected playlist
//         const tracksEndPoint = playlistSelect.options[playlistSelect.selectedIndex].value;
//         // get the list of tracks
//         const tracks = await APICtrl.getTracks(token, tracksEndPoint);
//         // create a track list item
//         tracks.forEach(el => UICtrl.createTrack(el.track.href, el.track.name))

//     });

//     // create song selection click event listener
//     DOMInputs.tracks.addEventListener('click', async (e) => {
//         // prevent page reset
//         e.preventDefault();
//         UICtrl.resetTrackDetail();
//         // get the token
//         const token = UICtrl.getStoredToken().token;
//         // get the track endpoint
//         const trackEndpoint = e.target.id;
//         //get the track object
//         const track = await APICtrl.getTrack(token, trackEndpoint);
//         // load the track details
//         UICtrl.createTrackDetail(track.album.images[2].url, track.name, track.artists[0].name);
//     });

//     return {
//         init() {
//             console.log('App is starting');
//             loadGenres();
//         }
//     }

// })(UIController, APIController);

// // will need to call a method to load the genres on page load
// APPController.init();
// /* Lidell's area */

/* Jesus' area */

function fetchLyrics() {
  var lyricsUrl = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=253912241&apikey=1bea274e43466310a83604d5c9dffd24"

  fetch(lyricsUrl)
    .then((response) => response.json())
    .then((data) => displayModal(data))
}

/* Modal for handling various displays */
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function displayModal(data) {
  var lyrics = data.message.body.lyrics.lyrics_body;
  // console.log(data.message.body.lyrics.lyrics_body);
  modal.style.display = "block";
  document.getElementById('modalText').textContent = lyrics;
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* Jesus' area */
