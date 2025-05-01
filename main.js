// Right-to-left slider functionality and admissions popup
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        // Move to previous slide for RTL effect
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 2500);
}

// Admissions Open Popup
window.addEventListener('DOMContentLoaded', function() {
    // Gallery Lightbox functionality
    if (document.querySelector('.gallery-grid')) {
        // Create lightbox elements
        const lightbox = document.createElement('div');
        lightbox.className = 'gallery-lightbox';
        lightbox.innerHTML = `
            <span class="gallery-lightbox-close">&times;</span>
            <img src="" alt="Gallery Large View">
        `;
        document.body.appendChild(lightbox);
        const lightboxImg = lightbox.querySelector('img');
        const closeBtn = lightbox.querySelector('.gallery-lightbox-close');
        // Open lightbox on image click
        document.querySelectorAll('.gallery-grid img').forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
            });
        });
        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            setTimeout(() => { lightboxImg.src = ''; }, 400);
        }
        closeBtn.onclick = closeLightbox;
        lightbox.onclick = (e) => { if (e.target === lightbox) closeLightbox(); };
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
        });
    }

    // Home page admissions popup
    const slider = document.getElementById('slider');
    if (slider) {
        const btnContainer = document.createElement('div');
        btnContainer.style.display = 'flex';
        btnContainer.style.justifyContent = 'center';
        btnContainer.style.margin = '18px 0 0 0';
        const popupBtn = document.createElement('button');
        popupBtn.textContent = 'Admissions Open';
        popupBtn.className = 'admission-popup-btn';
        btnContainer.appendChild(popupBtn);
        slider.insertAdjacentElement('afterend', btnContainer);

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'admission-modal';
        modal.innerHTML = `
            <div class="admission-modal-content">
                <span class="admission-modal-close">&times;</span>
                <h3>Admissions Open</h3>
                <p>Admissions are now open for the academic year 2025-26!<br>
                Apply now for PUC and Degree courses.<br>
                <a href="#" class="apply-link">Apply Online</a></p>
            </div>
        `;
        document.body.appendChild(modal);

        // Show modal on button click
        popupBtn.onclick = () => {
            modal.style.display = 'block';
        };
        // Close modal on close click or outside click
        modal.querySelector('.admission-modal-close').onclick = () => {
            modal.style.display = 'none';
        };
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }

    // About Us page admissions popup
    const aboutBtn = document.getElementById('about-admission-btn');
    if (aboutBtn) {
        const aboutModal = document.createElement('div');
        aboutModal.className = 'admission-modal';
        aboutModal.innerHTML = `
            <div class="admission-modal-content">
                <span class="admission-modal-close">&times;</span>
                <h3>Admissions Open</h3>
                <p>Admissions are now open for the academic year 2025-26!<br>
                Apply now for PUC and Degree courses.<br>
                <a href="#" class="apply-link">Apply Online</a></p>
            </div>
        `;
        document.body.appendChild(aboutModal);
        aboutBtn.onclick = () => {
            aboutModal.style.display = 'block';
        };
        aboutModal.querySelector('.admission-modal-close').onclick = () => {
            aboutModal.style.display = 'none';
        };
        window.addEventListener('click', function(event) {
            if (event.target === aboutModal) {
                aboutModal.style.display = 'none';
            }
        });
    }
});
