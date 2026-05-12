let wallets=[
    {
        id:2,
        img: "./homepageimages/images/bags/BAGS6.png",
        name: "Blue Three-Fold Wallet",
        sellprice: "$59.00",
        category:"Channel",
        colorcode:"#1d2b46" 
      },
      {
        id:4,
        img: "./homepageimages/images/bags/BAGS5.png",
        name:"Stylish wallet for girls",
        sellprice: " $70.00",
        category:"Diore",
        colorcode:"#ffb1b2",
    },
    {
        id:6,
        img: "./homepageimages/images/bags/BAGS3.png",
        name: "Stylish mini wallet for girls",
        sellprice: "$19.00",
        category:"Diore",
        colorcode:"#f6599a",
    },
    {
        id:7,
        img: "./homepageimages/images/bags/bag4.png",
        name:"Sky Blue Three-Fold Wallet",
        sellprice: "$20.00",
        category:"Channel",
        colorcode:"#9fbac5",
    },
    {
        id:9,
        img: "./homepageimages/images/bags/bag5.png",
        name:"Mustard Quilted Two-Fold Wallet",
        sellprice: "$19.00",
        category:"Gucci",
        colorcode:"#efad4e",
    },
    {
        id:12,
        img: "./homepageimages/images/bags/BAGS14.png",
        name:"Pretty wallet for girls",
        sellprice: "$59.00",
        category:"Gucci",
        colorcode:"#ffb678",
    },
    {
        id:13,
        img: "./homepageimages/images/bags/BAGS13.png",
        name:"Stylish wallet for girls",
        sellprice: "$35.00",
        category:"LV",
        colorcode:"#6c4479",
    },
    {
        id:17,
        img: "./homepageimages/images/bags/BAGS7.png",
        name:"Beige Three-Fold Wallet",
        sellprice: "$59.00",
        category:"Prada",
        colorcode:"#b8936c",
     }
    ]
     let product_container = document.querySelector(".sec4-card-container ")
function renderProduct(wallets) {
    product_container.innerHTML = ""
    for (let index = 0; index < wallets.length; index++) {
        product_container.innerHTML += `
          <div class="col" data-aos="fade-up" data-aos-duration="2500">
                    
          <div class="card product_card" style="width: 18rem">
              <img src=${wallets[index].img}  class="card-img-top" alt="...">
           
              <div class="card-body">
                <h5 class="card-title">${wallets[index].name}</h5>
                <p class="card-text">${wallets[index].sellprice}</p>
              </div>
              <button class="card_btn" style="background-color: ${wallets[index].colorcode}" ><a class="btnbuy" href="singlepageshop.html?array=wallets&id=${index}">Buy Now</a></button>
            </div>
     </div> `
    }
}
renderProduct(wallets)


