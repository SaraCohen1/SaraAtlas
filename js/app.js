import { saveData ,createFirstCountries } from "./funcs.js";
import { declareEvents } from "./events.js";
const init = () => {
    doApi();
    declareEvents();
};



const doApi = async () => {
    let url = `https://restcountries.com/v3.1/all?fields=name,region,population,capital,languages,flags,latlng,cca3,borders,maps`;
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
    saveData(data);
    createFirstCountries();
}

init();