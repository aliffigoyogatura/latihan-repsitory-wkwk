/* main.js */

/* Homepage scripts */

// Mengatur tinggi banner sama dengan tinggi window
let banner = document.querySelector('.banner');
banner.style.height = window.innerHeight + 'px';

// Mengatur posisi teks banner di tengah
let bannerText = document.querySelector('.banner h1');
bannerText.style.top = (window.innerHeight / 2 - bannerText.offsetHeight / 2) + 'px';

// Responsive banner
window.addEventListener('resize', function() {
    banner.style.height = window.innerHeight + 'px';
    bannerText.style.top = (window.innerHeight / 2 - bannerText.offsetHeight / 2) + 'px';
});

/* Blog scripts */

// Menampilkan jumlah komentar pada artikel
let articles = document.querySelectorAll('.article');
articles.forEach(function(article) {
    let comments = article.querySelectorAll('.comment');
    let commentCount = comments.length;
    let commentText = (commentCount == 1) ? '1 Comment' : commentCount + ' Comments';
    let commentEl = document.createElement('p');
    commentEl.innerHTML = commentText;
    article.appendChild(commentEl);
});

/* Contact scripts */

// Validasi formulir kontak sebelum submit
let contactForm = document.querySelector('.contact-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let messageInput = document.querySelector('#message');
let submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    let isValid = true;
    if (nameInput.value.trim() == '') {
        isValid = false;
        alert('Please enter your name.');
    }
    if (emailInput.value.trim() == '') {
        isValid = false;
        alert('Please enter your email address.');
    }
    if (messageInput.value.trim() == '') {
        isValid = false;
        alert('Please enter a message.');
    }
    if (isValid) {
        alert('Thank you for your message!');
        contactForm.reset();
    }
});
