document.getElementById("copyrightyear").textContent = new Date().getFullYear();
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}
let updated = new Date(document.lastModified).toLocaleString('PST', options);
document.getElementById("lastupdated").innerHTML = updated;