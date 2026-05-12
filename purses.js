let handbags=[
    {
        id:1,
        img: "./homepageimages/images/bags/bag1.png",
        name: "Zip Closure Handbag",
        sellprice: "$55.00",
        category:"Diore",
        colorcode:"#3f977c",
    },
    {
        id:3,
        img: "./homepageimages/images/bags/bag2.png",
        name:"Pink Mammon Handbag",
        sellprice: "$70.00",
        category:"Diore",
        colorcode:"#923454",
    },
    {
        id:5,
        img: "./homepageimages/images/bags/bag3.png",
        name:"Cream Plaid Wristlet",
        sellprice: "$70.00",
        category:"Channel",
        colorcode:"#caa776"
    },
    {
        id:8,
        img: "./homepageimages/images/bags/BAGS10.jpg",
        name:"Three-Red Bags pack",
        sellprice: "$23.00",
        category:"Channel",
        colorcode:"#cd3736",
    },
    {
        id:10,
        img: "./homepageimages/images/bags/BAGS8.jpg",
        name:"Three-Black Belle The Tote Bag",
        sellprice: "$39.00",
        category:"Gucci",
        colorcode:"#424448",
    },
    {
        id:11,
        img: "./homepageimages/images/bags/BAGS20.webp",
        name:"Stylish white handbags",
        sellprice: "$27.00",
        category:"Marc Jacobs",
        colorcode:"#e6e0d7", 
    },

    {
        id:14,
        img: "./homepageimages/images/bags/BAGS1.png",
        name:"Peach Pink Belle The Tote Bag",
        sellprice: "$29.00",
        category:"LV",
        colorcode:"#b47f6a",
    },
    {
        id:15,
        img: "./homepageimages/images/bags/BAGS9.jpg",
        name:"Red Belle The Tote Bag",
        sellprice: "$23.00",
        category:"LV",
        colorcode:"#950c17",
    },
    {
      id:16,
      img: "./homepageimages/images/bags/BAGS2.webp",
      name:"Black Belle The Checker Bag",
      sellprice: "$26.00",
      category:"LV",
      colorcode:"#646668",
  },
  {
    id:19,
    img: "./homepageimages/images/bags/BAGS16.jpg",
    name:"Handbag with shoulder strap",
    sellprice: "$25.00",
    category:"Prada",
    colorcode:"#ac8d76",
 },
  {
    id:20,
    img: "./homepageimages/images/bags/BAGS22.webp",
    name:"luxury fashion women handbag",
    sellprice: "$40.00",
    category:"Prada",
    colorcode:"#df5795",
 },
  {
    id:21,
    img: "./homepageimages/images/bags/BAGS21.webp",
    name:"Women handbags",
    sellprice: "$30.00",
    category:"Marc Jacobs",
    colorcode:"#baa384",
 },
  {
    id:22,
    img: "./homepageimages/images/bags/BAGS18.png",
    name:"Pink handbags",
    sellprice: "$40.00",
    category:"Marc Jacobs",
    colorcode:"#d1a294",
 },
  {
    id:23,
    img: "./homepageimages/images/bags/BAGS12.png",
    name:"Heidi Handheld Bag With Bamboo Handles",
    sellprice: "$68.00",
    category:"Gucci",
    colorcode:"#e34e34",
 },
  {
    id:24,
    img: "./homepageimages/images/bags/BAGS17.jpg",
    name:"Handbag with shoulder strap",
    sellprice: "$89.00",
    category:"Marc Jacobs",
    colorcode:"#545658",
 },
 {
    id:25,
    img: "./homepageimages/images/bags/bag7.png",
    name:"Reward bag beige",
    sellprice: "$29.00",
    category:"Marc Jacobs",
    colorcode:"#413328",
 }
  ]
  let product_container = document.querySelector(".sec4-card-container ")
  function renderProduct(handbags) {
      product_container.innerHTML = ""
      for (let index = 0; index < handbags.length; index++) {
          product_container.innerHTML += `
            <div class="col" data-aos="fade-up" data-aos-duration="2500">
                      
            <div class="card product_card" style="width: 18rem">
                <img src=${handbags[index].img}  class="card-img-top" alt="...">
             
                <div class="card-body">
                  <h5 class="card-title">${handbags[index].name}</h5>
                  <p class="card-text">${handbags[index].sellprice}</p>
                </div><button class="card_btn" style="background-color: ${handbags[index].colorcode}" ><a class="btnbuy" href="singlepageshop.html?array=handbags&id=${index}">Buy Now</a></button>
              
              </div>
       </div> `
      }}
renderProduct(handbags)