var map = L.map('map').setView([-4.925591986122921, -80.69707819504669], 18);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamNhbSIsImEiOiJjbDI1aXRjcHYwNnRiM2JtbGgzejV5NjhpIn0.c1j7n19NgriY2lVk4o3_NQ'
}).addTo(map);



document.getElementById('select-location').addEventListener('change', function(e) {
    let coords = e.target.value.split(",");
    var marker = L.marker(coords).addTo(map);
    console.log(e.type)

    var circle = L.circle(coords, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.1,
        radius: 50
    }).addTo(map);

    marker.bindPopup("Holi esta es tu app -le falta mas trabajo");

    map.flyTo(coords,17)    
})


