import { createCountry, createCountryByCode, createFirstCountries, } from "./funcs.js";

export const declareEvents = () => {
    let id_form = document.querySelector("#id_form")
    let id_home = document.querySelector("#id_home")
    let select_box = document.querySelector("#id_select_country")
    let input_search = document.querySelector("#id_input")
    let israel_li = document.querySelector("#id_israel_li")
    let USA_li = document.querySelector("#id_USA_li")
    let France_li = document.querySelector("#id_France_li")
    let UK_li = document.querySelector("#id_UK_li")
    let thailand_li = document.querySelector("#id_thailand_li")
    let parent = document.querySelector("#id_row")

    israel_li.addEventListener("click", () => {
        console.log("aaa");
        parent.innerHTML = "";
        createCountryByCode("isr");
    })
    
    USA_li.addEventListener("click", () => {
        console.log("aaa");
        parent.innerHTML = "";
        createCountryByCode("USA");
    })

    France_li.addEventListener("click", () => {
        parent.innerHTML = "";
        createCountryByCode("fra");
    })

    UK_li.addEventListener("click", () => {
        parent.innerHTML = "";
        createCountryByCode("gbr");
    })

    thailand_li.addEventListener("click", () => {
        parent.innerHTML = "";
        createCountryByCode("tha");
    })

    id_form.addEventListener("submit", e => {
        e.preventDefault()
        createCountry(input_search.value);

    })

    id_home.addEventListener("click", ()=>{
        parent.innerHTML = "";
        createFirstCountries();  
    })
}
