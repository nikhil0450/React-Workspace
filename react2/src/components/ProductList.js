import React from "react";

function ProductList() {
  const phones = [
    {
      brand: "Apple",
      model: "iPhone 13 Pro",
      color: "Graphite",
      storage: "256GB",
      price: 999,
    },
    {
      brand: "Samsung",
      model: "Galaxy S21 Ultra",
      color: "Phantom Black",
      storage: "512GB",
      price: 1199,
    },
    {
      brand: "Google",
      model: "Pixel 6 Pro",
      color: "Stormy Black",
      storage: "128GB",
      price: 899,
    },
    {
      brand: "OnePlus",
      model: "9 Pro",
      color: "Morning Mist",
      storage: "256GB",
      price: 969,
    },
    {
      brand: "Xiaomi",
      model: "Mi 11 Ultra",
      color: "Ceramic White",
      storage: "512GB",
      price: 1099,
    },
    {
      brand: "Huawei",
      model: "P50 Pro",
      color: "Golden Black",
      storage: "256GB",
      price: 999,
    },
    {
      brand: "Sony",
      model: "Xperia 1 III",
      color: "Frosted Black",
      storage: "256GB",
      price: 1299,
    },
    {
      brand: "Oppo",
      model: "Find X3 Pro",
      color: "Gloss Black",
      storage: "256GB",
      price: 1099,
    },
    {
      brand: "Motorola",
      model: "Edge+",
      color: "Thunder Grey",
      storage: "256GB",
      price: 999,
    },
    {
      brand: "Realme",
      model: "GT Master Edition",
      color: "Lunar White",
      storage: "128GB",
      price: 399,
    },
  ];

  const productList = phones.map((phone, index)=>{
    return(
        <h2 key={phone.brand}>{phone.model}</h2>
    )
  })
  return(
    <div>
        {productList}
    </div>
  )
}

export default ProductList;
