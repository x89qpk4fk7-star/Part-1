// ============================================
// TSHIDI'S SPAZA - JAVASCRIPT FUNCTIONALITY
// ============================================

// Wait for DOM to load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. CATERING FORM VALIDATION
    // ==========================================
    const cateringForm = document.getElementById('cateringForm');
    if (cateringForm) {
        cateringForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const eventDate = document.getElementById('eventDate').value;
            const people = document.getElementById('people').value;
            const budget = document.getElementById('budget').value || 'Not specified';
            const message = document.getElementById('message').value || 'No special requests';
            
            // Validate required fields
            if (!name || !eventDate || !people) {
                alert('Please fill in all required fields (Name, Event Date, and Number of People).');
                return;
            }

            
            // Validate people is a positive number
            if (parseInt(people) <= 0) {
                alert('Please enter a valid number of people (at least 1).');
                return;
            }
            
            // Show success message
            alert('Thank you, ' + name + '! Tshidi will WhatsApp you within 24 hours with a catering quote.\n\n' +
                  'Event Date: ' + eventDate + '\n' +
                  'Number of People: ' + people + '\n' +
                  'Budget: R' + budget + '\n' +
                  'Special Requests: ' + message);
            
            // Reset the form
            cateringForm.reset();
        });
    }
    
    // ==========================================
    // 2. DELIVERY FORM VALIDATION
    // ==========================================
    const deliveryForm = document.getElementById('deliveryForm');
    if (deliveryForm) {
        deliveryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('deliveryName').value.trim();
            const address = document.getElementById('address').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const items = document.getElementById('items').value.trim();
            const time = document.getElementById('time').value || 'ASAP';
            
            // Validate required fields
            if (!name || !address || !phone || !items) {
                alert('Please fill in all required fields (Name, Address, Phone, and Items).');
                return;
            }
            
            // Validate phone number (South African format)
            const phoneRegex = /^[0-9]{10}$/;
            const cleanPhone = phone.replace(/\s/g, '');
            if (!phoneRegex.test(cleanPhone) && !cleanPhone.startsWith('+27')) {
                alert('Please enter a valid 10-digit phone number (e.g., 0721234567).');
                return;
            }
            
            // Show success message
            alert('Thank you, ' + name + '! Tshidi will call you on ' + phone + ' to confirm your delivery.\n\n' +
                  'Address: ' + address + '\n' +
                  'Items: ' + items + '\n' +
                  'Time: ' + time);
            
            // Reset the form
            deliveryForm.reset();
        });
    }
    
    // ==========================================
    // 3. MOBILE MENU TOGGLE (Hamburger Menu)
    // ==========================================
    // Note: Add a hamburger button in HTML for this to work
    
    // ==========================================
    // 4. ACTIVE PAGE HIGHLIGHT
    // ==========================================
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    // Add 'active' class to current page link
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
    
    // ==========================================
    // 5. SMOOTH SCROLLING
    // ==========================================
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ==========================================
    // 6. DAILY SPECIAL UPDATE (Future feature)
    // ==========================================
    // This could be updated with JavaScript to change the daily special
    // without editing HTML
    const specials = [
        'Vetkoek & Mince – R15',
        'Chicken & Rice – R35',
        'Pap & Beef Stew – R25',
        'Samp & Beans – R20'
    ];
    
    // Option to rotate specials (commented out for now)
    // const specialElement = document.querySelector('.daily-special p');
    // if (specialElement) {
    //     const today = new Date().getDay();
    //     specialElement.textContent = '🍽️ Today\'s Special: ' + specials[today % specials.length] + ' 🍽️';
    // }
});
// ==========================================
// LIGHTBOX FUNCTIONS - Gallery popup
// ==========================================
function openLightbox(title, description, price) {
    const lightbox = document.getElementById('lightbox');
    const emojis = {
        'Bread & Milk': '🍞',
        'Cool Drinks': '🥤',
        'Snacks': '🍿',
        'Catering': '🍲'
    };
    
    document.getElementById('lightbox-emoji').textContent = emojis[title] || '🛒';
    document.getElementById('lightbox-title').textContent = title;
    document.getElementById('lightbox-description').textContent = description;
    document.getElementById('lightbox-price').textContent = 'Price: ' + price;
    
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
