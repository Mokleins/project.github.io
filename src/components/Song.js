import React, { useState } from 'react';
import Sound from 'react-sound';

function Song({item}) {

    const [isPlaying, setIsPlaying] = useState(false)

    console.log(item)

    return (
        <div>
            <img className='image' src={item.track.album.images[0].url} alt={item.track.name}/>
            <Sound
                url={item.track.preview_url}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
                playFromPosition={0}
            />
            <h2>{item.track.name}</h2>
            <h3>by {item.track.artists[0].name}</h3>
            <h4>popularity: {item.track.popularity}</h4>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {!isPlaying ? 'Play' : 'Stop'}
            </button>
        </div>
    )
}

export default Song;