const items = [
    {
        product_no: 1,
        product_name: "Elegant Dress",
        product_price: 2400,
        product_desc: "A sophisticated dress perfect for special occasions. It's comfortable and stylish, making you stand out in any event.",
        product_image: "image/a1.jpg",
        product_color: "Black",
        product_size: "Medium",
        gender: "women"
    },
    {
        product_no: 2,
        product_name: "Cozy Cardigan",
        product_price: 1300,
        product_desc: "Stay warm and stylish with this cozy cardigan. It's perfect for layering and adds a touch of elegance to any outfit.",
        product_image: "image/a2.jpg",
        product_color: "Gray",
        product_size: "Large",
        gender: "women"
    },
    {
        product_no: 3,
        product_name: "Classic Trench Coat",
        product_price: 4200,
        product_desc: "A timeless trench coat that never goes out of style. It's versatile and perfect for both casual and formal occasions.",
        product_image: "image/a3.jpg",
        product_color: "Beige",
        product_size: "Small",
        gender: "women"
    },
    {
        product_no: 4,
        product_name: "Stylish Handbag",
        product_price: 1500,
        product_desc: "Add flair to your outfit with this stylish handbag. It's spacious enough to carry all your essentials while complementing your look.",
        product_image: "image/a4.jpg",
        product_color: "Brown",
        product_size: "small",
        gender: "women"
    },
    {
        product_no: 5,
        product_name: "Comfortable Sneakers",
        product_price: 2500,
        product_desc: "Walk in comfort and style with these sneakers. They're perfect for running errands or casual outings.",
        product_image: "image/a5.jpg",
        product_color: "White",
        product_size: "Medium",
        gender: "women"
    },
    {
        product_no: 6,
        product_name: "Chic Sunglasses",
        product_price: 3500,
        product_desc: "Protect your eyes and add a touch of chic to your look with these sunglasses. They're perfect for sunny days.",
        product_image: "image/a6.jpg",
        product_color: "white",
        product_size: "large",
        gender: "women"
    },
    {
        product_no: 7,
        product_name: "Nike",
        product_price: 7500,
        product_desc: "Protect your eyes and add a touch of chic to your look with these sunglasses. They're perfect for sunny days.",
        product_image: "image/1.jpg",
        product_color: "Black",
        product_size: "small",
        gender: "boys"
    },
    {
        product_no: 8,
        product_name: "Adidas",
        product_price: 8000,
        product_desc: "Protect your eyes and add a touch of chic to your look with these sunglasses. They're perfect for sunny days.",
        product_image: "image/2.jpg",
        product_color: "black",
        product_size: "large",
        gender: "boys"
    },
    {
        product_no: 9,
        product_name: "Lacoste",
        product_price: 4000,
        product_desc: "Protect your eyes and add a touch of chic to your look with these sunglasses. They're perfect for sunny days.",
        product_image: "image/3.jpg",
        product_color: "Black",
        product_size: "medium",
        gender: "boys"
    },
    {
        product_no: 10,
        product_name: "Nike",
        product_price: 5000,
        product_desc: "Protect your eyes and add a touch of chic to your look with these sunglasses. They're perfect for sunny days.",
        product_image: "image/4.jpg",
        product_color: "Black",
        product_size: "large",
        gender: "boys"
    },
    {
        product_no: 11,
        product_name: "Puma",
        product_price: 9000,
        product_desc: "Protect your eyes and add a touch of chic to your look with these sunglasses. They're perfect for sunny days.",
        product_image: "image/5.jpg",
        product_color: "Black",
        product_size: "small",
        gender: "boys"
    },
    {
        product_no: 12,
        product_name: "Jersey",
        product_price: 2500,
        product_desc: "Protect your eyes and add a touch of chic to your look with these sunglasses. They're perfect for sunny days.",
        product_image: "image/6.jpg",
        product_color: "black",
        product_size: "medium",
        gender: "boys"
    },
];

// FILTER PRODICT

 // Event listener for the filter form submission
document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Get filter criteria values from form inputs
    const price = document.getElementById('priceRange').value; // Get price range value
    const gender = document.getElementById('gender').value; // Get gender value
    const color = document.getElementById('color').value.toLowerCase(); // Get color value and convert to lowercase
    const size = document.getElementById('size').value.toLowerCase(); // Get size value and convert to lowercase

    // Filter items based on the criteria
    const filteredItems = items.filter(item => 
        item.product_price <= price && // Filter by price
        (!gender || item.gender === gender) && // Filter by gender
        (!color || item.product_color.toLowerCase() === color) && // Filter by color
        (!size || item.product_size.toLowerCase() === size) // Filter by size
    );

    // Select the container to display filtered products
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = ''; // Clear previous results

    // Loop through filtered items and display them
    filteredItems.forEach(item => {
        productContainer.innerHTML += `
            <div class="col-md-4">
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
            </div>`;
    });
});

// Function to update the current value of the price range input
function updateValue(val) {
    document.getElementById('currentValue').innerText = "Current Price: " + val;
}

// FILTER PRODICT