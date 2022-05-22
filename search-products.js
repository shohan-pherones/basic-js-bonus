const products = [
  { name: "samsung s3 phone", price: 12000 },
  { name: "vivo v3 phone", price: 22000 },
  { name: "asus laptop", price: 55000 },
  { name: "apple watch", price: 14000 },
  { name: "sony dslr camera", price: 42000 },
  { name: "msi monitor", price: 15000 },
  { name: "ps5 gaming console", price: 32000 },
];

function searchProducts(products, searchText) {
  for (const product of products) {
    if (product.name.indexOf(searchText) != -1) {
      console.log(product);
    }
  }
}

const matched = searchProducts(products, "camera");
// console.log(matched);
