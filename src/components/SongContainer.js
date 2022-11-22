import React from 'react';
import Song from './Song';

function SongContainer({ items }) {
  const displayedItems = items?.map((item) => (
    <Song item={item} key={item.track.external_ids.isrc} />
  ));

  return <div className="cards">{displayedItems}</div>;
}

export default SongContainer;
