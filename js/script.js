mapboxgl.accessToken = 'pk.eyJ1Ijoiam1hcnRpbmV6Y2wiLCJhIjoiY2xlNGJhM2pyMDFhMjN1bXo5cTlpNDVqbCJ9.IJACRfUErwDT7sWuJ3wMmw';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
    center: [-71.24976442905432, -29.90303496912085], // starting position [lng, lat]
    zoom: 7 // starting zoom
});

map.on('load', ()=>{
    map.loadImage(
        'media/mapbox-marker-icon-20px-red.png',
        (error, image) => {
            if(error) throw error;
            map.addImage('maker-red', image);
        }
    );

    d3.json("data/places.json", function (p) {        
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
                'icon-image': 'maker-red',
                'icon-size': 0.75
            }
        });
    });
});

map.on('click', 'points',(e)=>{
    console.log('works! :)')
    oc = document.getElementById('offcanvasExample')
    let bsoffcanvas = new bootstrap.Offcanvas(oc)
    bsoffcanvas.show()
    
    let data_commune = e.features[0].properties.commune;
    let data_name = e.features[0].properties.name;
    let data_category = e.features[0].properties.category;
    let data_location = e.features[0].properties.location;
    let data_address = e.features[0].properties.address;
    let data_description = e.features[0].properties.description;

    let tag_commune = document.getElementById('commune')
    let tag_name =  document.getElementById('name')
    let tag_category = document.getElementById('category')
    let tag_location = document.getElementById('location')
    let tag_address = document.getElementById('address')
    let tag_description = document.getElementById('description')      

    tag_name.innerHTML = "<b style='font-size:20px'>"+data_name+"</b>";
    tag_commune.innerHTML = "<b>Comuna: </b>"+data_commune;
    tag_category.innerHTML = "<b>Categoría: </b>"+data_category;
    tag_location.innerHTML = "<b>Localidad:</b> "+data_location;
    tag_address.innerHTML = "<b>Dirección:</b> "+data_address; 
    tag_description.innerHTML = "<b>Descripción:</b> "+data_description; 
});

const title_container = document.getElementById('info-container');
const title_value = document.createElement('span');
title_value.innerHTML = "<b>Haz click para más info</b>";
title_container.appendChild(title_value);