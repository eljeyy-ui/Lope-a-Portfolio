const projectData = {
    raketero: {
        title: "Raketero Gigs",
        image: "raketero.png",
        developed: "Developed in 2026",
        why: "To provide a platform for local freelancers to find quick work.",
        about: "A community-driven marketplace for local side hustles and digital service offerings."
    },

    lopea_portfolio: {
        title: "Personal Engineering Portfolio",
        image: "lopea-portfolio.png",
        developed: "Developed in 2026",
        why: "To showcase my academic background, technical skills, and software engineering projects.",
        about: "A custom-built digital portfolio designed to reflect my professional identity as a Computer Engineering student."
    }
};

function toggleMenu() {
    document.body.classList.toggle("menu-active");
}

const nameText = "Hello, I'm LJ C. Lopeña";
let textIndex = 0;
let isDeleting = false;

function continuousType() {
    const currentText = document.getElementById("typing-name");
    if (!currentText) return;

    if (!isDeleting && textIndex <= nameText.length) {
        currentText.innerHTML = nameText.substring(0, textIndex + 1);
        textIndex++;
        if (textIndex === nameText.length) {
            isDeleting = true;
            setTimeout(continuousType, 1500); 
            return;
        }
    } else if (isDeleting && textIndex >= 0) {
        currentText.innerHTML = nameText.substring(0, textIndex);
        textIndex--;
        if (textIndex === 0) isDeleting = false;
    }
    setTimeout(continuousType, isDeleting ? 75 : 150);
}

const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (themeBtn && themeIcon) { 
    themeBtn.addEventListener("click", () => {
        const isPink = document.body.classList.toggle("pink-theme");
        document.body.classList.toggle("blue-theme");

        if (isPink) {
            themeIcon.src = "sunset-.png";
        } else {
            themeIcon.src = "moon-phase.png";
        }
    });
}


function openModal(id) { document.getElementById(id).style.display = "flex"; }
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    modal.style.display = "none";
}

window.onload = continuousType;

function showProjects() {
    const home = document.getElementById('home-content');
    if (home) home.classList.add('hidden');

    const projects = document.getElementById('project-details');
    if (projects) projects.classList.remove('hidden');
}
function showHome() {
    const home = document.getElementById('home-content');
    if (home) home.classList.remove('hidden');

    const sections = ['project-details', 'about-me', 'contact-me'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.add('hidden');
            el.style.display = "none";
        }
    });


    document.body.classList.remove("menu-active");
}

function openProjectDetails(key) {
    const data = projectData[key];
    if (!data) return;

    const modal = document.getElementById('project-modal');
    const imgContainer = document.getElementById('modal-image-container');
    const detailsContainer = document.getElementById('modal-details-container');

    imgContainer.innerHTML = `<img src="${data.image}" class="modal-img">`;
    detailsContainer.innerHTML = `
        <h2 style="color:var(--accent-color); margin-top:0;">${data.title}</h2>
        <p><strong>Developed:</strong> ${data.developed}</p>
        <p><strong>Why:</strong> ${data.why}</p>
        <p><strong>About:</strong> ${data.about}</p>
    `;

    modal.classList.remove('hidden');
    modal.style.display = "flex";
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    modal.style.display = "none";
}

function showAbout() {
    const home = document.getElementById('home-content');
    if (home) home.classList.add('hidden');

    const projects = document.getElementById('project-details');
    if (projects) projects.classList.add('hidden');

    const about = document.getElementById('about-me');
    if (about) {
        about.classList.remove('hidden');
        about.style.display = "flex"; 
    }
    
    document.body.classList.remove("menu-active");
}

function showContact() {
    document.getElementById('home-content').classList.add('hidden');
    document.getElementById('project-details').classList.add('hidden');
    document.getElementById('about-me').classList.add('hidden');
    
    const contactSection = document.getElementById('contact-me');
    contactSection.classList.remove('hidden');
    contactSection.style.display = "flex";

    document.body.classList.remove("menu-active");
}
