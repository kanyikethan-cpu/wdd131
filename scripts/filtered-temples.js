const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


//for date and last modified
     
const current_year = new Date().getFullYear();
document.getElementById("currentyear").textContent = current_year;
const last_modified = new Date(document.lastModified);
const formatted_date = last_modified.toLocaleDateString();
document.getElementById("lastmodified").textContent = formatted_date;


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:"images/temple1.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/temple2.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/temple3.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/temple4.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/temple5.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/temple6.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/temple7.jpg"
  },
  {
    templeName: "Kona Hawaii Temple",
    location: "Kona, Hawaii, United States",
    dedicated: "2000, January , 24",
    area: 6861,
    imageUrl:"images/temple8.jpg"
  },
  {
    templeName: "Asunción Paraguay Temple",
    location: "Asunción, Paraguay",
    dedicated: "2002, May, 19",
    area: 12325,
    imageUrl: "images/temple9.jpg",
  },
  {
    templeName: "Draper Utah Temple",
    location: "Draper, Utah, United States",
    dedicated: "2009, March, 22",
    area: 58300,
    imageUrl: "images/temple1.jpg"
	
  },

 
];

// Function to create and display temple cards
function displayTemples(temples) {
	const albumContainer = document.getElementById("temple-album");
	albumContainer.innerHTML = "";
	let row="";
	temples.forEach((temple, index) => {
        const loadingMode = index < 2 ? "eager" : "lazy";
		row += `<figure>
					<img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="300" loading="${loadingMode}">
					<figcaption><p class="name">${temple.templeName}</p><p>LOCATION: ${temple.location}</p><p>DEDICATED: ${temple.dedicated}</p><p>AREA: ${temple.area} sq ft</p></figcaption>
				</figure>`;
	});
	albumContainer.innerHTML = row;
}


const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", (event) => {event.preventDefault();
    displayTemples(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", (event) => {event.preventDefault();
    displayTemples(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
});


const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", (event) => {event.preventDefault();
    displayTemples(temples.filter(temple => temple.area > 90000));
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", (event) => {event.preventDefault();
    displayTemples(temples.filter(temple => temple.area < 10000));
});

const homeLink = document.querySelector("#all");
homeLink.addEventListener("click", (event) => {event.preventDefault();
    displayTemples(temples);
});
displayTemples(temples)



