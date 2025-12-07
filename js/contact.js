// Jaar automatisch invullen in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Kaart maken voor Boom
var map = L.map('map').setView([51.0897, 4.3706], 13);

// Tegels toevoegen aan de kaart
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

// Marker op Boom zetten
var marker = L.marker([51.0897, 4.3706]).addTo(map);
marker.bindPopup('<b>Boom, Antwerpen</b><br>Hier ben ik gevestigd!').openPopup();
