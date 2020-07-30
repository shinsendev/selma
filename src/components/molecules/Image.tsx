import React, { useState } from "react";

const Image = ({url, alt, noImageUrl}) => {
  // const [imageState, setImageState] = React.useState(<img className='poster' src={url} alt={alt} onError={setError()}/>);
  const [hasErrorState, setHasErrorState] = React.useState(false);
  const [altState, setAltState] = useState(alt);
  const [urlState, setUrlState] = useState(url);

  function setError() {
    if (hasErrorState === false) {
      setHasErrorState(true);
      setAltState('No cover');
      setUrlState(noImageUrl);
    }
  }

  return <img className='poster' src={urlState} alt={altState} onError={setError}/>;
}

export default Image;