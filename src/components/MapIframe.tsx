import React from "react";

function MapIframe() {

  const iframeStyles:any = {
		width: "80vw", 
		position: "relative", 
		height: "70vh", 
		margin: "0px auto"
	}
  
  return (
    <iframe src="https://data.buzzfeed.com/projects/2019-04-climate-maps/temperature.html" 
        style={iframeStyles}>
    </iframe>
  );
}

export default MapIframe;