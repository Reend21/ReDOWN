function showSection(sectionId) {
    const sections = document.querySelectorAll('.setting-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showSection('general');
});
