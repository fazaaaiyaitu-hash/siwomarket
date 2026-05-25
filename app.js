import { db } from './firebase.js';

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const productList = document.getElementById("product-list");

async function loadProducts(){

  const querySnapshot =
  await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc)=>{

    const data = doc.data();

    productList.innerHTML += `
      <div class="card">
        <img src="${data.image}" width="100%">
        <h2>${data.name}</h2>
        <p>Rp ${data.price}</p>

        <button onclick="buyProduct(
        '${data.name}',
        '${data.price}'
        )">
        Beli Sekarang
        </button>
      </div>
    `;
  });
}

loadProducts();

window.buyProduct = function(name,price){

  const invoice =
  "INV-"+Date.now();

  const url =
  `https://app.pakasir.com/pay/USERNAME/${price}?order_id=${invoice}`;

  window.location.href = url;
}