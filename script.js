
const desc = document.querySelector('.opening p');
const headings = document.querySelectorAll('h1, h2');
const ps = document.querySelectorAll('section > p');
const projects = document.querySelectorAll('.project');
const education = document.querySelector('.education');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});
[desc, ...headings, ...ps, ...projects, education].forEach((box) => observer.observe(box));