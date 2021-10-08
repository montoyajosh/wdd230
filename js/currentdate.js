const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}
let updated = new Date(document.lastModified).toLocaleString('PST', options);
document.getElementById("currentdate").innerHTML = updated;
const fullyear = `${year}`;
document.getElementById("copyrightyear").textContent = fullyear;