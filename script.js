let shop = document.querySelector(".shop");

let shopItemsData = [
  {
    id: "T-Shirt-1",
    name: "T-shirt",
    desc: "T-Shirts of all sizes",
    img: "images/t-shirt.jpg",
    price: 250,
  },
  {
    id: "Jeans-1",
    name: "Jeans",
    desc: "Jeans of all sizes",
    img: "images/trouser.jpg",
    price: 400,
  },
  {
    id: "Ladies-Shoes-1",
    name: "Ladies Shoes",
    desc: "Shoes for all ladies",
    img: "images/ladies-shoes.jpg",
    price: 600,
  },
  {
    id: "Nike-Shoes-1",
    name: "Nike Shoes",
    desc: "Nike is the only way you can just do it",
    img: "images/nike-shoes.jpg",
    price: 2500,
  },
  {
    id: "Boots-1",
    name: "Boots",
    desc: "Boots of all gender",
    img: "images/boots.jpg",
    price: 650,
  },
  {
    id: "Glasses-1",
    name: "Shades",
    desc: "Sunglasses and Fashion Shades",
    img: "images/glasses.jpg",
    price: 170,
  },
  {
    id: "Iphone-1",
    name: "IPhone",
    desc: "Brand New Iphone",
    img: "images/iphone.jpg",
    price: 20000,
  },
];

let basket = [];

let generateShop = () => {
  shop.innerHTML = shopItemsData
    .map((item) => {
      let { id, name, desc, img, price } = item;
      return `
        <div class="item" id="${id}">
          <img src="${img}" alt="${name}">
          <div class="item-details">
            <h5 class="name">${name}</h5>
            <p class="description">${desc}</p>
            <div class="item-btns">
              <span class="price">R${price}</span>
              <i class="fas fa-minus decrement-btn" data-id="${id}"></i>
              <span class="quantity" id="quantity-${id}">0</span>
              <i class="fas fa-plus increment-btn" data-id="${id}"></i>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
};

let increment = (id) => {
  let selectedItem = shopItemsData.find((item) => item.id === id);
  if (!selectedItem) return;

  let basketItem = basket.find((x) => x.id === id);
  if (!basketItem) {
    basket.push({ id: selectedItem.id, item: 1 });
  } else {
    basketItem.item += 1;
  }
  updateQuantity(id);
};

let updateQuantity = (id) => {
  let quantityElement = document.getElementById(`quantity-${id}`);
  if (quantityElement) {
    let basketItem = basket.find((x) => x.id === id);
    quantityElement.textContent = basketItem ? basketItem.item : 0;
  } else {
    console.error(`Element with ID quantity-${id} not found.`);
  }
};

let decrement = (id) => {
  let basketItem = basket.find((x) => x.id === id);
  if (basketItem) {
    if (basketItem.item > 0) {
      basketItem.item -= 1;
    }
    if (basketItem.item === 0) {
      basket = basket.filter((x) => x.id !== id);
    }
    updateQuantity(id);
  }
};

shop.addEventListener("click", (event) => {
  if (event.target.classList.contains("increment-btn")) {
    increment(event.target.getAttribute("data-id"));
  }
  if (event.target.classList.contains("decrement-btn")) {
    decrement(event.target.getAttribute("data-id"));
  }
});

generateShop();
