// script.js

// Existing: Search Form Toggling
searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

// Existing: Login Form Toggling
let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}

// Existing: Basic Login Form Validation
document.querySelector('.login-form-container form').onsubmit = (event) => {
    let emailInput = document.querySelector('.login-form-container input[type="email"]');
    let passwordInput = document.querySelector('.login-form-container input[type="password"]');

    if (!emailInput || !passwordInput) {
        console.warn("Login form input selectors might be incorrect. Ensure inputs for email/password exist.");
        return;
    }

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Please fill in both email and password fields.');
        event.preventDefault();
    }
};

// Existing: Header Sticky Behavior (on Scroll & on Load)
let header2 = document.querySelector('.header .header-2');
let scrollTopBtn = document.querySelector('#scroll-top-btn');

window.onscroll = () => {
    searchForm.classList.remove('active');

    if (window.scrollY > 80) {
        header2.classList.add('active');
    } else {
        header2.classList.remove('active');
    }

    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    }
};

// MODIFIED: window.onload - back to direct calls for local data display
window.onload = () => {
    console.log("window.onload fired.");
    if (window.scrollY > 80) {
        header2.classList.add('active');
    } else {
        header2.classList.remove('active');
    }

    // Always fade out the loader after its delay
    fadeOut();

    // Display books from local data.js
    displayLocalBooks();
    // Initialize Swipers after content is loaded
    initializeSwipers();
};


// Existing: Page Loader/Preloader Control (more robust fade-out)
function loader() {
    console.log("loader() called. Attempting to hide loader.");
    let loaderContainer = document.querySelector('.loader-container');
    if (loaderContainer) {
        loaderContainer.style.opacity = '0';
        setTimeout(() => {
            loaderContainer.style.display = 'none';
            console.log("Loader display set to none.");
        }, 500); // This duration should match your CSS transition time for opacity
    } else {
        console.warn("Loader container not found!");
    }
}

function fadeOut() {
    console.log("fadeOut() called. Loader will hide in 4 seconds.");
    setTimeout(loader, 4000); // Loader visible for 4 seconds, then starts fading
}

// Existing: Scroll to Top Button Click Event
if (scrollTopBtn) {
    scrollTopBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

// MODIFIED: Function to create HTML for a single book item (now includes more details and description-text class)
function createBookHTML(book) {
    return `
        <div class="swiper-slide box">
            <div class="icons">
                <a href="#" class="fas fa-search"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="content">
                <h3>${book.title}</h3>
                <p>${book.author || 'Unknown Author'}</p>
                <p class="book-genre">Genre: ${book.genre || 'N/A'}</p> <!-- Added Genre -->
                <p class="book-description description-text">${book.description || ''}</p> <!-- Added description and class -->
                ${book.sampleLink ? `<a href="${book.sampleLink}" class="sample-link" target="_blank">Read Sample</a>` : ''} <!-- Added Sample Link -->
                <div class="price">$${book.price ? book.price.toFixed(2) : 'N/A'} <span>$${book.price ? (book.price * 1.2).toFixed(2) : 'N/A'}</span></div>
                <div class="stars">
                    ${'<i class="fas fa-star"></i>'.repeat(Math.floor(book.rating || 0))}
                    ${(book.rating || 0) % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    ${'<i class="far fa-star"></i>'.repeat(5 - Math.ceil(book.rating || 0))}
                    <span class="book-rating">(${book.rating ? book.rating.toFixed(1) : 'N/A'})</span> <!-- Added numerical rating -->
                </div>
                <a href="#" class="btn add-to-cart-btn" data-book-id="${book.id}">add to cart</a>
            </div>
        </div>
    `;
}

// MODIFIED: Function to create HTML for new arrival book item (now includes all details and description-text class)
function createNewArrivalHTML(book) {
    return `
        <div class="swiper-slide box">
            <div class="image">
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="content">
                <h3>${book.title}</h3>
                <p>${book.author || 'Unknown Author'}</p> <!-- Added Author -->
                <p class="book-genre">Genre: ${book.genre || 'N/A'}</p> <!-- Added Genre -->
                <p class="book-description description-text">${book.description || ''}</p> <!-- Added Description and class -->
                ${book.sampleLink ? `<a href="${book.sampleLink}" class="sample-link" target="_blank">Read Sample</a>` : ''} <!-- Added Sample Link -->
                <div class="price">$${book.price ? book.price.toFixed(2) : 'N/A'} <span>$${book.price ? (book.price * 1.2).toFixed(2) : 'N/A'}</span></div>
                <div class="stars">
                    ${'<i class="fas fa-star"></i>'.repeat(Math.floor(book.rating || 0))}
                    ${(book.rating || 0) % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    ${'<i class="far fa-star"></i>'.repeat(5 - Math.ceil(book.rating || 0))}
                    <span class="book-rating">(${book.rating ? book.rating.toFixed(1) : 'N/A'})</span> <!-- Added numerical rating -->
                </div>
                <a href="#" class="btn add-to-cart-btn" data-book-id="${book.id}">add to cart</a> <!-- Added Add to Cart button -->
            </div>
        </div>
    `;
}

// Function to display books from the local 'books' array (from data.js)
function displayLocalBooks() {
    console.log("displayLocalBooks() called.");
    if (typeof books === 'undefined' || !Array.isArray(books)) {
        console.error("Local 'books' array not found or not an array. Ensure data.js is loaded correctly.");
        return;
    }

    const featuredSliderWrapper = document.querySelector('.featured-slider .swiper-wrapper');
    if (featuredSliderWrapper) {
        featuredSliderWrapper.innerHTML = '';
        const featuredBooks = books.filter(book => book.isFeatured);
        featuredBooks.forEach(book => {
            featuredSliderWrapper.innerHTML += createBookHTML(book);
        });
        console.log("Featured books populated from local data.");
    } else {
        console.warn("Featured slider wrapper not found for local data display.");
    }

    const arrivalsSliderWrapper = document.querySelector('.arrivals-slider .swiper-wrapper');
    if (arrivalsSliderWrapper) {
        arrivalsSliderWrapper.innerHTML = '';
        const newArrivals = books.filter(book => book.isNewArrival);
        newArrivals.forEach(book => {
            arrivalsSliderWrapper.innerHTML += createNewArrivalHTML(book);
        });
        console.log("New arrivals populated from local data.");
    } else {
        console.warn("Arrivals slider wrapper not found for local data display.");
    }
}


// MODIFIED: Swiper initialization - now a generic function
// This allows us to re-initialize a specific Swiper after its content is loaded
function initializeSwipers() {
    // Initialize all Swipers after local content is loaded
    initializeSwiperInstance('.books-slider');
    initializeSwiperInstance('.featured-slider');
    initializeSwiperInstance('.arrivals-slider');
    initializeSwiperInstance('.reviews-slider');
    initializeSwiperInstance('.blogs-slider');
    console.log("All Swipers initialized.");
}

function initializeSwiperInstance(selector) {
    const swiperElement = document.querySelector(selector);
    if (swiperElement && swiperElement.swiper) {
        swiperElement.swiper.destroy(true, true);
        console.log(`Destroyed existing Swiper for ${selector}`);
    }

    let swiperConfig = {
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    };

    if (selector === '.featured-slider') {
        swiperConfig.spaceBetween = 10;
        swiperConfig.navigation = {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        };
        swiperConfig.breakpoints = {
            0: { slidesPerView: 1 },
            450: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
        };
    } else if (selector === '.arrivals-slider' || selector === '.reviews-slider' || selector === '.blogs-slider') {
        swiperConfig.spaceBetween = 10;
        swiperConfig.breakpoints = {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        };
    }

    try {
        new Swiper(selector, swiperConfig);
        console.log(`Swiper initialized for ${selector}`);
    } catch (e) {
        console.error(`Error initializing Swiper for ${selector}:`, e);
    }
}
