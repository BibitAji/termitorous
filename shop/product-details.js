document.addEventListener('DOMContentLoaded', function () {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Simulated product details data (replace with actual data from your backend)
    const productDetails = [];
    for (let i = 1; i <= 100; i++) {
        productDetails.push({
            id: i,
            name: `Product ${i}`,
            price: Math.floor(Math.random() * 50) + 1, // Harga acak antara 1 dan 50
            imageUrl: `https://mnews-wp.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/07/30142658/Beras-Bali-696x464.jpg`, // URL gambar dari internet
            description: `Description for Product ${i}`,
            reviews: [
                { user: 'User1', comment: 'Great product!' },
                { user: 'User2', comment: 'I love it!' }
                // Add more reviews as needed
            ]
        });
    }

    const productNameElement = document.getElementById('productName');
    const productImageElement = document.getElementById('productImage');
    const storeNameElement = document.getElementById('storeName');
    const storeAddressElement = document.getElementById('storeAddress');
    const productPriceElement = document.getElementById('productPrice');
    const orderButton = document.getElementById('orderButton');
    const addToCartButton = document.getElementById('addToCartButton');
    const productDescriptionElement = document.getElementById('productDescription');
    const productReviewsElement = document.getElementById('productReviews');
    const quantityInput = document.getElementById('quantity');

    // Check if product ID is valid
    if (productId && productDetails[productId - 1]) {
        const product = productDetails[productId - 1];

        // Update product details on the page
        productNameElement.textContent = product.name;
        productImageElement.src = product.imageUrl;
        storeNameElement.textContent = `Store: Example Store`; // Ganti dengan data toko yang sesuai
        storeAddressElement.textContent = `Address: Example Address`; // Ganti dengan alamat toko yang sesuai
        productPriceElement.textContent = `$${product.price.toFixed(2)}`;
        productDescriptionElement.textContent = product.description;

        orderButton.addEventListener('click', function () {
            // Implement your order logic here
            const quantity = parseInt(quantityInput.value);
            alert(`Anda memesan ${quantity} ${product.name}`);
                location.href="order.html";
        });

        addToCartButton.addEventListener('click', function () {
            // Implement your add to cart logic here
            const quantity = parseInt(quantityInput.value);
            alert(`Anda telah memasukkan ${quantity} ${product.name} ke dalam keranjang`);
                location.href="order.html";
        });

        // Display product reviews (jika ada)
        if (product.reviews && product.reviews.length > 0) {
            product.reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.classList.add('card', 'mb-2');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const reviewUser = document.createElement('h5');
                reviewUser.classList.add('card-title');
                reviewUser.textContent = review.user;

                const reviewComment = document.createElement('p');
                reviewComment.classList.add('card-text');
                reviewComment.textContent = review.comment;

                // Append elements to cardBody
                cardBody.appendChild(reviewUser);
                cardBody.appendChild(reviewComment);

                // Append cardBody to reviewElement
                reviewElement.appendChild(cardBody);

                // Append reviewElement to productReviewsElement
                productReviewsElement.appendChild(reviewElement);
            });
        }
    } else {
        // Handle invalid product ID, redirect to catalog page or show an error message
        alert('Produk tidak ditemukan');
        window.location.href = 'shop.html'; // Redirect to catalog page
    }
});
