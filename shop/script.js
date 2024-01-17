
document.addEventListener('DOMContentLoaded', function () {
    const horizontalScrollContainer = document.getElementById('horizontal-scroll-container');
    const productContainer = document.getElementById('product-list');
    const loadingMessage = document.getElementById('loading-message');
    const itemsPerPage = 8; // Number of items displayed per page
    let currentPageCatalog1 = 1;
    let currentPageCatalog2 = 1;

    // Generate products
    const products = [];
    for (let i = 1; i <= 100; i++) {
      products.push({
        id: i,
        name: `Product ${i}`,
        price: Math.floor(Math.random() * 50) + 1, // Harga acak antara 1 dan 50
        imageUrl: `https://mnews-wp.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/07/30142658/Beras-Bali-696x464.jpg`, // URL gambar dari internet
        description: `Description for Product ${i}`
      });
    }

    // Render catalog items for Katalog 1
    function renderCatalog1() {
      const startIdx = (currentPageCatalog1 - 1) * itemsPerPage;
      const endIdx = startIdx + itemsPerPage;
      const visibleProducts = products.slice(startIdx, endIdx);

      horizontalScrollContainer.innerHTML = '';

      visibleProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '200px';

        const img = document.createElement('img');
        img.src = product.imageUrl;
        img.alt = product.name;
        img.classList.add('card-img-top');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const productName = document.createElement('h5');
        productName.classList.add('card-title');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.classList.add('card-text');
        productPrice.textContent = `$${product.price.toFixed(2)}`;
        
        const orderButton = document.createElement('a');
        orderButton.href = `product-details.html?id=${product.id}`; // Redirect to product details page
        orderButton.classList.add('btn', 'btn-success');
        orderButton.textContent = 'Pesan Sekarang';
        cardBody.appendChild(productName);
        cardBody.appendChild(productPrice);

        cardBody.appendChild(productName);
        cardBody.appendChild(productPrice);
        cardBody.appendChild(orderButton);
        card.appendChild(img);
        card.appendChild(cardBody);

        horizontalScrollContainer.appendChild(card);
      });

      // Menambahkan card link di akhir
      const linkCard = document.createElement('div');
      linkCard.id = 'link-card';
      linkCard.innerHTML = '<a href="link-to-another-page.html" class="btn btn-primary">Lihat Halaman Lainnya</a>';
      horizontalScrollContainer.appendChild(linkCard);
    }

    // Render catalog items for Katalog 2
    function renderCatalog2() {
      const startIdx = (currentPageCatalog2 - 1) * itemsPerPage;
      const endIdx = startIdx + itemsPerPage;
      const visibleProducts = products.slice(startIdx, endIdx);

      visibleProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'col-sm-3 mb-4 catalog-item';

        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = product.imageUrl;
        img.alt = product.name;
        img.classList.add('card-img-top');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const productName = document.createElement('h5');
        productName.classList.add('card-title');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.classList.add('card-text');
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        const orderButton = document.createElement('a');
        orderButton.href = `product-details.html?id=${product.id}`; // Redirect to product details page
        orderButton.classList.add('btn', 'btn-success');
        orderButton.textContent = 'Pesan Sekarang';
        cardBody.appendChild(productName);
        cardBody.appendChild(productPrice);
        cardBody.appendChild(orderButton);

        card.appendChild(img);
        card.appendChild(cardBody);
        productElement.appendChild(card);
        productContainer.appendChild(productElement);
      });

      loadingMessage.style.display = 'none';
    }

    // Load initial data
    renderCatalog1();
    renderCatalog2();

    // Mendeteksi scroll untuk memuat lebih banyak produk pada Katalog 2
    window.addEventListener('scroll', function () {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadingMessage.style.display = 'block';
        setTimeout(() => {
          currentPageCatalog2++;
          renderCatalog2();
        }, 1000); // Waktu simulasi delay, ganti dengan waktu sesungguhnya
      }
    });
  });

