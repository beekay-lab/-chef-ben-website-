document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
            menuToggle.classList.toggle("active");
        });

        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("open");
                menuToggle.classList.remove("active");
            });
        });
    }

    // Dynamic gallery
    const gallery = document.getElementById("galleryGrid");

    if (gallery && typeof CHEF_BEN_IMAGES !== "undefined") {

        CHEF_BEN_IMAGES.forEach((image, index) => {

            const item = document.createElement("article");
            item.className = "gallery-item reveal";

            item.innerHTML = `
                <img src="${image.src}" alt="Chef Ben culinary work ${index + 1}" loading="lazy">
                <div class="gallery-overlay">
                    <span>CHEF BEN</span>
                    <small>Culinary Collection ${String(index + 1).padStart(2,"0")}</small>
                </div>
            `;

            gallery.appendChild(item);
        });
    }

    // Pastry gallery
    const pastryGallery = document.getElementById("pastryGallery");

    if (pastryGallery && typeof CHEF_BEN_IMAGES !== "undefined") {

        const pastryImages = CHEF_BEN_IMAGES.slice(0, Math.min(6, CHEF_BEN_IMAGES.length));

        pastryImages.forEach((image, index) => {

            const item = document.createElement("div");
            item.className = "pastry-image";

            item.innerHTML = `
                <img src="${image.src}" alt="Chef Ben pastry and culinary work ${index + 1}" loading="lazy">
            `;

            pastryGallery.appendChild(item);
        });
    }

    // Dynamic videos
    const videoGrid = document.getElementById("videoGrid");

    if (videoGrid && typeof CHEF_BEN_VIDEOS !== "undefined") {

        CHEF_BEN_VIDEOS.forEach((video, index) => {

            const item = document.createElement("article");
            item.className = "video-card reveal";

            item.innerHTML = `
                <div class="video-wrapper">
                    <video controls preload="metadata" playsinline>
                        <source src="${video.src}" type="video/mp4">
                        Your browser does not support video playback.
                    </video>
                    <div class="video-number">${String(index + 1).padStart(2,"0")}</div>
                </div>
                <h3>Chef Ben in Action</h3>
                <p>Professional culinary preparation and presentation.</p>
            `;

            videoGrid.appendChild(item);
        });
    }

    // Reveal animations
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    });

    document.querySelectorAll(".reveal").forEach(element => {
        observer.observe(element);
    });

    // Header on scroll
    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

    // Back to top
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 700) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    if (backToTop) {

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

    }

    // Current year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
