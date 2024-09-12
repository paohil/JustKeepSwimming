// Function to toggle the hamburger menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


// Basic form submission handler
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Message sent successfully!');
});

//CAROUSEL SCRIPT
const images = [
    './images/CP1.jpg',
    './images/CP2.jpg',
    './images/CP3.jpg',
    './images/CP4.jpg'
];

let currentIndex = 0;
const section = document.querySelector('.carousel-section');

// Function to change the background image
function changeBackground(index) {
    section.style.backgroundImage = `url(${images[index]})`;
}

// Initial background setup
changeBackground(currentIndex);

// Handle Next Button Click
document.querySelector('.next-button').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length; // Increment index
    changeBackground(currentIndex);
});

// Handle Previous Button Click
document.querySelector('.prev-button').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement index
    changeBackground(currentIndex);
});

// Auto-Slide (Change image every 5 seconds)
setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground(currentIndex);
}, 5000);



function openModal(imageNumber) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = `./images/GALLERY${imageNumber}.jpg`; // Replace with your image filenames
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}


  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll events
  function handleScroll() {
    const topLeftItem = document.querySelector('.top-left');
    const topRightItem = document.querySelector('.top-right');
    const bottomLeftItem = document.querySelector('.bottom-left');
    const bottomRightItem = document.querySelector('.bottom-right');
    
    if (isInViewport(topLeftItem)) {
      topLeftItem.classList.add('visible');
    }
    
    if (isInViewport(topRightItem)) {
      topRightItem.classList.add('visible');
    }

    if (isInViewport(bottomLeftItem)) {
      bottomLeftItem.classList.add('visible');
    }
    
    if (isInViewport(bottomRightItem)) {
      bottomRightItem.classList.add('visible');
    }
  }

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Trigger the scroll handler on initial load to check if the sections are already in the viewport
  document.addEventListener('DOMContentLoaded', handleScroll);

