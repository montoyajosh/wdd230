const lastvisit = document.querySelector('#lastvisited');
const dt = new Date();
function set_date_last_visit() {
    localStorage.setItem('date_visit', dt);
}
function check_date_last_visit() {
    if (localStorage.getItem("date_visit") === null) {
        set_date_last_visit()
    }
}
function get_date_last_visit(lastvisit) {
    var last_visit = new Date(window.localStorage.getItem("date_visit"));
    const new_visit = dt;
    if (last_visit.getTime <= new_visit.getTime) {
        var diff_in_Time = new_visit.getTime() - last_visit.getTime();
        var diff_in_Days = diff_in_Time / (1000 * 3600 * 24);
        var days = Math.round(diff_in_Days)
        lastvisit.textContent = days;
    }
}
check_date_last_visit()
get_date_last_visit(lastvisit)
set_date_last_visit()

// //#for checking, remove "//" below and then reload the page 2 times.
// localStorage.removeItem('date_visit');
// const fakedt = new Date("Thu Oct 28 2021 00:00:00 GMT+0800 (Philippine Standard Time)");
// localStorage.setItem('date_visit', fakedt);
// //#end