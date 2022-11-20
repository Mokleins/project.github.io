
import React, {useState, useEffect} from 'react';

const CLIENT_ID = 'c3a1bc45344545d9ad24017816e4bee6'; // Your client id
const CLIENT_SECRET = 'd752018f65aa49a5bd642cdf21e59e78'; // Your secret

function App() {

    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        //API Access Token
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => setAccessToken(data.access_token))

    }, [])

    useEffect (() => {
        var parameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }
        fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DX1YPTAhwehsC/tracks?limit=5&additional_types=track', parameters)
        .then(response => response.json())
        .then(data => setAlbums(data))
    }, [accessToken])

    console.log(albums)
    

    return (
        <div className="App">
            <header className="App-header">

            </header>
        </div>
    );
}

export default App;

