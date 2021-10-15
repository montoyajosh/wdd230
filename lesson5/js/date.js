document.getElementById("copyrightyear").textContent = new Date().getFullYear();
const options1 = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
}
document.getElementById("currentdate").textContent = new Date().toLocaleDateString('PST', options1)
const menubutton = document.querySelector('.menu');
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

menubutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);
hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove('responsive') };

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("list");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

const options2 = {
    weekday: 'long'
}
const day_name = currentdate.toLocaleDateString('PST', options2)
    // console.log(dayName)

if (day_name == "Friday") {
    document.getElementsByClassName("pancake")[0].classList.toggle("is_tomorrow")
}