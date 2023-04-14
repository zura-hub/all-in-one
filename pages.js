const home = document.getElementById('home')
const taxi = document.getElementById('taxi')
const delivey = document.getElementById('delivey')
const contact = document.getElementById('contact')
const texi = document.querySelector('.header')
const about = document.getElementById('about')

home.addEventListener('click' , function (){
    window.open('./index.html')
})

taxi.addEventListener('click' , function (){
    window.open('./taxi.html')
})

delivey.addEventListener('click' , function (){
    window.open('./delivery.html')
})

contact.addEventListener('click' , function (){
    window.open('./contant.html')
})


taxi.addEventListener('click' , function (){
    window.open('./taxi.html')
})


about.addEventListener('click' , function (){
    window.open('./about.html')
})



// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13);

// Add the tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
}).addTo(map);

// Add a marker to the map
const marker = L.marker([51.5, -0.09]).addTo(map);
