const url = "https://montoyajosh.github.io/wdd230/Chamber-of-Commerce/json/events.json";

fetch(url)
.then(function (response) {
    return response.json();
})
.then(function (json) {
    const events = json['events'];
            
    events.forEach(event => {
        let contents = document.createElement("p");
        contents.innerHTML = event;
        document.getElementById("events").appendChild(contents);
    });    
});

