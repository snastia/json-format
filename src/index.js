import galaryItemTpl from "./templates/gallery-item.handlebars"
import countries from "./countries.json"

const gallery = document.querySelector(".js-galerry")

console.log(countries)
console.log(galaryItemTpl)

function makeGalerryItems(countries) {
    return countries.map((flag, name, capital, population, currency, language) => {
      return `<li class="gallery__item">
       <div class="gallery__thumb">
         <img src="${flag}" alt="Прапор " width="320">
       </div>
       <h2>${name}</h2>
       <p><b>Столиця: ${capital}</b></p>
       <p><b>Валюта: ${currency}</b></p>
       <p><b>Офиційна мова: ${language}</b> </p>
       <p><b>Населення:</b> ${population}людей</p> 
     </li>`
    })
}