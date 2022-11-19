var request = require('request'); // "Request" library

var client_id = 'c3a1bc45344545d9ad24017816e4bee6'; // Your client id
var client_secret = 'd752018f65aa49a5bd642cdf21e59e78'; // Your secret

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX1YPTAhwehsC/tracks?limit=5',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      let array = []
      body.items.map((item) => {
        array.push([item.track.album.images[0].url, item.track.name, item.track.popularity])
        
      })
      array.sort(function(a, b) {
        return a[2] - b[2];
    });
      console.log(array);
     
    });
  }
});

