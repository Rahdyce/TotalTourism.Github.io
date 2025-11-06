// constant reference to hero section for later use
const heroSection = document.querySelector('.hero-section');

// Get references to the interactive elements
const stateInput = document.getElementById('state-input');
const submitButton = document.getElementById('state-submit-btn');
const resultsContainer = document.getElementById('city-results-container');

// --- NEW: Get references to main content containers ---
const mainPageContent = document.getElementById('main-page-content');
const cityDetailsSection = document.getElementById('city-details-section');


// --- Data for City Details ---
const cityData = {
    savannah: {
        name: "Savannah, Georgia",
        description: "Explore the historic charm, cobblestone streets, and Spanish moss-draped parks of Savannah.",
        destinations: [
            
            {
                name: "Food",
                description: "Places to eat in Savannah, GA.",
                imageUrl: "other photos/traditionalgeorgiacuisines.jpg"
            },
            {
                name: "Things To Do",
                description: "Events, Museums, Recreational Activities, etc in Savannah, GA",
                imageUrl: "other photos/thingstodo.jpg"
            },
            {
                name: "Lodging",
                description: "Where do you want to stay? Hostels, hotels, and airbnbs",
                imageUrl: "other photos/lodgingsav.jpg"
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
                imageUrl: "other photos/traditionalgeorgiacuisines.jpg"
            },
            {
                name: "Things To Do",
                description: "Events, Museums, Recreational Activities, etc in Perry, GA",
                imageUrl: "savannah_perry location_photos/fairgroundsperryphoto.jpg"
            },
            {
                name: "Lodging",
                description: "Where do you want to stay? Hostels, hotels, and airbnbs",
                imageUrl: "other photos/lodgingperry.jpg"
            }
        ]
    }
};

// --- Function to Show City Details Page ---
function showCityDetails(cityKey) {
    const city = cityData[cityKey];
    if (!city) return;

// 1. Generate the HTML for the destination cards
const destinationsHTML = city.destinations.map(dest => `
        <div class="destination-card">
        <img src="${dest.imageUrl}" alt="${dest.name}" onerror="this.src='httpsG://placehold.co/400x300/ccc/FFFFFF?text=Image+Not+Found'">
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
        <div class="destinations-grid" style="margin-top: 40px;">
        ${destinationsHTML}
 </div>
    <button id="back-to-main-btn" class="back-button" style="margin-top: 50px;">Back to Search</button>`;

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

    }
});