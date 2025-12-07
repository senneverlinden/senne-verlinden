// Jaar automatisch invullen in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Check of Leaflet bestaat
if (typeof L !== 'undefined') {
  var map = L.map('map').setView([51.0897, 4.3706], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);
  var marker = L.marker([51.0897, 4.3706]).addTo(map);
  marker.bindPopup('<b>Boom, Antwerpen</b><br>Hier ben ik gevestigd!').openPopup();
} else {
  console.log('Leaflet niet geladen!');
}
