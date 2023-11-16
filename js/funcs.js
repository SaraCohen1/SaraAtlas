import Country from "./CountryClass.js";
let allCountries_ar = [];
const firstCountries = ["israel","united states","france","united kingdom","thailand",];

export const saveData = (_data) => {
    allCountries_ar = _data
}

const showLoading = () => {
    document.querySelector("#id_loading").style.display = "block";
    document.querySelector("#id_row").style.display = "none";
}

const hideLoading = () => {
    document.querySelector("#id_loading").style.display = "none";
    document.querySelector("#id_row").style.display = "flex";
}


export const createCountryByCode = (_input) => {
    hideLoading();

    let arr = allCountries_ar.filter((item) =>
        item.cca3.toLowerCase().includes(_input.toLowerCase())
    );
    if (_input === "") {
        alert("empty");
    } else if (arr.length > 0) {
        arr.forEach((item) => {
            let country = new Country("#id_row", item, getNameByCode,createFirstCountries, createCountryByCode);
            country.render();
        });
    } else {
        document.querySelector("#id_row").innerHTML = `<h2>The Country ${_input} is  not found </h2>`;
    }
}
export const getNameByCode = async (code) => {
    let url = `https://restcountries.com/v3.1/alpha/${code}`;
    let resp = await fetch(url);
    let data = await resp.json();
    return data[0].name.common;
  }

export const createFirstCountries = () => {
    hideLoading();
    let temp = allCountries_ar.filter((item) =>
      firstCountries.includes(item.name.common.toLowerCase())
    );
    temp.forEach((item) =>  {
        let country = new Country("#id_row", item, getNameByCode,createFirstCountries, createCountryByCode);
        country.render2();
    })
}



export const createCountry = (_input) => {

    document.querySelector("#id_row").innerHTML = "";
  
    let arr = allCountries_ar.filter((item) =>
      item.name.common.toLowerCase().includes(_input.toLowerCase())
    );
    if (arr.length > 0) {
      arr.forEach((item) => {
        let country = new Country("#id_row", item, getNameByCode,createFirstCountries, createCountryByCode);
        country.render2();
      });
    } else {
      document.querySelector("#id_row").innerHTML = `<h2>Country ${_input} is  not found </h2>`;
    }
 
  }