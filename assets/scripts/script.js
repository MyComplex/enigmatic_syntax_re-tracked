const basepath;

new Vue({
  el: '#app',
  data() {
    return {
      apikey: '',
      searchOption: '',
      song_id: null,
      song_title: null,
      artist_id: null,
      artist_name: null,
      album_id: null,
      album_title: null,
      genre: null,
      page: null,
      limit: null,
      result: '',
      error: ''
    }
  },
  methods: {
    search: function() {
    	this.error = ''
    	this.result = 'Loading...'
      const axiosConfig = {
        headers: {
          'content-type': 'application/json',
          'x-openapihub-key': this.apikey
        }
      };
      switch(this.searchOption){
      	case 'lyrics':
        	if(!this.song_id) this.song_id = null;
        	console.log(this.song_id);
          console.log(this.song_title);
          console.log(this.artist_name);
        	axiosConfig.params = {
          	song_id: this.song_id,
            song_title: this.song_title,
            artist_name: this.artist_name
          }
        	axios.get(basepath+'/lyrics', axiosConfig)
            .then(res => {
            	let result = ""
            	for(let line of res.data.lyrics){
              	result = result + line + '<br>';
              }
              this.error = ''
              this.result = result
            }).catch(err => {
              this.error = `Error occurred -<br>${err?.response?.data?.message ? err?.response?.data?.message : err}`
              console.log('Error', err?.response?.data?.message ? err?.response?.data?.message : err)
            })
        	break;
      	case 'search-artist':
        	axiosConfig.params = {
            artist_name: this.artist_name,
            genre: this.genre,
            page: this.page,
            limit: this.limit
          }
        	axios.get(basepath+'/lyrics/search-artist', axiosConfig)
            .then(res => {
              this.error = ''
              let result = ''
              for(let index in res.data.available_artists){
              	result += `${Number(index) + 1}. ${res.data.available_artists[index].artist_name}&emsp;[id: ${res.data.available_artists[index].artist_id}]<br>`
              }
              if(result == ''){
              	this.result = 'no available artist'
              }else{
              	this.result = result
              }
            }).catch(err => {
              this.error = `Error occurred -<br>${err?.response?.data?.message ? err?.response?.data?.message : err}`
              console.log('Error', err?.response?.data?.message ? err?.response?.data?.message : err)
            })
        	break;
        case 'search-song':
        	axiosConfig.params = {
            song_title: this.song_title,
            limit: this.limit
          }
        	axios.get(basepath+'/lyrics/search-song', axiosConfig)
            .then(res => {
              this.error = ''
              this.result = 'Loading...'
              let result = ''
              for(let index in res.data.available_songs){
              	result += `${Number(index) + 1}. ${res.data.available_songs[index].song_title} (by ${res.data.available_songs[index].artist_name})&emsp;[id: ${res.data.available_songs[index].song_id}]<br>`
              }
              if(result == ''){
              	this.result = 'no available song'
              }else{
              	this.result = result
              }
             
            }).catch(err => {
              this.error = `Error occurred -<br>${err?.response?.data?.message ? err?.response?.data?.message : err}`
              console.log('Error', err?.response?.data?.message ? err?.response?.data?.message : err)
            })
        	break;
        case 'search-album':
        	axiosConfig.params = {
            album_title: this.album_title,
            limit: this.limit
          }
        	axios.get(basepath+'/lyrics/search-album', axiosConfig)
            .then(res => {
              this.error = ''
              this.result = 'Loading...'
              let result = ''
              for(let index in res.data.available_albums){
              	result += `${Number(index) + 1}. ${res.data.available_albums[index].album_title}(by ${res.data.available_albums[index].artist_name})&emsp;[id: ${res.data.available_albums[index].album_id}]<br>`
              }
              if(result == ''){
              	this.result = 'no available album'
              }else{
              	this.result = result
              }
              
            }).catch(err => {
              this.error = `Error occurred -<br>${err?.response?.data?.message ? err?.response?.data?.message : err}`
              console.log('Error', err?.response?.data?.message ? err?.response?.data?.message : err)
            })
        	break;
        case 'list-by-artist':
        	axiosConfig.params = {
            artist_id: this.artist_id,
            limit: this.limit
          }
        	axios.get(basepath+'/lyrics/list-by-artist', axiosConfig)
            .then(res => {
              this.error = ''
              this.result = 'Loading...'
              let result = ''
              for(let index in res.data.available_songs){
              	result += `${Number(index) + 1}. ${res.data.available_songs[index].song_title}&emsp;[id: ${res.data.available_songs[index].song_id}]<br>`
              }
              this.result = result
            }).catch(err => {
              this.error = `Error occurred -<br>${err?.response?.data?.message ? err?.response?.data?.message : err}`
              console.log('Error', err?.response?.data?.message ? err?.response?.data?.message : err)
            })
        	break;
        case 'list-by-album':
        	axiosConfig.params = {
            album_id: this.album_id,
            limit: this.limit
          }
        	axios.get(basepath+'/lyrics/list-by-album', axiosConfig)
            .then(res => {
              this.error = ''
              this.result = 'Loading...'
              let result = ''
              for(let index in res.data.available_songs){
              	result += `${Number(index) + 1}. ${res.data.available_songs[index].song_title}&emsp;[id: ${res.data.available_songs[index].song_id}]<br>`
              }
              this.result = result
            }).catch(err => {
              this.error = `Error occurred -<br>${err?.response?.data?.message ? err?.response?.data?.message : err}`
              console.log('Error', err?.response?.data?.message ? err?.response?.data?.message : err)
            })
        	break;
        default:
         	this.error = 'Please select a Search Option';
      }
      
    }
  }
})