let shop = document.querySelector('.shop');

/* functions and Arrays */

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
    }];

let generateShop = () => {
    return(shop.innerHTML = shopItemsData.map((x)=>{
        let { id, name, desc, img, price } = x;
        
        return `
     <div class="item" id="${id}">
       <img src="${img}" alt="image">
                    <div class="item-details">
                        <h5 class="name">
                            ${name}
                        </h5>
                        <p class="description">
                            ${desc}
                        </p>
                        <!-- item buttons -->
                        <div class="item-btns">
                            <span class="price">R${price}</span>
                            <i class="fas fa-minus" id="decrement-btn"></i>
                            <span class="quantity" id="${id}">0</span>
                            <i class="fas fa-plus" id="increment-btn"></i>
                        </div>
                    </div>               
    </div>
    `
    })
    .join(''));
}
generateShop();


/* increment function */
let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else{
        search.item += 1;
    }
    console.log(basket);
};

/* decrement button function */
let decrement = ()=> {};
let update = ()=> {};