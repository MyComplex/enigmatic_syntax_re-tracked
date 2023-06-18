/* GLOBAL VARIABLES */
var apiKey = '1bea274e43466310a83604d5c9dffd24';
var historyContainer = document.getElementById('history-container');
var trackSearchDisplay = document.getElementById('main-container');
var searchText = document.getElementById('search-text');
var searchButton = document.getElementById('search-button');
var sliderContainer = document.getElementById('results');
var trackSearchResultsCardContainer = document.getElementById('results-card-container');
var trackSearchResultsCardContainerPaginator = document.getElementById('results-paginator');

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
/* HIDE APP TITLE & SEARCH BAR */
  trackSearchDisplay.style.display = 'none';
/* CLEAR RESULTS CONTAINER */
  trackSearchResultsCardContainer.innerHTML = "";

/* LOOP THROUGH RESULTS */
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
    trackSearchResultsItem.setAttribute('class', 'card-user-container swiper-slide');

    var trackAlbumArtContainer = document.createElement('div');
    trackAlbumArtContainer.setAttribute('id', trackId + '-art-container');
    trackAlbumArtContainer.setAttribute('class', 'card-user-avatar');

    var trackAlbumArt = document.createElement('img');
    trackAlbumArt.setAttribute('id', trackId + '-album-art');
    trackAlbumArt.setAttribute('src', 'https://via.placeholder.com/30x30');
    trackAlbumArt.setAttribute('alt', albumName + ' cover art.');
    trackAlbumArt.setAttribute('class', 'user-image');

    trackAlbumArtContainer.appendChild(trackAlbumArt);
    
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
    
    var trackTitlesContainer = document.createElement('div');
    trackTitlesContainer.setAttribute('id', trackId + '-track-info-container');
    trackTitlesContainer.setAttribute('class', 'card-user-bio');
    
    var trackTitlesArtist = document.createElement('h4');
    trackTitlesArtist.setAttribute('id', trackId + '-track-artist');
    trackTitlesArtist.setAttribute('class', 'track-artist');
    trackTitlesArtist.textContent = artistName;
    
    var trackTitlesTrack = document.createElement('p');
    trackTitlesTrack.setAttribute('id', trackId + '-track-title');
    trackTitlesTrack.setAttribute('class', 'track-title');
    trackTitlesTrack.textContent = trackName;
    
    trackTitlesContainer.appendChild(trackTitlesArtist);
    trackTitlesContainer.appendChild(trackTitlesTrack);

    trackSearchResultsItem.appendChild(trackTitlesContainer);
    trackSearchResultsItem.appendChild(trackAlbumArtContainer);
    trackSearchResultsItem.appendChild(trackLinksContainer);
    
    trackSearchResultsCardContainer.appendChild(trackSearchResultsItem);
  }

  sliderContainer.style.display = 'block';
}

/* LYRICS FETCH */
function fetchLyrics() {
  var lyricsUrl = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=253912241&apikey=1bea274e43466310a83604d5c9dffd24"

  fetch(lyricsUrl)
    .then((response) => response.json())
    .then((data) => displayModal(data))
}

/* DISPLAY OVERLAY MODAL */
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
