import React, { useState, useEffect } from 'react';
import SongContainer from './SongContainer';
import SortBy from './SortBy';

const CLIENT_ID = '376ffc6966bf4d979b27e6838b19b7af'; // Your client id
const CLIENT_SECRET = 'e9ed44e1545b443fa49114f9c541d59e'; // Your secret

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    //API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'grant_type=client_credentials&client_id=' +
        CLIENT_ID +
        '&client_secret=' +
        CLIENT_SECRET,
    };
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  useEffect(() => {
    var parameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };
    fetch(
      'https://api.spotify.com/v1/playlists/37i9dQZF1DX1YPTAhwehsC/tracks?limit=100&additional_types=track&fields=items',
      parameters
    )
      .then((response) => response.json())
      .then((data) => setItems(data.items));
  }, [accessToken]);

  console.log(items);

  const sortItems = items?.sort((item1, item2) => {
    if (sort === 'Name') {
      return item1.track.name.localeCompare(item2.track.name);
    } else if (sort === 'Popularity') {
      return item1.track.popularity - item2.track.popularity;
    } else {
      return item1, item2;
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <SortBy sort={sort} setSort={setSort} />
        <SongContainer items={sortItems} />
      </header>
    </div>
  );
}

export default App;
