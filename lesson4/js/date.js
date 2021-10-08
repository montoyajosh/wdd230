document.getElementById("copyrightyear").textContent = new Date().getFullYear();
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
}
document.getElementById("currentdate").textContent = new Date().toLocaleDateString('PST', options)
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove('responsive') };