const bikes = [
    {
        id: 1,
        name: "Fat Boy 114",
        category: "cruiser",
        image: "images/fatboy.png",
        engine: "Milwaukee-Eight® 114",
        torque: "155 Nm",
        weight: "317 kg",
        tag: "THE ICONIC CHOPPER",
        description: "Fat Boy 114 adalah ikon kustom sejati yang mendominasi jalanan dengan kehadirannya yang masif. Dilengkapi dengan mesin Milwaukee-Eight 114 V-Twin yang bertenaga, memberikan torsi melimpah saat dibutuhkan. Desain solid-disc Lakester wheels dan sentuhan krom satin membuatnya tampil gagah dan tak tertandingi."
    },
    {
        id: 2,
        name: "Heritage Classic",
        category: "cruiser",
        image: "images/heritage.png",
        engine: "Milwaukee-Eight® 114",
        torque: "155 Nm",
        weight: "330 kg",
        tag: "VINTAGE SOFTAIL STYLE",
        description: "Heritage Classic menghadirkan gaya vintage yang ikonik dengan performa modern. Motor ini dirancang untuk mereka yang menghargai warisan desain klasik Harley-Davidson, lengkap dengan kaca depan yang dapat dilepas, saddlebags yang bisa dikunci, dan kenyamanan berkendara jarak jauh yang luar biasa."
    },
    {
        id: 3,
        name: "Road Glide ST",
        category: "touring",
        image: "images/rg st.png",
        engine: "Milwaukee-Eight® 117",
        torque: "168 Nm",
        weight: "382 kg",
        tag: "GRAND AMERICAN TOURING",
        description: "Road Glide ST adalah motor touring performa tinggi bagi mereka yang mencari tenaga dan kenyamanan ekstrem. Fairing Sharknose yang aerodinamis dipadukan dengan mesin Milwaukee-Eight 117 yang masif, memberikan pengalaman touring jarak jauh yang tiada duanya."
    },
    {
        id: 4,
        name: "Street Glide Special",
        category: "touring",
        image: "images/st spesial.png",
        engine: "Milwaukee-Eight® 114",
        torque: "158 Nm",
        weight: "375 kg",
        tag: "THE ORIGINAL BAGGER",
        description: "Street Glide Special adalah standar emas dari motor bagger. Menawarkan kombinasi sempurna antara gaya hot rod bagger kustom dan kenyamanan touring sejati. Dilengkapi sistem infotainment Boom! Box GTS dan tenaga dari mesin Milwaukee-Eight 114."
    },
    {
        id: 5,
        name: "Sportster S",
        category: "sport",
        image: "images/sport.png",
        engine: "Revolution® Max 1250T",
        torque: "125 Nm",
        weight: "228 kg",
        tag: "A NEW CHAPTER BEGINS",
        description: "Sportster S adalah awal dari babak baru. Ditenagai oleh mesin Revolution Max 1250T, motor ini menawarkan tenaga beringas dalam sasis yang ringan dan lincah. Desainnya yang agresif dan teknologi canggihnya mendefinisikan ulang apa artinya menjadi sebuah Sportster."
    },
    {
        id: 6,
        name: "Nightster Special",
        category: "sport",
        image: "images/nighster.png",
        engine: "Revolution® Max 975T",
        torque: "95 Nm",
        weight: "218 kg",
        tag: "CLASSIC SILHOUETTE",
        description: "Nightster Special menggabungkan siluet klasik Sportster dengan performa dan teknologi terkini. Digerakkan oleh mesin Revolution Max 975T, motor ini sangat responsif dan mudah dikendalikan, cocok untuk pengendara yang menginginkan gaya ikonik dengan kelincahan modern."
    },
    {
        id: 7,
        name: "Pan America 1250 Special",
        category: "adventure",
        image: "images/pan.png",
        engine: "Revolution® Max 1250",
        torque: "128 Nm",
        weight: "245 kg",
        tag: "EXPLORE THE UNKNOWN",
        description: "Pan America 1250 Special adalah motor adventure touring perdana dari Harley-Davidson. Dirancang untuk tangguh, kuat, dan siap menjelajah ke mana saja. Dibekali mesin Revolution Max 1250 dan fitur canggih seperti Adaptive Ride Height untuk menaklukkan segala medan."
    },
    {
        id: 8,
        name: "CVO Street Glide",
        category: "cvo",
        image: "images/cvo sg.png",
        engine: "Milwaukee-Eight® VVT 121",
        torque: "183 Nm",
        weight: "380 kg",
        tag: "THE PINNACLE OF CUSTOM TOURING",
        description: "CVO Street Glide mewakili puncak kemewahan, performa, dan desain dari Harley-Davidson. Dibekali dengan mesin Milwaukee-Eight VVT 121 yang revolusioner, sistem infotainment Skyline OS terbaru, dan sentuhan cat eksklusif kustom pabrik yang memukau. Ini adalah mahakarya roda dua."
    },
    {
        id: 9,
        name: "CVO Road Glide",
        category: "cvo",
        image: "images/cvo rg.png",
        engine: "Milwaukee-Eight® VVT 121",
        torque: "183 Nm",
        weight: "393 kg",
        tag: "ELEVATED ROAD PRESENCE",
        description: "CVO Road Glide menetapkan standar baru untuk touring mewah. Menampilkan fairing Sharknose generasi berikutnya yang aerodinamis, pencahayaan LED terintegrasi penuh, dan suspensi premium. Diciptakan untuk pengendara yang menuntut kesempurnaan mutlak dalam setiap perjalanan."
    },
    {
        id: 10,
        name: "Forty-Eight",
        category: "sport",
        image: "images/48.png",
        engine: "Evolution® 1200",
        torque: "96 Nm",
        weight: "252 kg",
        tag: "HEAVY-HITTING FAT TIRE STYLE",
        description: "Harley-Davidson Forty-Eight adalah ikon gaya kustom garasi dengan tangki 'peanut' ikonik yang pertama kali muncul pada tahun 1948. Motor ini menonjol dengan posturnya yang agresif, ban depan lebar yang berotot, dan tenaga besar dari mesin Evolution V-Twin 1200cc klasik."
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
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => openModal(bike));

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

// Modal handling
const modal = document.getElementById('bikeModal');
const closeModalBtn = document.querySelector('.close-modal');

function openModal(bike) {
    document.getElementById('modalImg').src = bike.image;
    document.getElementById('modalImg').alt = bike.name;
    document.getElementById('modalTag').textContent = bike.tag;
    document.getElementById('modalName').textContent = bike.name;
    document.getElementById('modalDesc').textContent = bike.description;
    document.getElementById('modalEngine').textContent = bike.engine.split('®')[0];
    document.getElementById('modalTorque').textContent = bike.torque;
    document.getElementById('modalWeight').textContent = bike.weight;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
