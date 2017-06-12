var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/first_image.jpg') {
      myImage.setAttribute ('src','images/second_image.jpg');
    } else {
      myImage.setAttribute ('src','images/first_image.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Пожалуйста, введите ваше имя.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Приветствую тебя, ' + myName +"!";
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Приветствую тебя, ' + storedName + "!";
}
myButton.onclick = function() {
  setUserName();
}