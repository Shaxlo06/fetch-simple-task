"use strict"

fetch("https://jsonplaceholder.typicode.com/photos")
.then(response => response.json())
.then(data => {
    let photos = data.slice(0, 30)
    
    photos.forEach(user => {
        
        let container = document.querySelector(".container")
        let temp = document.querySelector(".template").content.cloneNode(true)
        let newFragment =  document.createDocumentFragment();
        let p = temp.querySelector(".card-text")
        let img = temp.querySelector(".card-img-top")
        
        p.innerText = user.title
        img.src = user.url
        
        newFragment.appendChild(temp)
        container.appendChild(newFragment)
    });
    
    
});


