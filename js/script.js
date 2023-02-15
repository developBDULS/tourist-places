mapboxgl.accessToken = 'pk.eyJ1Ijoiam1hcnRpbmV6Y2wiLCJhIjoiY2xlNGJhM2pyMDFhMjN1bXo5cTlpNDVqbCJ9.IJACRfUErwDT7sWuJ3wMmw';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
    center: [-71.24976442905432, -29.90303496912085], // starting position [lng, lat]
    zoom: 7 // starting zoom
});

map.on('load', ()=>{
    d3.json("data/places.json", function (p) {

        map.loadImage(
            'media/mapbox-marker-icon-20px-red.png',
            (error, image) => {
                if(error) throw error;
                map.addImage('maker-blue', image);
            }
        );
        places = p;
        //add source
        map.addSource('places',{
            'type': 'geojson',
            'data': places
        });        
        //addLayer
        map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'places',
            'layout': {
                'icon-image': 'maker-blue',
                'icon-size': 0.75
            }
        });
    });
});