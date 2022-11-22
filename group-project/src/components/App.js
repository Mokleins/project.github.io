/* Importing the necessary libraries and components*/
import React, { useState, useEffect } from 'react';
import SongContainer from './SongContainer';
import SortBy from './SortBy';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';

const CLIENT_ID = '376ffc6966bf4d979b27e6838b19b7af'; // Your client id
console.log(process.env.REACT_APP_CLIENT_SECRET);
// const CLIENT_SECRET = 'e9ed44e1545b443fa49114f9c541d59e'; // Your secret

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [items, setItems] = useState([]);
  const [popItems, setPopItems] = useState([]);
  const [latinItmes, setLatinItems] = useState([]);
  const [rockItems, setRockItems] = useState([]);
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
        process.env.REACT_APP_CLIENT_SECRET,
    };
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  /**Fetching the data from hip-hop music 100 songs*/
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

  /**Fetching the data from Pop music 100 songs*/
  useEffect(() => {
    var parameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };
    fetch(
      'https://api.spotify.com/v1/playlists/5sTHqyG2DAwmTCopHXHRdz/tracks?limit=100&additional_types=track&fields=items',
      parameters
    )
      .then((response) => response.json())
      .then((data) => setPopItems(data.items));
  }, [accessToken]);

  /**Fetching the data from Latin music 100 songs*/
  useEffect(() => {
    var parameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };
    fetch(
      'https://api.spotify.com/v1/playlists/37i9dQZF1DXbLMw3ry7d7k/tracks?limit=100&additional_types=track&fields=items',
      parameters
    )
      .then((response) => response.json())
      .then((data) => setLatinItems(data.items));
  }, [accessToken]);

  /**Fetching the data from Classic Rock music 100 songs*/
  useEffect(() => {
    var parameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };
    fetch(
      'https://api.spotify.com/v1/playlists/6TeyryiZ2UEf3CbLXyztFA/tracks?limit=100&additional_types=track&fields=items',
      parameters
    )
      .then((response) => response.json())
      .then((data) => setRockItems(data.items));
  }, [accessToken]);

  function sortItems(items) {
    const sortedItems = items?.sort((item1, item2) => {
      if (sort === 'Name') {
        return item1.track.name.localeCompare(item2.track.name);
      } else if (sort === 'Popularity Ascending') {
        return item1.track.popularity - item2.track.popularity;
      } else if (sort === 'Popularity Descending') {
        return item2.track.popularity - item1.track.popularity;
      } else {
        return item1, item2;
      }
    });
    return sortedItems;
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <SortBy sort={sort} setSort={setSort} />
        <Routes>
          <Route path="/" element={<p>Hola</p>} />
          <Route
            path="Hip-Hop"
            element={
              <>
                <SongContainer items={sortItems(items)} />
              </>
            }
          />
          <Route
            path="Pop"
            element={
              <>
                <SongContainer items={sortItems(popItems)} />
              </>
            }
          />
          <Route
            path="Latin-Music"
            element={
              <>
                <SongContainer items={sortItems(latinItmes)} />
              </>
            }
          />
          <Route
            path="Clasic-Rock"
            element={
              <>
                <SongContainer items={sortItems(rockItems)} />
              </>
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
