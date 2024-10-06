// Function to toggle dropdown visibility
function toggleDropdown() {
    document.getElementById("filterDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.filter-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



//another

let currentIndex = 0;
const reviews = document.querySelectorAll('.review-content');
const totalReviews = reviews.length;

function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.remove('active');
        if (i === index) {
            review.classList.add('active');
        }
    });
}

function nextReview() {
    currentIndex = (currentIndex + 1) % totalReviews; // Loop back to the start
    showReview(currentIndex);
}

function prevReview() {
    currentIndex = (currentIndex - 1 + totalReviews) % totalReviews; // Loop to the end
    showReview(currentIndex);
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(nextReview, 3000);

// Manual navigation with arrows
document.querySelector('.next').addEventListener('click', () => {
    nextReview();
    resetAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevReview();
    resetAutoSlide();
});

// Reset auto-slide when manually navigating
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextReview, 3000); // Restart auto-slide after manual action
}

// Initially show the first review
showReview(currentIndex);

//cart 
// Get references to the cart button, cart slider, and close button
const cartBtn = document.getElementById('cartBtn');
const cartSlider = document.getElementById('cartSlider');
const closeBtn = document.getElementById('closeBtn');

// Function to open the cart slider
function openCart() {
    cartSlider.style.transform = 'translateX(0)'; // Slide in from the right
}

// Function to close the cart slider
function closeCart() {
    cartSlider.style.transform = 'translateX(100%)'; // Slide out to the right
}

// Add click event listener to the cart button
cartBtn.addEventListener('click', openCart);

// Add click event listener to the close button
closeBtn.addEventListener('click', closeCart);

document.getElementById('checkoutButton').onclick = function() {
    // Redirect to the checkout page
    window.location.href = 'checkout.html'; // Change 'checkout.html' to your actual checkout page
};
