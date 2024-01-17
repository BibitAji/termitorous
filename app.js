
const faker = require('faker');
const db = require("./db_config");
const fs = require('fs');

// Generate random product data
const generateRandomProducts = (numProducts) => {
  const products = [];
  for (let i = 1; i <= numProducts; i++) {
    const product = {
      id: i,
      gambar_produk: faker.image.imageUrl(),
      nama_produk: faker.commerce.productName(),
      harga: faker.commerce.price(),
      kota_toko: faker.address.city(),
      nama_toko: faker.company.companyName(),
      stok: faker.random.number({ min: 1, max: 100 }),
      review: faker.lorem.sentence(),
    };
    products.push(product);
  }
  return products;
};

// Insert random product data to MySQL database
const numProducts = 100; // Ganti sesuai kebutuhan
const products = generateRandomProducts(numProducts);

const insertQuery = `
  INSERT INTO products
  (id, gambar_produk, nama_produk, harga, kota_toko, nama_toko, stok, review)
  VALUES ?`;

const values = products.map((product) => [
  product.id,
  product.gambar_produk,
  product.nama_produk,
  product.harga,
  product.kota_toko,
  product.nama_toko,
  product.stok,
  product.review
]);

db.query(insertQuery, [values], (err, results) => {
  if (err) {
    console.error('Error inserting data into MySQL:', err);
    return;
  }
  console.log(`${results.affectedRows} rows inserted into MySQL database`);
  db.end(); // Close the connection
});
