var map = L.map('map').setView([21.075, 82.46],5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
const array=[]
let record=" ";

lastLocation();

var circle = L.circle([21.075, 82.46], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

let x =document.querySelector(".demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}


function showPosition(position) {
    var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
    marker.bindPopup("current location").openPopup();
    document.querySelector(".demo").innerHTML = `Latitude:${position.coords.latitude} <br>Longitude:${position.coords.longitude}`;
    
}

function lastLocation(){
    var marker = L.marker([latitude,longitude]).addTo(map);
    marker.bindPopup("last location").openPopup();
}

function sendEmail() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(Emails);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function Emails(position) { 
  Email.send({
    SecureToken : "0956929a-3d03-4174-8c4a-d79aca8467e9",
    To : 'anushkatiwari12345678@gmail.com',
    From : "comderitis@gmail.com",
    Subject : "need help",
    Body : `Need Help!<br> Current location: <br>Latitude :${position.coords.latitude} Longitude: ${position.coords.longitude} `
  }).then(
    message => alert('sent')
  );
}
//feelings

function display(){
    record=' ';
    for(let i=0;i<array.length;i++){
       record+=`
       <div>${array[i].name}</div>
       <div>${array[i].date}</div>
       <button onclick="del(${i})"  class="dlt-button">Don't want it anymore</button>`;   
    }
    document.querySelector('.entry').innerHTML=record;
    document.querySelector('.thought').value=' ';
    document.querySelector('.date').value=' ';
    document.querySelector('.thought').placeholder='What do you feel?';
}
function addToList(){
    let task=document.querySelector('.thought').value;
    let date=document.querySelector('.date').value;
    let obj={};
    obj.name=task;
    obj.date=date;
    array.push(obj);
    display();
}
function del(index){
    array.splice(index,1);
    display();
}               