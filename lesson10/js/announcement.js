const options2 = {
    weekday: "long"
}

const day_name = new Date().toLocaleDateString('PST', options2)
if (day_name == "Friday") {
    document.getElementsByClassName("friday")[0].classList.toggle("show_announcement");
}