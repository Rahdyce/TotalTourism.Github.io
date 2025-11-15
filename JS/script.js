// constant reference to hero section for later use
const heroSection = document.querySelector('.hero-section');

// Get references to the interactive elements
const stateInput = document.getElementById('state-input');
const submitButton = document.getElementById('state-submit-btn');
const resultsContainer = document.getElementById('city-results-container');

// --- NEW: Get references to main content containers ---
const mainPageContent = document.getElementById('main-page-content');
const cityDetailsSection = document.getElementById('city-details-section');

const touristInformationSection = document.getElementById('tourist-information-section');



// --- Data for City Details ---
const cityData = {
    savannah: {
        name: "Savannah, Georgia",
        description: "Explore the historic charm, cobblestone streets, and Spanish moss-draped parks of Savannah.",
        destinations: [            
            {
                name: "Food",
                description: "Places to eat in Savannah, GA.",
                imageUrl: "other photos/traditionalgeorgiacuisines.jpg",
                extraInfo: [                   
                    {
                        name: "The Olde Pink House",
                        description: "Historic Southern fine dining.",
                        details: {
                        address: "23 Abercorn St, Savannah, GA 31401",
                        phone: "(912) 232-4286",
                        website: "https://www.theoldepinkhouserestaurant.com/"
                        }
                    },
                    {
                        name: "Mrs. Wilkes’ Dining Room",
                        description: "Family-style Southern classics.",
                        details: {
                        address: "107 W Jones St, Savannah, GA 31401",
                        phone: "(912) 232-5997",
                        website: "https://mrswilkes.com/"
                        }
                    },
                    {
                        name: "Leopold’s Ice Cream",
                        description: "A must-visit dessert spot since 1919.",
                        details: {
                        address: "212 E Broughton St, Savannah, GA 31401",
                        phone: "(912) 234-4442",
                        website: "https://www.leopoldsicecream.com/"
                        }
                    }
                 ]            
            },
            {
                name: "Things To Do",
                description: "Events, Museums, Recreational Activities, etc in Savannah, GA",
                imageUrl: "other photos/thingstodo.jpg",
                extraInfo: [                   
                    {
                        name: "River Street",
                        description: "Savannah's Waterfront hub with shops, dining, and entertainment. Here you can stroll along the cobblestone streets, enjoy scenic views of the Savannah River, and explore a variety of boutiques, galleries, and eateries. Some of these places include Wet Willies, Joes Crab Shack, and the Savannah MarketPlace." ,
                        details: {
                        address: "River St, Savannah, GA 31401",
                        phone: "(912) 234-4608",
                        website: "https://visitsavannah.com/"
                        }
                    },
                    {
                        name: "Front Porch Improv",
                        description: "Interested in comedy? Check out Front Porch Improv for some laughs and fun times. They offer improv shows, classes, and workshops for all skill levels. Whether you're a beginner or an experienced performer, Front Porch Improv provides a welcoming and supportive environment to explore the art of improvisation. Check out their website for showtimes and class schedules.",
                        details: {
                        address: "210 W Victory Dr, Savannah, GA 31405",
                        phone: "(843) 868-1553",
                        website: "https://www.frontporchimprov.com/"
                        }
                    },
                    {
                        name: "Savannah Riverboat Cruises",
                        description: "Go for a cruise down the Savannah River and see marvelous sights while enjoying a nice meal.",
                        details: {
                        address: "9 East River Street, Savannah, GA 31412",
                        phone: "(912) 472-1501",
                        website: "https://savannahriverboat.com/all-cruises/"
                        }
                    }
                 ]            
            },
            {
                name: "Lodging",
                description: "Savannah offers many lodging options including hotels, and Airbnbs. Some are even locateed near Savannah's Historic District. Below are some of the top rated hotels and a link to their website for more infomration.",
                imageUrl: "other photos/lodgingsav.jpg",
                extraInfo: [                   
                    {
                        name: "River Street Inn",
                        description: "The Savannah River Street Inn is a charming boutique hotel located in the heart of Savannah's historic district. This elegant inn offers comfortable accommodations with stunning views of the Savannah River and easy access to the city's top attractions, shops, and restaurants. Guests can enjoy amenities such as complimentary breakfast, a rooftop terrace, and personalized service, making it an ideal choice for travelers seeking a memorable stay in Savannah.", 
                        details: {
                        address: "2 W Bay St, Savannah, GA 31401",
                        phone: " (912) 236-6400",
                        website: "https://www.riverstreetinn.com/"
                        }
                    },
                    {
                        name: "Hyatt Regency Savannah",
                        description: "Another Hotel option is the Hyatt Regency Savannah. This upscale hotel is situated along the Savannah River, offering picturesque views and a convenient location for exploring the city's historic district. The Hyatt Regency Savannah features modern amenities, including a rooftop pool, fitness center, and multiple dining options. With its elegant accommodations and excellent service, it's a great choice for both leisure and business travelers visiting Savannah.",
                        details: {
                        address: "210 W Victory Dr, Savannah, GA 31405",
                        phone: "((912) 238-1234",
                        website: "https://www.hyatt.com/hyatt-regency/en-US/savrs-hyatt-regency-savannah?src=corp_lclb_google_seo_savrs&utm_source=google&utm_medium=organic&utm_campaign=lmr"
                        }
                    },
                    {
                        name: "Marriott Savannah Riverfront",
                        description: "Mariott Savannah RiverFront is another top rated hotel located within the savannah Historic District.",
                        details: {
                        address: "100 General McIntosh Blvd, Savannah, GA 31401",
                        phone: "(912) 233-7722",
                        website: "https://www.marriott.com/en-us/hotels/savrf-marriott-savannah-riverfront/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
                        }
                    }
                 ]            
            }
        ]
    },
    perry: {
        name: "Perry, Georgia",
        description: "Discover the heart of Georgia, known for its friendly community and the Georgia National Fairgrounds.",
        destinations: [
            {
                name: "Food",
                description: "Places to eat in Perry, GA.",
                imageUrl: "other photos/traditionalgeorgiacuisines.jpg",
                extraInfo: [                   
                    {
                        name: "The Swanson",
                        description: "Classic Southern cuisine served in a beautiful historic home dating back to the 1790s. It offers a charming atmosphere and home-cooked favorites like fried chicken, collard green soup, and meatloaf. A local favorite for a traditional Southern meal.", 
                        details: {
                        address: "933 Carroll St, Perry, GA 31069",
                        phone: " (478) 987-1938",
                        website: "https://theswanson.com/"
                        }
                    },
                    {
                        name: "Ghost Runner Pizza",
                        description: "This spot stands out for its specialty sourdough crust pizza baked in a wood-fired oven. It offers a unique focus on local craft beer and an upscale-casual, neighborhood vibe in the heart of downtown.",
                        details: {
                        address: "742 Main St, Perry, GA 31069",
                        phone: "N/A",
                        website: "https://ghostrunnerpizza.square.site/"
                        }
                    },
                    {
                        name: "The Perfect Pear",
                        description: "This award-winning cafe specializes in elevating Southern favorites for lunch and Sunday brunch. From their legendary, homemade Pimento Cheese to their creative seasonal salads and comfort sandwiches, every dish is crafted with fresh, local ingredients. It’s the perfect spot for a cozy, charming midday retreat.",
                        details: {
                        address: "922 Carroll St, Perry, GA 31069",
                        phone: "(478) 224-7327",
                        website: "https://www.perfectpearperry.com/"
                        }
                    }
                 ]            
            },
            {
                name: "Things To Do",
                description: "Events, Museums, Recreational Activities, etc in Perry, GA",
                imageUrl: "savannah_perry location_photos/fairgroundsperryphoto.jpg",
                extraInfo: [                   
                    {
                        name: "Go Fish Educational Center",
                        description: "The Go Fish Education Center is a family-friendly attraction located in , Georgia, that offers interactive exhibits and educational programs focused on the local aquatic ecosystem. Visitors can learn about fish species, conservation efforts, and the importance of wetlands through hands-on activities and guided tours. The center also features aquariums, touch tanks, and outdoor trails, making it an engaging destination for all ages to explore and appreciate the natural environment of the region.", 
                        details: {
                        address: "1255 Perry Pkwy, Perry, GA 31069",
                        phone: "(478) 988-6701",
                        website: "https://gofisheducationcenter.com/"
                        }
                    },
                    {
                        name: "Perry National Fairgrounds & Agricenter",
                        description: "Home to the annual Georgia National Fair, the Perry National Fairgrounds & Agricenter is a versatile event venue located in Perry, Georgia. The fairgrounds host a variety of events throughout the year, including agricultural exhibitions, concerts, trade shows, and community gatherings. With spacious facilities, including indoor arenas, outdoor pavilions, and exhibition halls, the fairgrounds provide a dynamic space for both large-scale events and local activities. Visitors can enjoy a range of entertainment options, from thrilling rides and live performances to educational displays and competitions, making it a vibrant hub for fun and culture in the region.",
                        details: {
                        address: " 401 Golden Isles Pkwy, Perry, GA 31069",
                        phone: "(478) 987-3247",
                        website: "https://www.gnfa.com/"
                        }
                    },
                    {
                        name: "Rozar Park",
                        description: "Care for a bit of an outdoor fun time. Well Rozar park is a place to visit. They offer a Disc Golf Course, Fishing Ponds, and playgrounds for the kids.",
                        details: {
                        address: "1060 Keith Dr, Perry, GA 31069",
                        phone: "(478) 988-2860",
                        website: "https://www.perry-ga.gov/leisure-services/parks/rozar-park"
                        }
                    }
                 ]            
            },
            {
                name: "Lodging",
                description: "Where do you want to stay? Hostels, hotels, and airbnbs",
                imageUrl: "other photos/lodgingperry.jpg",
                extraInfo: [                   
                    {
                        name: "Microtel by Wyndham Perry National Fairground Area I-75",
                        description: "This hotel offers good rates and is quite close to the Perry National Fairgrounds. Making it a really great choice if you want to have fun explore all that the fairgrounds, and Perry Ga has to offer.", 
                        details: {
                        address: "110 Fairview Dr, Perry, GA 31069",
                        phone: "(478) 287-4399",
                        website: "https://www.miperry.com/?CID=LC:5b3ss9kd80xe5ox:30985&iata=00093796"
                        }
                    },
                    {
                        name: "TownePlace Suites by Marriott Perry Georgia National Fairgrounds",
                        description: "Another great hotel option is the TownePlace Suites by Marriott Perry Georgia National Fairgrounds. This hotel offers spacious suites with fully equipped kitchens, making it ideal for longer stays or families. Guests can enjoy amenities such as a fitness center, outdoor pool, and complimentary breakfast. Its convenient location near the Perry National Fairgrounds and other local attractions makes it a popular choice for travelers visiting the area.",
                        details: {
                        address: "100 General Courtney Hodges Blvd, Perry, GA 31069",
                        phone: "(478) 732-1148",
                        website: "https://www.gnfa.com/"
                        }
                    },
                    {
                        name: "La Quinta Inn & Suites by Wyndham Perry",
                        description: "La Quinta Inn & Suites by Wyndham Perry is a comfortable and affordable hotel option in Perry, Georgia. It offers modern amenities such as free Wi-Fi, an outdoor pool, and a complimentary breakfast buffet. The hotel is conveniently located near major highways and local attractions, making it a great choice for both business and leisure travelers looking for a pleasant stay in the area.",
                        details: {
                        address: "102 Plaza Dr, Perry, GA 31069",
                        phone: "(478) 287-4431",
                        website: "https://www.wyndhamhotels.com/laquinta/perry-georgia/la-quinta-by-wyndham-perry/overview?CID=LC:6ysy27krtpcrqev:08602&iata=00093796"
                        }
                    }
                 ]            
                
            }
        ]
    }
};

// --- Function to Show City Details Page ---
function showCityDetails(cityKey) {
    const city = cityData[cityKey];
    if (!city) return;

// 1. Generate the HTML for the destination cards
const destinationsHTML = city.destinations.map((dest, index) => `
        <div class="destination-card" data-city="${cityKey}" data-dest-index="${index}" style="cursor:pointer;">
            <img src="${dest.imageUrl}" alt="${dest.name}" onerror="this.src='https://placehold.co/400x300/ccc/FFFFFF?text=Image+Not+Found'">
            <div class="card-content">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
            </div>
        </div>
    `).join('');

// 2. Build the final HTML for the details section
     const cityHTML = `
        <h2>${city.name}</h2>
        <p>${city.description}</p>
        <div class="destinations-grid" style="margin-top:40px;">
            ${destinationsHTML}
        </div>
        <button id="back-to-main-btn" class="back-button" style="margin-top:50px;">Back to Search</button>
    `;

// 3. Inject the HTML and show the details section
    cityDetailsSection.innerHTML = cityHTML;
    cityDetailsSection.style.display = 'block';

// 4. Hide the main page content
    mainPageContent.style.display = 'none';
    heroSection.style.display = 'none'; // hide the hero section when showing city details

// 5. Scroll to the new city details section
    cityDetailsSection.scrollIntoView({ behavior: 'smooth' });
// 6. Add event listener for the new "Back" button
    document.getElementById('back-to-main-btn').addEventListener('click', hideCityDetails);
}


// --- Function to Hide City Details & Show Main Page ---
function hideCityDetails() {
    cityDetailsSection.style.display = 'none';
    mainPageContent.style.display = 'block';
    heroSection.style.display = 'flex';// show the herro section again when going to main page
    document.getElementById('search-section').scrollIntoView({ behavior: 'smooth' }); // ensures smooth croll back to main page 
}

// --- Function to Show Tourist Information & Show pages ---
function showTouristInformation(cityKey, destIndex) {
  const city = cityData[cityKey];
  const dest = city.destinations[destIndex];
  if (!dest) return;

  // Use your main city image (the same one from findCities)
  const cityHeaderImage =
    cityKey === 'savannah'
      ? 'savannah_perry location_photos/savannahgaphoto.jpg'
      : 'savannah_perry location_photos/perrygaphoto.jpg';

  // Build extra info section if available (like restaurants)
  let extraInfoHTML = '';
  if (Array.isArray(dest.extraInfo)) {
    const restaurantList = dest.extraInfo.map((r, index) => `
      <div class="restaurant-box" data-index="${index}">
        <h4>${r.name}</h4>
        <p>${r.description}</p>
        <div class="restaurant-details" style="display: none;">
          <p><strong>Address:</strong> ${r.details.address}</p>
          <p><strong>Phone:</strong> ${r.details.phone}</p>
          <p><a href="${r.details.website}" target="_blank">Visit Website</a></p>
        </div>
      </div>
    `).join('');

    extraInfoHTML = `
      <div class="extra-info">
        <h3>Top Restaurants</h3>
        ${restaurantList}
      </div>
    `;
  } else if (dest.extraInfo) {
    // Fallback if it's plain HTML string
    extraInfoHTML = `<div class="extra-info">${dest.extraInfo}</div>`;
  }

  // Build the main destination HTML
  const destHTML = `
    <div class="tourist-header" style="background-image: url('${cityHeaderImage}');">
      <h2>${city.name}</h2>
    </div>

    <div class="tourist-content">
      <h3>${dest.name}</h3>
      <img src="${dest.imageUrl}" alt="${dest.name}" style="width:100%;max-width:600px;border-radius:8px;margin:20px 0;">
      <p>${dest.description}</p>
      ${extraInfoHTML}
      <button id="back-to-city-btn" class="back-button" style="margin-top:30px;">Back to ${city.name}</button>
    </div>
  `;

  // Inject that HTML into the tourist info section
  touristInformationSection.innerHTML = destHTML;

  // Show only the tourist info section
  touristInformationSection.style.display = 'block';
  cityDetailsSection.style.display = 'none';
  touristInformationSection.scrollIntoView({ behavior: 'smooth' });

  // Add click listeners for restaurant expansion
  document.querySelectorAll('.restaurant-box').forEach(box => {
    box.addEventListener('click', () => {
      const details = box.querySelector('.restaurant-details');
      const isVisible = details.style.display === 'block';
      details.style.display = isVisible ? 'none' : 'block';
    });
  });

  // Back button functionality
  document.getElementById('back-to-city-btn').addEventListener('click', () => {
    touristInformationSection.style.display = 'none';
    cityDetailsSection.style.display = 'block';
    cityDetailsSection.scrollIntoView({ behavior: 'smooth' });
  });
}


// --- Function to handle the state search logic ---
function findCities() {
    // Get the user's input, trim whitespace, and convert to lowercase
    const stateName = stateInput.value.trim().toLowerCase();

    // Clear any previous results
    resultsContainer.innerHTML = '';

    // Check if the state is Georgia
    if (stateName === 'georgia') {
        // If it is, build the HTML for the Savannah and Perry cards
        // We re-use the .destinations-grid and .destination-card styles
        // --- MODIFIED: Added data-city attribute and cursor style ---
        const resultsHTML = `
    <div class="destinations-grid">
        <div class="destination-card" data-city="savannah" style="cursor: pointer;" title="Click for details">
            <img src="savannah_perry location_photos/savannahgaphoto.jpg" alt="Historic Savannah" onerror="this.src='savannahgaphoto.jpg'">
            <div class="card-content">
                <h3>Savannah, Georgia</h3>
                <p>${cityData.savannah.description}</p>
            </div>
        </div>


        <div class="destination-card" data-city="perry" style="cursor: pointer;" title="Click for details">
            <img src="savannah_perry location_photos/perrygaphoto.jpg" alt="Perry, Georgia" onerror="this.src='perrygaphoto.jpg'">
            <div class="card-content">
                <h3>Perry, Georgia</h3>
                <p>${cityData.perry.description}</p>
            </div>
        </div>
    </div>
    `;
        // Insert the HTML into the results container
        resultsContainer.innerHTML = resultsHTML;

    } else if (stateName === '') {
        // If the input is empty
        const emptyMessage = '<p class="info-message">Please enter a state name. (Try "Georgia")</p>';

        resultsContainer.innerHTML = emptyMessage;

    } else {
        // If it's any other state
        const notFoundMessage = '<p class="info-message">Sorry, we are currently only featuring destinations in <strong>Georgia</strong>. Please check back later for more states!</p>';
        resultsContainer.innerHTML = notFoundMessage;
    }
}

// Add a click event listener to the submit button
submitButton.addEventListener('click', findCities);


// Optional: Allow pressing "Enter" in the input field
stateInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        findCities();
    }
});

// --- NEW: Event Delegation for City Card Clicks ---
// Listen for clicks on the results container
resultsContainer.addEventListener('click', (event) => {
    // Find the closest .destination-card that was clicked
    const card = event.target.closest('.destination-card');

    // If a card was clicked and it has a 'data-city' attribute
    if (card && card.dataset.city) {
        showCityDetails(card.dataset.city);

        // Scroll down by correct %
        let unit = document.documentElement.scrollHeight / 100;
        let y_percent = 7.5 * unit;
        window.scrollTo(0, y_percent); // We're setting the scrollTo to y = 7.5% of scroll height

    }
});

// Handle clicks on destination cards (Food, Things To Do, Lodging)
cityDetailsSection.addEventListener('click', (event) => {
    const card = event.target.closest('.destination-card');
    if (card && card.dataset.city && card.dataset.destIndex !== undefined) {
        showTouristInformation(card.dataset.city, card.dataset.destIndex);
    }
});



//Holy Pie Pizzeria:</strong> to positively impact lives, provide exceptional service, and create an environment where both guests and staff feel cared for.