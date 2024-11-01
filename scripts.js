function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';

    const tabs = document.querySelectorAll('.nav-tabs a');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelector(`.nav-tabs a[href="#${sectionId}"]`).classList.add('active');
}

