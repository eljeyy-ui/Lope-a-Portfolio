const projectData = {
    attendance: {
        title: "Student Attendance System",
        image: "attendance.png",
        developed: "Developed in 2025",
        why: "To automate school records and save time.",
        about: "A comprehensive web-based system for tracking student presence using a centralized database."
    },
    raketero: {
        title: "Raketero Gigs",
        image: "raketero.png",
        developed: "Developed in 2026",
        why: "To provide a platform for local freelancers to find quick work.",
        about: "A community-driven marketplace for local side hustles and digital service offerings."
    }
};

function toggleMenu() {
    document.body.classList.toggle("menu-active");
}

// 2. TYPING EFFECT
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

// 3. THEME SWITCHER (Updated for Icons)
const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (themeBtn && themeIcon) { 
    themeBtn.addEventListener("click", () => {
        const isPink = document.body.classList.toggle("pink-theme");
        document.body.classList.toggle("blue-theme");

        if (isPink) {
            // When in Pink mode (Light), show the Sun
            themeIcon.src = "sunset-.png";
        } else {
            // When in Blue mode (Dark), show the Moon
            themeIcon.src = "moon-phase.png";
        }
    });
}

// 4. MODALS
function openModal(id) { document.getElementById(id).style.display = "flex"; }
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    modal.style.display = "none"; // Add this line
}

window.onload = continuousType;

function showProjects() {
    // 1. Hide the Home content (Profile, Name, Motto)
    const home = document.getElementById('home-content');
    if (home) home.classList.add('hidden');

    // 2. Show the Project section
    const projects = document.getElementById('project-details');
    if (projects) projects.classList.remove('hidden');
}
function showHome() {
    // 1. Show Home
    const home = document.getElementById('home-content');
    if (home) home.classList.remove('hidden');

    // 2. Hide everything else
    const sections = ['project-details', 'about-me', 'contact-me'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.add('hidden');
            el.style.display = "none";
        }
    });

    // 3. Close sidebar
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
    modal.style.display = "flex"; // Force it to show
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    modal.style.display = "none"; // Hide it again
}

function showAbout() {
    // Hide Home
    const home = document.getElementById('home-content');
    if (home) home.classList.add('hidden');

    // Hide Projects
    const projects = document.getElementById('project-details');
    if (projects) projects.classList.add('hidden');

    // Show About
    const about = document.getElementById('about-me');
    if (about) {
        about.classList.remove('hidden');
        about.style.display = "flex"; 
    }
    
    // Close sidebar menu
    document.body.classList.remove("menu-active");
}

function showContact() {
    // Hide everything else
    document.getElementById('home-content').classList.add('hidden');
    document.getElementById('project-details').classList.add('hidden');
    document.getElementById('about-me').classList.add('hidden');
    
    // Show Contact
    const contactSection = document.getElementById('contact-me');
    contactSection.classList.remove('hidden');
    contactSection.style.display = "flex";

    // Close menu
    document.body.classList.remove("menu-active");
}