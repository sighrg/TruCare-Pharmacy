document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Open/Closed Status Indicator
    const statusIndicator = document.getElementById('status-indicator');
    
    if (statusIndicator) {
        checkOpenStatus(statusIndicator);
        // Update every minute
        setInterval(() => checkOpenStatus(statusIndicator), 60000);
    }
});

function checkOpenStatus(element) {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ...
    const hour = now.getHours();
    const minute = now.getMinutes();
    
    // Hours:
    // Mon-Fri: 9am - 6pm (9:00 - 18:00)
    // Sat: 10am - 2pm (10:00 - 14:00)
    // Sun: Closed

    let isOpen = false;

    if (day >= 1 && day <= 5) { // Mon-Fri
        if (hour > 9 || (hour === 9 && minute >= 0)) { // After 9:00
            if (hour < 18) { // Before 18:00
                isOpen = true;
            }
        }
    } else if (day === 6) { // Saturday
        if (hour > 10 || (hour === 10 && minute >= 0)) { // After 10:00
            if (hour < 14) { // Before 14:00
                isOpen = true;
            }
        }
    }
    // Sunday is closed (isOpen remains false)

    if (isOpen) {
        element.textContent = "We are currently Open";
        element.style.color = "var(--success)";
    } else {
        element.textContent = "We are currently Closed";
        element.style.color = "var(--danger)";
    }
}
