
// JS PRODUCT DISPLAY
// Select the container where the products will be displayed
const productList = document.getElementById("product-list");

// Loop through each item and create the HTML structure for each product
items.forEach(item => {
    // Create elements for the product
    const productDiv = document.createElement("div");
    productDiv.classList.add("col-md-4");
    productDiv.innerHTML = `
        <div class="card bg-dark">
            <!-- card image top -->
            <img src="${item.product_image}" class="card-img-top">
            <!-- card image top -->

            <!-- start of the card body -->
            <div class="card-body g-2"">
                <!-- Card title -->
                <h3 class="card-title text-white">
                    ${item.product_name}
                </h3>
                <!-- card title -->

                <!-- card subtitle -->
                <h5 class="card-subtitle text-white">
                    ₱${item.product_price}
                </h5>
                <!-- card subtitle -->

                <!-- Quick preview link -->
                <a class="m-5" data-bs-toggle="modal" data-bs-target="#${item.product_no}modal">
                    <h5>QUICK PREVIEW</h5>
                </a>
                <br>
                <!-- Quick preview link -->

                <!-- Add to Cart button -->
                <button class="btn btn-secondary btn-add-to-cart" >Add to Cart</button>
                <!-- Add to Cart button -->
            </div>
            <!-- end of the card body -->
        </div>
    `;

    // Append the product to the product list container
    productList.appendChild(productDiv);
});
// JS PRODUCT DISPLAY







// PRODUCTS MODAL
// Loop through each item and create the modal for each product
items.forEach(item => {
    // Create a unique ID for the modal using the product number
    const modalId = `${item.product_no}modal`;

    // Create the modal structure
    const modal = document.createElement("div");
    modal.classList.add("modal", "fade"); // Add classes for styling (modal and fade)
    modal.id = modalId; // Set the modal ID to the unique ID created
    modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered modal-lg"> <!-- Modal dialog -->
            <div class="modal-content"> <!-- Modal content -->
                <div class="modal-header bg-dark text-white"> <!-- Modal header -->
                    <!-- Modal title -->
                    <h3>${item.product_name}</h3>
                </div>
                <div class="modal-body bg-dark "> <!-- Modal body -->
                    <div class="row">
                        <!-- Left column for product image -->
                        <div class="col-6">
                            <img src="${item.product_image}" class="img-fluid card-img-top"> <!-- Product image -->
                        </div>
                        <!-- Right column for product details -->
                        <div class="col-6">
                            <!-- Product price -->
                            <h2>${item.product_price} php</h2>
                            <br>
                            <!-- Select color -->
                            <h4>Select a color:</h4>
                            <div class="form-group">
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="color" id="color1" value="Black">
                                <label class="form-check-label" for="color1">Black</label>
                              </div>
                              <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="color" id="color2" value="White">
                                <label class="form-check-label" for="color2">White</label>
                              </div>
                            </div>
                            <br>
                            <!-- Product size -->
                            <h4>Product Size</h4>
                            <div class="btn-group mb-2">
                                <button type="button" class="btn btn-secondary filter-btn" data-size="small">Small</button>
                                <button type="button" class="btn btn-secondary filter-btn" data-size="medium">Medium</button>
                                <button type="button" class="btn btn-secondary filter-btn" data-size="large">Large</button>
                            </div>
                            <br>
                            <!-- Accordion for product specifications -->
                            <div class="accordion" id="accordionparent">
                                <div class="accordion-item w-80">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#${modalId}productmodal">
                                            <h5 class="text-white">Specification</h5>
                                        </button>
                                    </h2>
                                    <div class="accordion-collapse collapse bg-secondary " id="${modalId}productmodal" data-bs-target="#accordionparent">
                                        <div class="accordion-body">
                                            <!-- Product description -->
                                            <p>${item.product_desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal footer with buttons -->
                <div class="modal-footer bg-dark">
                    <!-- Add to cart button -->
                    <button class="btn btn-primary btn-add-to-cart ">Add to cart</button>
                    <!-- Close modal button -->
                    <button class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                </div>
            </div>
        </div>
    `;

    // Append the modal to the body
    document.body.appendChild(modal);
});
// PRODUCTS MODAL







// ADD TO CART MODAL
// Retrieve the cart items from local storage, or initialize an empty array if no items are stored
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll(".btn-add-to-cart").forEach((button, index) => {
    // Add click event listener to each "Add to Cart" button
    button.addEventListener("click", () => {
        // Get the selected item from the items array based on the button's index
        const selectedItem = items[index];
        // Add the selected item to the cart
        cart.push(selectedItem);
        // Update the display of the cart
        updateCartDisplay();
        // Show an alert message indicating successful addition to the cart
        alert("ADDED SUCCESFULLY :)")
        // Store the updated cart in local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});

// Function to update the display of the cart
function updateCartDisplay() {
    // Get the cart container element
    const cartContainer = document.getElementById("cart-container");
    // Clear the cart container
    cartContainer.innerHTML = ""; 

    // Initialize total price variable
    let total = 0;

    // Loop through each item in the cart
    cart.forEach((item, index) => {
        // Create a div element for each cart item
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.innerHTML = `
        <div class="row g-2">
            <div class="col-md-4">
                <img src="${item.product_image}" alt="${item.product_name}" class="img-fluid" height="200px" width="200">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-white">${item.product_name}</h5>
                    <p class="card-text text-white">Price: ₱${item.product_price}</p>
                    <p class="card-text text-white">${item.product_desc}</p>
                    <button class="btn btn-danger btn-remove" data-index="${index}">Remove</button>
                </div>
            </div>
        </div>
        `;
        // Append the cart item div to the cart container
        cartContainer.appendChild(cartItemDiv);

        // Update total price
        total += item.product_price;
    });

    // Create a div element for displaying total price
    const totalPriceDiv = document.createElement("div");
    totalPriceDiv.innerHTML = `<h4 class="text-white">Total: ₱${total}</h4>`;
    // Append total price div to the cart container
    cartContainer.appendChild(totalPriceDiv);

    // Add event listeners to "Remove" buttons
    document.querySelectorAll(".btn-remove").forEach(button => {
        // Add click event listener to each "Remove" button
        button.addEventListener("click", (event) => {
            // Get the index of the item to be removed from the cart
            const index = event.target.dataset.index;
            // Remove the item from the cart array
            cart.splice(index, 1);
            // Update the display of the cart
            updateCartDisplay();
            // Store the updated cart in local storage
            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });
}

// Call the updateCartDisplay function to initially display the cart
updateCartDisplay();
// ADD TO CART MODAL








// SEARCH FUNCTION
// Function to display items in the product container
function displayItems(itemsToDisplay) {
    // Select the product container
    const productContainer = document.getElementById('productContainer');
    // Clear previous results
    productContainer.innerHTML = ''; 
    
    // Loop through each item to display
    itemsToDisplay.forEach(item => {
        // Create HTML structure for each product
        const productDiv = document.createElement("div");
        productDiv.classList.add("col-md-4", "mb-5");
        productDiv.innerHTML = `
            <!-- Product suggestion -->
            <h2 class="text-dark">suggestion</h2>
            </div>
            <div class="card bg-dark">
            <!-- Card image -->
            <img src="${item.product_image}" class="card-img-top">
            <!-- Card image -->

            <!-- Card body -->
            <div class="card-body g-2">
                <!-- Card title -->
                <h3 class="card-title text-white">
                    ${item.product_name}
                </h3>
                <!-- Card title -->

                <!-- Card subtitle -->
                <h5 class="card-subtitle text-white">
                    <!-- Product price, description, color, size, and gender -->
                    <p class="card-text">₱${item.product_price}</p>
                    <p class="card-text">${item.product_desc}</p>
                    <p class="card-text">Color: ${item.product_color}</p>
                    <p class="card-text">Size: ${item.product_size}</p>
                    <p class="card-text">Gender: ${item.gender}</p>
                </h5>
                <!-- Card subtitle -->

                <!-- Quick preview link -->
                <a class="m-5" data-bs-toggle="modal" data-bs-target="#${item.product_no}modal">
                    <h5>QUICK PREVIEW</h5>
                </a>
                <br>
                <!-- Quick preview link -->

                <!-- Add to Cart button -->
                <button class="btn btn-secondary btn-add-to-cart">Add to Cart</button>
                <!-- Add to Cart button -->
            </div>
            <!-- End of card body -->
        </div>
        `; 

        // Append the product to the product container
        productContainer.appendChild(productDiv);
    });
}

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', function() {
    // Get the search term from the input field and convert to lowercase
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Filter items based on the search term
    const filteredItems = items.filter(item => {
        return item.product_name.toLowerCase().includes(searchTerm) ||
                item.product_desc.toLowerCase().includes(searchTerm) ||
                item.product_color.toLowerCase().includes(searchTerm) ||
                item.gender.toLowerCase().includes(searchTerm) ||
                item.product_size.toLowerCase().includes(searchTerm);
    });
    
    // Display the filtered items
    displayItems(filteredItems);
});

// SEARCH FUNCTION






