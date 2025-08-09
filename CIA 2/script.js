//form validation
const form = document.getElementById("coffeeForm");
    const errorMessage = document.getElementById("errorMessage");
    const greeting = document.getElementById("greeting");

    const storedName = localStorage.getItem("name");
    const storedCoffee = localStorage.getItem("coffee");

    if (storedName && storedCoffee) {
      greeting.textContent = `Hello, ${storedName}! You love ${storedCoffee}.`;
    }


    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const coffee = form.coffee.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !coffee) {
        errorMessage.textContent = "All fields are required.";
        errorMessage.classList.remove("hidden");
      } else if (!emailRegex.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.classList.remove("hidden");
      } else {
        errorMessage.classList.add("hidden");

    
        localStorage.setItem("name", name);
        localStorage.setItem("coffee", coffee);

      
        greeting.textContent = `Hello, ${name}! You love ${coffee}.`;

     
        form.reset();
      }
    });


//geolocation
const locationBtn = document.getElementById("getLocationBtn");
const locationDisplay = document.getElementById("locationDisplay");

locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    locationDisplay.textContent = "Fetching location...";
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(5);
        const lon = position.coords.longitude.toFixed(5);
        locationDisplay.textContent = `Latitude: ${lat}, Longitude: ${lon}`;

        // Optional: Store in localStorage
        localStorage.setItem("latitude", lat);
        localStorage.setItem("longitude", lon);
      },
      (error) => {
        locationDisplay.textContent = "Unable to retrieve location.";
        console.error(error);
      }
    );
  } else {
    locationDisplay.textContent = "Geolocation is not supported by your browser.";
  }
});


//api
const apiUrl = "https://api.sampleapis.com/coffee/hot";
const coffeeList = document.getElementById("coffeeList");
const searchInput = document.getElementById("searchInput");

let coffees = [];


async function fetchCoffee() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    coffees = data.slice(0, 8); // first 8 items
    displayCoffees(coffees);
  } catch (error) {
    coffeeList.innerHTML = "<p class='text-red-500'>Failed to load coffees.</p>";
  }
}


function displayCoffees(coffeeItems) {
  coffeeList.innerHTML = "";

  if (coffeeItems.length === 0) {
    coffeeList.innerHTML = "<p class='text-gray-500'>No coffee found.</p>";
    return;
  }

  coffeeItems.forEach(coffee => {
    const card = document.createElement("div");
    card.className = "border rounded-lg overflow-hidden shadow hover:shadow-md transition bg-gray-50";

    card.innerHTML = `
      <img src="${coffee.image}" alt="${coffee.title}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">${coffee.title}</h3>
        <p class="text-sm text-gray-600 mb-2">${coffee.description || "No description available."}</p>
        <p class="text-sm text-gray-700"><span class="font-semibold">Ingredients:</span> ${coffee.ingredients?.join(", ")}</p>
      </div>
    `;
    coffeeList.appendChild(card);
  });
}


searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = coffees.filter(coffee =>
    coffee.title.toLowerCase().includes(searchTerm)
  );
  displayCoffees(filtered);
});


fetchCoffee();


