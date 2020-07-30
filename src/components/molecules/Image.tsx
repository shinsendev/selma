import React, { useState } from "react";

const Image = ({url, alt, noImageUrl}) => {
  const [imageState, setImageState] = useState({url: url, alt: alt, error: false});

  function setError() {
    if (imageState.error === false) {
      setImageState({
        url: noImageUrl,
        alt: 'No image found',
        error: true
      });
    }
  }

  return <img className='poster' src={imageState.url} alt={imageState.alt} onError={setError}/>;
}

export default Image;