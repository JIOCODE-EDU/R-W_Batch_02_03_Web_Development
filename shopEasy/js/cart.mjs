import { getCart, saveCart , showToast } from "./script.mjs";


const updateCartCount = () => {
  const cart = getCart();

  console.log(cart);

  const totalItems = cart.reduce((prev, curr) => prev + curr.quantity, 0);

  console.log("totalItemsCart", totalItems);
};

// remove cart

const removeFormCart = (productId) => {
  if(confirm("Are you sure want to remove this item?")){
    let cart = getCart()
    cart = cart.filter((item) => item.id !== productId)
    saveCart(cart)
    displayCart()
    showToast("Remove" , "Item Removed form Cart" , "info")
  }
}

const displayCart = () => {
  const cart = getCart();

  const container = document.getElementById("cart-item-container");

  if (cart.length === 0) {
    container.innerHTML = `
     <div class="col-12">
        <div id="empty-cart">
        <h3>Your Cart is Empty</h3>
        <p>Add some product to get started....</p>
      </div>
     </div>
    `;
    return;
  }

  container.innerHTML = cart
    .map(
      (p) =>
        `
    <div class="col py-4">
      <div class="p-2 d-flex justify-content-between align-items-center">
      <div class="cart_img">
      <img src=${p.image} class="img-fluid object-fit-cover" alt="product image">
      </div>
        <h5 class="card-title">${p.name}</h5>
        <div class="d-flex align-items-center">
          <button class="quantity_btn rounded-circle bg-primary text-white">-</button>
          <span class="px-3 fw-bold fs-5">${p.quantity}</span>
          <button class="quantity_btn rounded-circle bg-primary text-white">+</button>
        </div>
        <p class="card-text">$${p.price.toFixed(2)}</p>
        <div>
        <button data-id="${p.id}" class="btn-remove-to-cart rounded p-2 w-100"}>Remove</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
};

displayCart();

 document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-remove-to-cart")) {
      const id = Number(e.target.getAttribute("data-id"));
      removeFormCart(id);
    }
  });
