document.getElementById("copyrightyear").textContent = new Date().getFullYear();
document.getElementById("currentdate").textContent = new Date().toLocaleDateString('PST', options1)
const options1 = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}