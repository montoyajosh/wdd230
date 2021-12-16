document.querySelector('.gridbutton').addEventListener('click', () => {
    document.querySelector('.directory').classList.add('grid');
    document.querySelector('.directory').classList.remove('list');
}, false);

document.querySelector('.listbutton').addEventListener('click', () => {
    document.querySelector('.directory').classList.add('list');
    document.querySelector('.directory').classList.remove('grid');
}, false);
//#endregion

//#region Create Directory
const directory = 'json/directory.json';

fetch(directory).then((response) => response.json()).then((jsonObject) => {

    //#region Organizations   
    Object.keys(jsonObject.organizations).forEach(i => {
        console.log(jsonObject.organizations[i]);
        let div = document.createElement('div');
        div.classList.add('storediv');

        let name = document.createElement('h3');
        
        let address = document.createElement('p');
        address.textContent = jsonObject.organizations[i].address;

        let phone = document.createElement('p');
        phone.textContent = jsonObject.organizations[i].phone;

        if (jsonObject.organizations[i].website != "") {
            let website = document.createElement('a');
            website.setAttribute('href', jsonObject.organizations[i].website);
            website.setAttribute('target', "_blank");
            website.textContent = jsonObject.organizations[i].name;

            name.appendChild(website);
            div.appendChild(name);
        } else {
            div.appendChild(name);
        }
        
        div.appendChild(address);
        div.appendChild(phone);

        document.querySelector('div.directory').appendChild(div);
    })
});