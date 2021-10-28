document.getElementById("copyrightyear").textContent = new Date().getFullYear();
const options1 = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}
document.getElementById("currentdate").textContent = new Date().toLocaleDateString('PST', options1)
