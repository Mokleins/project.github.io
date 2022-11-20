import React from 'react';

function Song({item}) {

    console.log(item)

    return (
        <div>
            <img className='image' src={item.track.album.images[0].url} alt={item.track.name}/>
            <h2>{item.track.name}</h2>
            <h3>by {item.track.artists[0].name}</h3>
            <h3>popularity: {item.track.popularity}</h3>
        </div>
    )
}

export default Song;