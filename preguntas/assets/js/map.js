mapboxgl.accessToken = 'pk.eyJ1IjoiZ2F2aXJpYS1kZXYiLCJhIjoiY2t5d3R2NXkxMGJ4cjJvbzB5OGhqc3gyOCJ9.-5RBkWoarjGHaVI0iUnd5g';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/gaviria-dev/ckywu4ii9003614oniql2ajbe', // style URL
center: [-75.5763433085143, 6.243131576738486], // starting position [lng, lat]
zoom: 16 // starting zoom
});