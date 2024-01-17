const db = require("../db_config");

const sql = `CREATE TABLE products 
(
  id INT PRIMARY KEY,
  gambar_produk VARCHAR(255),
  nama_produk VARCHAR(255),
  harga DECIMAL(10, 2),
  kota_toko VARCHAR(255),
  nama_toko VARCHAR(255),
  stok INT,
  review VARCHAR(255)\
);

    )`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});