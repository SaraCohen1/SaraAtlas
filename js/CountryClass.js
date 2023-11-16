export default class Country {
  constructor(_parent, _item, getNameByCode, createFirstCountries, createCountryByCode) {
    this.createFirstCountries = createFirstCountries;
    this.getNameByCode = getNameByCode;
    this.createCountryByCode = createCountryByCode;
    this.parent = _parent;
    this.name = _item.name.common;
    this.pop = _item.population.toLocaleString();
    this.capital = _item.capital ? _item.capital : "none";
    this.languages = _item.languages ? Object.values(_item.languages).join() : "none";
    this.image = _item.flags.png;
    this.region = _item.region;
    this.lat = _item.latlng[0];
    this.lon = _item.latlng[1];
    this.countryCode = _item.cca3;
    this.borders = _item.borders;
    this.map = _item.maps.googleMaps;
  }

  render() {
    console.log(this.languages);
    let myDiv = document.createElement("div");
    document.querySelector(this.parent).append(myDiv);
    document.querySelector(this.parent).className = "row";

    myDiv.innerHTML += `
        <div class="myDiv row">
        <div class="col-xl-6 p-2 text-white">
        <h4 class="text-center">${this.name}</h4>
        <h4>population: ${this.pop}</h4>
        <h4>capital: ${this.capital}</h4>
        <h4>languages: ${this.languages}</h4>
        <h4>region: ${this.region}</h4>
        <h4 class="card-text" id="id_borders"> Borders: </h4>
        <button id="to_home" class="btn btn-outline-light m-2  ms-1">HOME</button>
        <img src="${this.image}" width="100%"  alt="${this.name}" >
        </div>
        <div class="col-xl-6 p-0 ">
        <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
        src="https://maps.google.com/maps?q=${this.lat},${this.lon}&hl=en&z=7&amp;output=embed">
        </iframe>
        </div>
        </div>
        `;
    if (this.borders) {
      this.borders.forEach(async (item) => {
        let longNmae = await this.getNameByCode(item);
        let span = document.createElement("span");
        span.className = "lank"
        span.style.cursor="pointer"

        span.innerHTML = `${longNmae} `;
        document.querySelector("#id_borders").append(span);
        span.addEventListener("click", () => {
          document.querySelector(this.parent).innerHTML = "";
          this.createCountryByCode(item);
        });

      });
    } else { document.querySelector("#id_borders").innerHTML += "none" }

    let btn = myDiv.querySelector("#to_home")
    btn.addEventListener("click", () => {
      document.querySelector(this.parent).innerHTML = "";
      this.createFirstCountries();
    })
  }

  render2() {

    let mydiv = document.createElement("div");
    mydiv.className = "d-flex justify-content-center my-3 text-center";
    document.querySelector(this.parent).append(mydiv);
    document.querySelector(this.parent).className = "row row-cols-lg-3 row-cols-md-2 justify-content-around"
    mydiv.innerHTML += `
        <div class="myDiv card my_card h-100 border-0 ">
        <img src="${this.image}" class=" myImg shadow " width="100%" alt="${this.name}">
        <div class="card-body">
        <p class="pnew card-text Mcard-text m-0 p-3">Name: ${this.name} </p>
        </div>
        </div>`;
    mydiv.querySelector(".my_card").addEventListener("click", () => {
      document.querySelector("#id_row").innerHTML = "";
      this.render();
    });


  }

}