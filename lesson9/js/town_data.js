const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++ ) {

      if (i === 0 || i === 2 || i === 6) {
        let section = document.createElement('section');
        let content = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let img = document.createElement('img');
        
        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        p1.textContent = `Year Founded: ${towns[i].yearFounded}`;
        p2.textContent = `Population: ${towns[i].currentPopulation}`;
        p3.textContent = `Annual Rain Fall: ${towns.averageRainfall}`;
        img.setAttribute('src', `/wdd230/lesson9/images/${towns[i].photo}`);
        img.setAttribute('alt', `${towns[i].name} photo.`);

        content.appendChild(h2);
        content.appendChild(h3);
        content.appendChild(p1);
        content.appendChild(p2);
        content.appendChild(p3);
        section.appendChild(content);
        section.appendChild(img);

        document.querySelector('#towns').appendChild(section);
      }
    }
  });

  