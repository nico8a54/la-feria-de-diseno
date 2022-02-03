mapboxgl.accessToken = 'pk.eyJ1IjoiZ2F2aXJpYS1kZXYiLCJhIjoiY2t5d3R2NXkxMGJ4cjJvbzB5OGhqc3gyOCJ9.-5RBkWoarjGHaVI0iUnd5g';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/gaviria-dev/ckywu4ii9003614oniql2ajbe', // style URL
center: [-75.5763433085143, 6.243131576738486], // starting position [lng, lat]
zoom: 15 // starting zoom
});

// Set marker options.
const marker = new mapboxgl.Marker({
    color: "#3A37E0",
    draggable: true
    }).setLngLat([-75.5763433085143, 6.243131576738486])
    .addTo(map);

map.addControl(new mapboxgl.FullscreenControl());