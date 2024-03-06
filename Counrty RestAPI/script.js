const countriesElem = document.querySelector(".countries")
const dropdown = document.querySelector(".dropdown")
const droplem = document.querySelector(".drop")
const region = document.querySelectorAll(".region")
const regionname = document.getElementsByClassName("regionname")
const search = document.querySelector(".search")
const countryname = document.getElementsByClassName("countryname")
const toggle = document.querySelector(".toggle")
const moon = document.querySelector(".moon")
async function getCountry() {
    const url = await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showcountry(element);
    });
}
getCountry()
function showcountry(data) {
    console.log(data.flags.svg)
    const country = document.createElement("div")
    country.classList.add("country")
    country.innerHTML = `<div class="country-img">
        <img src = ${data.flags.png} alt = "" >
            </div >
        <div class="country-info">
            <h5 class="countryname">${data.name.common}</h5>
            <p><strong>Population</strong>${data.population}</p>
            <p class="regionname"><strong>Region</strong>${data.region}</p>
            <p><strong>Captial</strong>${data.captial}</p>
        </div>`;
    countriesElem.appendChild(country)
}
dropdown.addEventListener("click", () => {
    droplem.classList.toggle("showdropdown")
})
region.forEach(element => {
    element.addEventListener("click", () => {
    Array.from(regionname).forEach(elem => {
        if (elem.innerText.includes(element.innerText) || element.innerText == "All")
            elem.parentElement.parentElement.style.display = "grid"
        else {
            elem.parentElement.parentElement.style.display = "none"
        }
     });
    })
})
search.addEventListener("input", () => {
    Array.from(countryname).forEach(elem => {
        if (elem.innerText.toLowerCase().includes(search.value.toLowerCase()))
            elem.parentElement.parentElement.style.display = "grid"
        else {
            elem.parentElement.parentElement.style.display = "none"
        }
    });
})
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    moon.classList.toggle("fas")
})