document.getElementById('year').textContent = new Date().getFullYear();

var map = L.map('map').setView([51.0897, 4.3706], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

var marker = L.marker([51.0897, 4.3706]).addTo(map);
marker.bindPopup('<b>Boom, Antwerpen</b><br>Hier ben ik gevestigd!').openPopup();
