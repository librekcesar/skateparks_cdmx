// Mandar llamar la petición de mapa de openstreetmap
var mapa = L.map('map').setView([19.419444, -99.145556],12);
L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: 'Map Data © OpenStreetMap contributors'
}).addTo(mapa);


