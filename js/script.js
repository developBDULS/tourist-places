mapboxgl.accessToken = 'pk.eyJ1Ijoiam1hcnRpbmV6Y2wiLCJhIjoiY2xlNGJhM2pyMDFhMjN1bXo5cTlpNDVqbCJ9.IJACRfUErwDT7sWuJ3wMmw';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
    center: [-71.24976442905432, -29.90303496912085], // starting position [lng, lat]
    zoom: 15.773 // starting zoom
});