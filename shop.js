//product card
let product = [
    {
        id: 1,
        img: "./homepageimages/images/bags/bag1.png",
        name: "Zip Closure Handbag",
        sellprice: "$55.00",
        category: "Diore",
        colorcode: "#3f977c",
    },
    {
        id: 2,
        img: "./homepageimages/images/bags/BAGS6.png",
        name: "Blue Three-Fold Wallet",
        sellprice: "$59.00",
        category: "Channel",
        colorcode: " #344f86",
    },
    {
        id: 3,
        img: "./homepageimages/images/bags/bag2.png",
        name: "Pink Mammon Handbag",
        sellprice: "$70.00",
        category: "Diore",
        colorcode: "#923454",
    },
    {
        id: 4,
        img: "./homepageimages/images/bags/BAGS5.png",
        name: "Stylish wallet for girls",
        sellprice: " $70.00",
        category: "Diore",
        colorcode: "#ffb1b2",
    },
    {
        id: 5,
        img: "./homepageimages/images/bags/bag3.png",
        name: "Cream Plaid Wristlet",
        sellprice: "$70.00",
        category: "Channel",
        colorcode: "#caa776"
    },
    {
        id: 6,
        img: "./homepageimages/images/bags/BAGS3.png",
        name: "Stylish mini wallet for girls",
        sellprice: "$19.00",
        category: "Diore",
        colorcode: "#f6599a",
    },
    {
        id: 7,
        img: "./homepageimages/images/bags/bag4.png",
        name: "Sky Blue Three-Fold Wallet",
        sellprice: "$20.00",
        category: "Channel",
        colorcode: "#9fbac5",
    },
    {
        id: 8,
        img: "./homepageimages/images/bags/BAGS10.jpg",
        name: "Three-Red Bags pack",
        sellprice: "$23.00",
        category: "Channel",
        colorcode: "#cd3736",
    },
    {
        id: 9,
        img: "./homepageimages/images/bags/bag5.png",
        name: "Mustard Quilted Two-Fold Wallet",
        sellprice: "$19.00",
        category: "Gucci",
        colorcode: "#efad4e",
    },
    {
        id: 10,
        img: "./homepageimages/images/bags/BAGS8.jpg",
        name: "Three-Black Belle The Tote Bag",
        sellprice: "$39.00",
        category: "Gucci",
        colorcode: "#424448",
    },
    {
        id: 11,
        img: "./homepageimages/images/bags/BAGS20.webp",
        name: "Stylish white handbags",
        sellprice: "$27.00",
        category: "Marc Jacobs",
        colorcode: "#e6e0d7",
    },
    {
        id: 12,
        img: "./homepageimages/images/bags/BAGS14.png",
        name: "Pretty wallet for girls",
        sellprice: "$59.00",
        category: "Gucci",
        colorcode: "#ffb678",
    },
    {
        id: 13,
        img: "./homepageimages/images/bags/BAGS13.png",
        name: "Quilted Wallet On Chain Iridescent Purple",
        sellprice: "$35.00",
        category: "LV",
        colorcode: "#6c4479",
    },
    {
        id: 14,
        img: "./homepageimages/images/bags/BAGS1.png",
        name: "Peach Pink Belle The Tote Bag",
        sellprice: "$29.00",
        category: "LV",
        colorcode: "#b47f6a",
    },
    {
        id: 15,
        img: "./homepageimages/images/bags/BAGS9.jpg",
        name: "Red Belle The Tote Bag",
        sellprice: "$23.00",
        category: "LV",
        colorcode: "#950c17",
    },
    {
        id: 16,
        img: "./homepageimages/images/bags/BAGS2.webp",
        name: "Black Belle The Checker Bag",
        sellprice: "$26.00",
        category: "LV",
        colorcode: "#646668",
    },
    {
        id: 17,
        img: "./homepageimages/images/bags/BAGS7.png",
        name: "Beige Three-Fold Wallet",
        sellprice: "$59.00",
        category: "Prada",
        colorcode: "#b8936c",
    },
    {
        id: 18,
        img: "./homepageimages/images/bags/BAGS15.png",
        name: "Beige Three-Fold Wallet",
        sellprice: "$36.00",
        category: "Prada",
        colorcode: "#92cfe3",
    },
    {
        id: 19,
        img: "./homepageimages/images/bags/BAGS16.jpg",
        name: "Handbag with shoulder strap",
        sellprice: "$25.00",
        category: "Prada",
        colorcode: "#ac8d76",
    },
    {
        id: 20,
        img: "./homepageimages/images/bags/BAGS22.webp",
        name: "luxury fashion women handbag",
        sellprice: "$40.00",
        category: "Prada",
        colorcode: "#df5795",
    },
    {
        id: 21,
        img: "./homepageimages/images/bags/BAGS21.webp",
        name: " Dior Lady Dior Medium Bag",
        sellprice: "$30.00",
        category: "Marc Jacobs",
        colorcode: "#baa384",
    },
    {
        id: 22,
        img: "./homepageimages/images/bags/BAGS18.png",
        name: "Pink handbags",
        sellprice: "$40.00",
        category: "Marc Jacobs",
        colorcode: "#d1a294",
    },
    {
        id: 23,
        img: "./homepageimages/images/bags/BAGS12.png",
        name: "Heidi Handheld Bag With Bamboo Handles",
        sellprice: "$68.00",
        category: "Gucci",
        colorcode: "#e34e34",
    },
    {
        id: 24,
        img: "./homepageimages/images/bags/BAGS17.jpg",
        name: "Handbag with shoulder strap",
        sellprice: "$89.00",
        category: "Marc Jacobs",
        colorcode: "#545658",
    },
]
//dropdown filter
function handleChange(abc) {
    if (abc.value == "Diore") {
        renderProduct(dior)
    }
    else if (abc.value == "Channel") {
        renderProduct(Channel)
    }
    else if (abc.value == "LV") {
        renderProduct(LV)
    }
    else if (abc.value == "Prada") {
        renderProduct(prada)
    }
    else if (abc.value == "Gucci") {
        renderProduct(gucci)
    }
    else if (abc.value == "Marc Jacobs") {
        renderProduct(marcjocbus)
    }
    else if (abc.value == "All") {
        renderProduct(product)
    }
}
let product_container = document.querySelector(".sec4-card-container")
function renderProduct(product) {
    product_container.innerHTML = ""
    for (let index = 0; index < product.length; index++) {
        product_container.innerHTML += `
          <div class="col" data-aos="fade-up" data-aos-duration="2500">
                    
          <div class="card product_card" style="width: 18rem">
              <img src=${product[index].img}  class="card-img-top" alt="...">
           
              <div class="card-body">
                <h5 class="card-title">${product[index].name}</h5>
                <p class="card-text">${product[index].sellprice}</p>
              </div>
            <button class="card_btn" style="background-color: ${product[index].colorcode}" ><a class="btnbuy" href="singlepageshop.html?array=product&id=${index}">Buy Now</a></button>
            </div>
          </div> `
    }
}
renderProduct(product)
// bags categories
let dior = [
    {
        id: 1,
        img: "./homepageimages/images/bags/bag1.png",
        name: "Zip Closure Handbag",
        sellprice: "$55.00",
        category: "Diore",
        colorcode: "#3f977c",
    },
    {
        id: 2,
        img: "./homepageimages/images/bags/BAGS6.png",
        name: "Blue Three-Fold Wallet",
        sellprice: "$59.00",
        category: "Channel",
        colorcode: " #344f86",
        
    },
    {
        id: 3,
        img: "./homepageimages/images/bags/bag2.png",
        name: "Pink Mammon Handbag",
        sellprice: "$70.00",
        category: "Diore",
        colorcode: "#923454",
    },
    {
        id: 4,
        img: "./homepageimages/images/bags/BAGS5.png",
        name: "Stylish wallet for girls",
        sellprice: " $70.00",
        category: "Diore",
        colorcode: "#ffb1b2",
    },
]
let Channel = [
    {
        id: 2,
        img: "./homepageimages/images/bags/BAGS6.png",
        name: "Blue Three-Fold Wallet",
        sellprice: "$59.00",
        category: "Channel",
        colorcode: " #344f86",
    },
    {
        id: 7,
        img: "./homepageimages/images/bags/bag4.png",
        name: "Sky Blue Three-Fold Wallet",
        sellprice: "$20.00",
        category: "Channel",
        colorcode: "#9fbac5",
    },
    {
        id: 8,
        img: "./homepageimages/images/bags/BAGS10.jpg",
        name: "Three-Red Bags pack",
        sellprice: "$23.00",
        category: "Channel",
        colorcode: "#cd3736",
    },
    {
        id: 5,
        img: "./homepageimages/images/bags/bag3.png",
        name: "Cream Plaid Wristlet",
        sellprice: "$70.00",
        category: "Channel",
        colorcode: "#caa776"
    },
]
let gucci = [
    {
        id: 9,
        img: "./homepageimages/images/bags/bag5.png",
        name: "Mustard Quilted Two-Fold Wallet",
        sellprice: "$19.00",
        category: "Gucci",
        colorcode: "#efad4e",
    },
    {
        id: 10,
        img: "./homepageimages/images/bags/BAGS8.jpg",
        name: "Three-Black Belle The Tote Bag",
        sellprice: "$39.00",
        category: "Gucci",
        colorcode: "#424448",
    },
    {
        id: 11,
        img: "./homepageimages/images/bags/BAGS20.webp",
        name: "Stylish white handbags",
        sellprice: "$27.00",
        category: "Marc Jacobs",
        colorcode: "#e6e0d7",
    },
    {
        id: 12,
        img: "./homepageimages/images/bags/BAGS14.png",
        name: "Pretty wallet for girls",
        sellprice: "$59.00",
        category: "Gucci",
        colorcode: "#ffb678",
    },
]
let LV = [
    {
        id: 13,
        img: "./homepageimages/images/bags/BAGS13.png",
        name: "Stylish wallet for girls",
        sellprice: "$35.00",
        category: "LV",
        colorcode: "#6c4479",
    },
    {
        id: 14,
        img: "./homepageimages/images/bags/BAGS1.png",
        name: "Peach Pink Belle The Tote Bag",
        sellprice: "$29.00",
        category: "LV",
        colorcode: "#b47f6a",
    },
    {
        id: 15,
        img: "./homepageimages/images/bags/BAGS9.jpg",
        name: "Red Belle The Tote Bag",
        sellprice: "$23.00",
        category: "LV",
        colorcode: "#950c17",
    },
    {
        id: 16,
        img: "./homepageimages/images/bags/BAGS2.webp",
        name: "Black Belle The Checker Bag",
        sellprice: "$26.00",
        category: "LV",
        colorcode: "#646668",
    },
    
]
let prada = [
    {
        id: 17,
        img: "./homepageimages/images/bags/BAGS7.png",
        name: "Beige Three-Fold Wallet",
        sellprice: "$59.00",
        category: "Prada",
        colorcode: "#b8936c",
    },
    {
        id: 18,
        img: "./homepageimages/images/bags/BAGS15.png",
        name: "Beige Three-Fold Wallet",
        sellprice: "$36.00",
        category: "Prada",
        colorcode: "#92cfe3",
    },
    {
        id: 19,
        img: "./homepageimages/images/bags/BAGS16.jpg",
        name: "Handbag with shoulder strap",
        sellprice: "$25.00",
        category: "Prada",
        colorcode: "#ac8d76",
    },
    {
        id: 20,
        img: "./homepageimages/images/bags/BAGS22.webp",
        name: "luxury fashion women handbag",
        sellprice: "$40.00",
        category: "Prada",
        colorcode: "#df5795",
    },
]
let marcjocbus = [
    {
        id: 21,
        img: "./homepageimages/images/bags/BAGS21.webp",
        name: "Women handbag",
        sellprice: "$30.00",
        category: "Marc Jacobs",
        colorcode: "#baa384",
    },
    {
        id: 22,
        img: "./homepageimages/images/bags/BAGS18.png",
        name: "Pink handbag",
        sellprice: "$40.00",
        category: "Marc Jacobs",
        colorcode: "#d1a294",
    },
    {
        id: 24,
        img: "./homepageimages/images/bags/BAGS17.jpg",
        name: "Handbag with shoulder strap",
        sellprice: "$89.00",
        category: "Marc Jacobs",
        colorcode: "#545658",
    },
    {
        id: 11,
        img: "./homepageimages/images/bags/BAGS20.webp",
        name: "Stylish white handbags",
        sellprice: "$27.00",
        category: "Marc Jacobs",
        colorcode: "#e6e0d7",
    },
]
