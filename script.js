// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    // Remove the "active" class from the previously active button
    document.querySelector("#filter-buttons .active").classList.remove("active");
    // Add the "active" class to the clicked button
    e.target.classList.add("active");

    // Get the filter type from the clicked button's data attribute
    const filterType = e.target.dataset.filter;

    filterableCards.forEach(card => {
        // Show card if it matches the filter or if the filter is "all"
        if (card.dataset.name === filterType || filterType === "all") {
            card.classList.remove("hide");
            card.classList.add("fade-in");  // Optional fade-in effect
        } else {
            card.classList.add("hide");
        }
    });
}

// Add click event listeners to all filter buttons
filterButtons.forEach(button => button.addEventListener("click", filterCards));
