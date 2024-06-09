function toggleNav() {
    var navbarLinks = document.getElementById('navbar-links');
    if (navbarLinks.style.display === 'block') {
        navbarLinks.style.display = 'none';
    } else {
        navbarLinks.style.display = 'block';
    }
}






function toggleNav() {
    var navbarLinks = document.getElementById("navbar-links");
    navbarLinks.classList.toggle("active");
}

function changeColor(element) {
    // Remove active class from all links
    var links = document.querySelectorAll('.navbar-links a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Add active class to the clicked link
    element.classList.add('active');
}

















function searchFunction() {
    var searchInput = document.getElementById("search-input").value;
    alert("You searched for: " + searchInput);
}






document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});





let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
const slidesContainer = document.querySelector('.slides');
const slideWidth = slides[0].clientWidth;
slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
currentIndex = (currentIndex + 1) % totalSlides;
showSlide(currentIndex);
}

// Initially show the first slide
showSlide(currentIndex);

// Automatically switch to the next slide every 5 seconds
setInterval(nextSlide, 5000);















let currentInde = 0;
const cardsContainer = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight) * 2;

function showCard(index) {
cardsContainer.style.transform = `translateX(-${index * cardWidth}px)`;
}

function nextCard() {
if (currentIndex < totalCards - 1) {
currentIndex++;
} else {
currentIndex = 0;
}
showCard(currentIndex);
}

function prevCard() {
if (currentIndex > 0) {
currentIndex--;
} else {
currentIndex = totalCards - 1;
}
showCard(currentIndex);
}











const UNEB= document.getElementById('UNEB');


UNEB.addEventListener('click', () => {
alert('button register clicked');
UNEB.style.display = "block";

})

