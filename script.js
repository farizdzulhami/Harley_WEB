const bikes = [
    {
        id: 1,
        name: "Fat Boy 114",
        category: "cruiser",
        image: "images/fatboy.png",
        engine: "Milwaukee-Eight® 114",
        torque: "155 Nm",
        weight: "317 kg",
        tag: "THE ICONIC CHOPPER"
    },
    {
        id: 2,
        name: "Heritage Classic",
        category: "cruiser",
        image: "images/heritage.png",
        engine: "Milwaukee-Eight® 114",
        torque: "155 Nm",
        weight: "330 kg",
        tag: "VINTAGE SOFTAIL STYLE"
    },
    {
        id: 3,
        name: "Road Glide ST",
        category: "touring",
        image: "images/rg st.png",
        engine: "Milwaukee-Eight® 117",
        torque: "168 Nm",
        weight: "382 kg",
        tag: "GRAND AMERICAN TOURING"
    },
    {
        id: 4,
        name: "Street Glide Special",
        category: "touring",
        image: "images/st spesial.png",
        engine: "Milwaukee-Eight® 114",
        torque: "158 Nm",
        weight: "375 kg",
        tag: "THE ORIGINAL BAGGER"
    },
    {
        id: 5,
        name: "Sportster S",
        category: "sport",
        image: "images/sport.png",
        engine: "Revolution® Max 1250T",
        torque: "125 Nm",
        weight: "228 kg",
        tag: "A NEW CHAPTER BEGINS"
    },
    {
        id: 6,
        name: "Nightster Special",
        category: "sport",
        image: "images/nighster.png",
        engine: "Revolution® Max 975T",
        torque: "95 Nm",
        weight: "218 kg",
        tag: "CLASSIC SILHOUETTE"
    },
    {
        id: 7,
        name: "Pan America 1250 Special",
        category: "adventure",
        image: "images/pan.png",
        engine: "Revolution® Max 1250",
        torque: "128 Nm",
        weight: "245 kg",
        tag: "EXPLORE THE UNKNOWN"
    }
];

const bikeGrid = document.getElementById('bikeGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderBikes(filter = 'all') {
    bikeGrid.innerHTML = '';

    const filteredBikes = filter === 'all'
        ? bikes
        : bikes.filter(bike => bike.category === filter);

    filteredBikes.forEach((bike, index) => {
        const card = document.createElement('div');
        card.className = 'bike-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        card.innerHTML = `
            <div class="bike-card-image">
                <img src="${bike.image}" alt="${bike.name}">
            </div>
            <div class="bike-info">
                <span class="bike-tag">${bike.tag}</span>
                <h3 class="bike-name">${bike.name}</h3>
                <div class="bike-stats">
                    <div class="stat">MESIN<span>${bike.engine.split('®')[0]}</span></div>
                    <div class="stat">TORSI<span>${bike.torque}</span></div>
                    <div class="stat">BERAT<span>${bike.weight}</span></div>
                </div>
            </div>
        `;

        bikeGrid.appendChild(card);

        // Staggered animation
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Filter handling
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        renderBikes(filter);
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderBikes();

    // Add scroll reveal to sections
    const sections = document.querySelectorAll('main, footer');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 1s ease-out';

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                }
            });
        }, { threshold: 0.1 });

        sectionObserver.observe(section);
    });
});
