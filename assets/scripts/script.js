/* GLOBAL VARIABLES */
var apiKey = '1bea274e43466310a83604d5c9dffd24';
var historyContainer = document.getElementById('history-container');
var searchContainer = document.getElementById('search-container');
var searchText = document.getElementById('search-text');
var searchButton = document.getElementById('search-button');
var resultsContainer = document.getElementById('results-container');
var slideContainer = document.getElementById('slide-container');
var resultsPaginator = document.getElementById('results-paginator');

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
  searchContainer.style.display = 'none';
  /* CLEAR RESULTS CONTAINER */
  slideContainer.innerHTML = "";

  /* LOOP THROUGH RESULTS */
  for (let i = 0; i < trackSearchData.message.body.track_list.length; i++) {
    var resultsObject = trackSearchData.message.body.track_list[i];
    var trackId = resultsObject.track.track_id;
    var trackName = resultsObject.track.track_name;
    var albumId = resultsObject.track.album_id;
    var albumName = resultsObject.track.album_name;
    var artistId = resultsObject.track.artist_id;
    var artistName = resultsObject.track.artist_name;

    /* SLIDE */
    var slide = document.createElement('div');
    slide.setAttribute('id', artistId + '-' + albumId + '-' + trackId);
    slide.setAttribute('class', 'swiper-slide result-slide');

    /* ALBUM ART CONTAINER */
    var albumArtContainer = document.createElement('div');
    albumArtContainer.setAttribute('id', trackId + '-album-art');
    albumArtContainer.setAttribute('class', 'result-slide-img');

    /* ALBUM ART */
    var albumArt = document.createElement('img');
    albumArt.setAttribute('src', 'https://i.scdn.co/image/ab67616d0000b2738399047ff71200928f5b6508');
    albumArt.setAttribute('alt', artistName + ' - ' + albumName + ' cover art.');

    /* APPEND ALBUM ART TO ALBUM ART CONTAINER */
    albumArtContainer.appendChild(albumArt);

    /* APPEND ALBUM ART CONTAINER TO slide CARD */
    slide.appendChild(albumArtContainer);

    /* INFO CONTAINER */
    var infoContainer = document.createElement('div');
    infoContainer.setAttribute('class', 'result-slide-content');

    /* ARTIST */
    var artist = document.createElement('h1');
    artist.setAttribute('class', 'album-artist slide-text');
    artist.textContent = artistName;

    /* APPEND ARTIST TO INFO CONTAINER */
    infoContainer.appendChild(artist);

    /* LINKS CONTAINER */
    var linksContainer = document.createElement('div');
    linksContainer.setAttribute('class', 'result-slide-content-bottom');

    /* TITLE */
    var title = document.createElement('h2');
    title.setAttribute('class', 'track-title slide-text');
    title.textContent = trackName;

    /* APPEND TITLE TO INFO CONTAINER */
    linksContainer.appendChild(title);

    /* LINK LIST */
    var linkList = document.createElement('ul');
    linkList.setAttribute('id', trackId);
    linkList.setAttribute('class', 'option');

    /* LINK LIST ITEMS*/
    var lyrics = document.createElement('li');
    lyrics.setAttribute('id',trackId + ' lyrics');
    lyrics.setAttribute('class', 'fa-solid fa-microphone-lines');

    var video = document.createElement('li');
    video.setAttribute('id',trackId + ' video');
    video.setAttribute('class', 'fa-brands fa-youtube');

    var listen = document.createElement('li');
    listen.setAttribute('id',trackId + ' listen');
    listen.setAttribute('class', 'fa-brands fa-spotify');

    var buy = document.createElement('li');
    buy.setAttribute('id',trackId + ' buy');
    buy.setAttribute('class', 'fa-brands fa-amazon');

    /* APPEND ITEMS TO LIST */
    linkList.appendChild(lyrics);
    linkList.appendChild(video);
    linkList.appendChild(listen);
    linkList.appendChild(buy);

    /* APPEND TO INFO CONTAINER  */
    linksContainer.appendChild(linkList);
    infoContainer.appendChild(linksContainer);
    slide.appendChild(infoContainer);
    slideContainer.appendChild(slide);

  }

  resultsContainer.style.display = 'block';
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


function querySpotify() {
  const clientId = '07ff8b4538b94722848066ac1547ceb1';
  const clientSecret = 'e29634d15e1d4ac4bf533209bcc77367';

}

var ResultsSlider = new Swiper('.results-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});