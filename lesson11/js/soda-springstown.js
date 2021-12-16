const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++ ) {

      if (i === 0) {
        let events = towns[i].events;
        
        events.forEach(event => {
            let pContent = document.createElement("p");

            pContent.innerHTML = event

            document.getElementById('events').appendChild(pContent);
        });
      }
    }
  });