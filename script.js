const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Countdown Timer
const countdown = () => {
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 24); // Set target time to 24 hours from now

    const updateTimer = () => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('hours').innerText = String(Math.floor(hours)).padStart(2, '0');
        document.getElementById('minutes').innerText = String(Math.floor(minutes)).padStart(2, '0');
        document.getElementById('seconds').innerText = String(Math.floor(seconds)).padStart(2, '0');

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            document.querySelector('.countdown-timer').innerHTML = '<p>Offer Expired!</p>';
        }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call
};

// Initialize the countdown timer
countdown();

// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');

        // Toggle active class on the FAQ item
        faqItem.classList.toggle('active');

        // Toggle the height of the answer
        if (faqItem.classList.contains('active')) {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px'; // Expand to full height
        } else {
            faqAnswer.style.maxHeight = '0'; // Collapse
        }

        // Close other FAQ items when one is opened
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem && item.classList.contains('active')) {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = '0';
            }
        });
    });
});

// Form Submission Handling (Optional)
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validate form fields
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission (replace with actual AJAX call or backend integration)
    console.log('Form submitted:', { name, email, message });
    alert('Thank you! Your message has been sent.');
    contactForm.reset(); // Clear the form
});