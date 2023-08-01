// Mandar llamar la petición de mapa de openstreetmap
var mapa = L.map('map').setView([19.419444, -99.145556],12);
L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: 'Map Data © OpenStreetMap contributors'
}).addTo(mapa);



var watercolor = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
});


var lugares = [
            [19.408780480379935, -99.19931890254458],
            [19.40681757582418, -99.1891588751418],
            [19.401638137389586, -99.08339540212567],
            [19.443490441545933, -99.16593757514131],
            [19.38049230039217, -99.04477257514212],
            [19.361237395159556, -99.04761871748265],
            [19.36120196784169, -99.0475543443921],
            [19.313202305176127, -99.16739051106113],
            [19.319306854989826, -99.1217914751543],
            [19.390786074544373, -99.19633851748246],
            ];
/// variable para llamar a los iconos
var iconoPark = L.icon({
    iconUrl:'img/patine.png',  /////patin.png   park.svg
    iconSize:[34,34]
  })

//codigo con llamada de iconos 

var arregloDeMarcadores = [];
    for (var i=0; i < lugares.length; i++) {
               arregloDeMarcadores[i] = new L.marker(lugares[i], {icon: iconoPark}).addTo(mapa); }

               



///codigo sin llamada de iconos  
/*
var arregloDeMarcadores = [];
for (var i=0; i < lugares.length; i++) {
           arregloDeMarcadores[i] = new L.marker(lugares[i]).addTo(mapa); }*/
/*
arregloDeMarcadores[0].bindPopup('<p>Museo Nacional de las Culturas</p>')
arregloDeMarcadores[1].bindPopup('<p>Museo del Estanquillo</p>')
arregloDeMarcadores[2].bindPopup('<p>Museo Nacional de San Carlos</p>')
arregloDeMarcadores[3].bindPopup('<p>Museo de Arte Popular</p>')
arregloDeMarcadores[4].bindPopup('<p>Museo de la Tortura</p>')*/

/*arregloDeMarcadores[4].bindPopup('<img src = "img/tortura.jpg"><h2>Museo de la Tortura</h2')*/
var popup = L.popup({
    minWidth: 310,
    maxHeight: null
  }).setContent('<a href="https://chapultepec.org.mx/proyecto/skatepark-constituyentes/"><img src = "https://chapultepec.org.mx/wp-content/uploads/2018/11/skate.jpg" width = "300", height="300" ><h2>Skatepark constituyentes</h2> <p>Excelente parque, barandales y bowls. Abierto desde las 7am</p>');

arregloDeMarcadores[0].bindPopup(popup);
/////////////////
var popup2 = L.popup({
  minWidth: 310,
  maxHeight: null
}).setContent('<a href="https://www.cronica.com.mx/notas-es_reinaugurado_skate_park_en_parque_lira-1171132-2020"><img src = "https://images.squarespace-cdn.com/content/v1/5c38da37ec4eb75d5c8c9717/1605049135248-AID3OU20UBKHWEI4Z2EF/Screen+Shot+2020-11-10+at+3.03.57+PM.png?format=2500w" width = "300", height="300"><h2>Skatepark parque lira</h2> <p>Uno de los parques más nuevos de la ciudad, muy bien diseñado para principiantes y avanzados</p>');

arregloDeMarcadores[1].bindPopup(popup2);

////////
var popup3 = L.popup({
  minWidth: 310,
  maxHeight: null
}).setContent('<a href="https://mapstr.com/place/h7Nx9g8pwU"><img src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmapstr.com%2Fplace%2Fh7Nx9g8pwU&psig=AOvVaw2woJibm63K2RPEJy7s41Je&ust=1690951366346000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDok-7SuoADFQAAAAAdAAAAABAE" width = "300", height="300" ><h2>Skatepark metro puebla 2.0</h2> <p>De los parques más grandes en la ciudad, los barandales que tiene en el centro del parque permiten practicar y aumentar el nivel del truco</p>');

arregloDeMarcadores[2].bindPopup(popup3);
//////
var popup4 = L.popup({
  minWidth: 310,
  maxHeight: null
}).setContent('<a href="https://www.timeoutmexico.mx/ciudad-de-mexico/que-hacer/skate-park-san-cosme"><img src = "https://www.dondeir.com/wp-content/uploads/2019/06/skatepark-Sancosme.jpg" width = "300", height="300"><h2>Skatepark Metro normal</h2> <p>De los parques más antiguos en la ciudad, bowls muy hechos, la zona de street es adecuada para principiantes, intermedios y avanzados</p>');

arregloDeMarcadores[3].bindPopup(popup4);

///

var popup5 = L.popup({
  minWidth: 310,
  maxHeight: null
}).setContent('<a href="https://www.urbeskate.com/parques/parque.php?id=9"><img src = "https://lh3.googleusercontent.com/proxy/KetpQ2wsULSmaTQZ1gxjsBDGWav0SYe6J5r6VGiydQW6fBhnSdLknIXgQT9qD2Gme6zrWbzjn6S37wv-4RE6TEFH5t1T0k6xogHMkgJEsiIz-aHzF5fdf4XmE8I8v4F3l2p0LGdq6jT_mRsueKXLNwU6aznuRHSlyJ1NMGx1OyAO5s8TzaatSLzIgExa" width = "300", height="300"><h2>Skatepark Cabeza de Juárez</h2> <p>También es uno de los primeros parques de la ciudad, los bowls que tiene son para intermedios y avanzados</p>');

arregloDeMarcadores[4].bindPopup(popup5);

//////////
var popup6 = L.popup({
  minWidth: 310,
  maxHeight: null
}).setContent('<a href="https://chapultepec.org.mx/proyecto/skatepark-constituyentes/"><img src = "img/juarez.jpg"><h2>Skatepark Cabeza de Juárez</h2>');

arregloDeMarcadores[5].bindPopup(popup6);

////////
var popup7 = L.popup({
  minWidth: 310,
  maxHeight: null
}).setContent('<a href="https://www.parquecuitlahuac.mx/post/skatepark-cuitl%C3%A1huac"><img src = "https://plethoranetwork.com/wp-content/uploads/2021/07/3.png" width = "300", height="300"><h2>Skatepark Cuitláhuac</h2> <p>El más reciente de los parques así como uno de los más grandes y con diversos elementos para principiantes, intermedios y avanzados</p>');

arregloDeMarcadores[6].bindPopup(popup7);
/////////////
var popup8 = L.popup({
  minWidth: 350,
  maxHeight: null
}).setContent('<a href="http://www.coskate.com/SkatePark.aspx?Park=MexicoCityPlantaDeAsfalto"><img src = "https://lh3.googleusercontent.com/proxy/Mib2pQPEXn_WBlyy6RIOjKVCBT9EMbWPQjxquNTZzS05qePDnqjgIj6HnJZbt6AXRsIOJfT9FRrYYb8-ISxfI2vh1ySnb15HA8lg5sdpkD6Ae6mVsSNOC621rNjbv-jXZIIUUx8nRG_HbNr3w2Nr5ZQiauJH6kySoDQ8-SDlKcJKRQ" width = "300", height="300"><h2>Skatepark Imán</h2> <p>Muy bien diseñado, el bowl que tiene es bastante divertido ymuy adecuado para principiantes</p>');

arregloDeMarcadores[7].bindPopup(popup8);
//////////////////

var popup9 = L.popup({
  minWidth: 310,
  maxHeight: null
}).setContent('<a href="https://chapultepec.org.mx/proyecto/skatepark-constituyentes/"><img src = "https://www.archivo.cdmx.gob.mx/storage/app/media/uploaded-files/34914110755_753e51bd55_z.jpg" width = "300", height="300"><h2>Skatepark Coyotes</h2> <p>Un parque pequeño pero muy bien diseñado, la zona de street ayuda bastante a obtener confianza para bardas de bajada</p>');

arregloDeMarcadores[8].bindPopup(popup9);

///////////////

var popup10 = L.popup({
  minWidth: 310,
  maxHeight: null
}).setContent('<a href="https://www.redbull.com/mx-es/recomendaci%C3%B3n-skate-park-templo-mayor"><img src = "https://ideasqueayudan.com/wp-content/uploads/2017/06/templomayor.jpg" width = "300", height="300"><h2>Skatepark Templo Mayor</h2> <p>Parque construido por nike, la zona de street permite incrementar el nivel en bardas y barandales</p>');

arregloDeMarcadores[9].bindPopup(popup10);