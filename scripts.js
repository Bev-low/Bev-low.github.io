// Apply previously selected theme from localStorage
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Theme Toggle Button
    document.getElementById('theme-toggle').addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});

// Sample project information
const projectData = {
    "alex-rescue": {
        title: "Alex-the-Rescue-Bot",
        description: "Alex is a rescue bot designed to locate victims in a maze using color sensors and Lidar. Click below for more details."
    },
    "ryan-maze": {
        title: "Ryan-The-Maze-Runner",
        description: "Ryan is a maze-solving bot that can navigate through complex pathways while detecting and reacting to different colors."
    },
    "chatty-charlie": {
        title: "ChattyCharlie",
        description: "ChattyCharlie is a chatbot that helps manage tasks through a command-line interface. It demonstrates object-oriented programming and data structures."
    },
    "buff-budy": {
        title: "BuffBudy",
        description: "BuffBudy is a fitness tracker application designed to help users organize workout programs and track progress."
    }
};

// Open modal on clicking a project card
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectId = this.getAttribute('data-id');
        openModal(projectData[projectId]);
    });
});

function openModal(project) {
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-description').innerText = project.description;

    const modal = document.getElementById('project-modal');
    modal.classList.remove('hidden');
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable background scroll
}

// Close the modal on clicking the close button
document.querySelector('.close-button').addEventListener('click', function() {
    const modal = document.getElementById('project-modal');
    modal.style.display = "none";
    modal.classList.add('hidden');
    document.body.style.overflow = "auto"; // Enable background scroll
});

// Close modal by clicking outside of the modal content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        modal.style.display = "none";
        modal.classList.add('hidden');
        document.body.style.overflow = "auto";
    }
});

// Close modal by pressing the "Escape" key
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('project-modal');
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
        modal.classList.add('hidden');
        document.body.style.overflow = "auto";
    }
});


