var map = new L.Map('map');
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/3d56af3a9c9248eb8bca93645a548e76/997/256/{z}/{x}/{y}.png',
    cloudmadeAttrib = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
    cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18, attribution: cloudmadeAttrib});
var london = new L.LatLng(51.505, -0.09); // geographical point (longitude and latitude)
map.setView(london, 13).addLayer(cloudmade);
