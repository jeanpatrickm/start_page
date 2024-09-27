var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date;

document.getElementById('date').innerText = dayName[now.getDay()] + ", " + monName[now.getMonth()] + " " + now.getDate();

const images = ['assets/icon1.png', 'assets/icon2.png'];

const randomIndex = Math.floor(Math.random() * images.length);
document.getElementById('randomImage').src = images[randomIndex];

const imageElement = document.getElementById('randomImage');

imageElement.addEventListener('mouseenter', () => {
    const direction = Math.random() < 0.5 ? 'rotate(180deg)' : 'rotate(-180deg)';
    imageElement.style.transform = direction;
});

imageElement.addEventListener('mouseleave', () => {
    imageElement.style.transform = 'rotate(0deg)';
});
