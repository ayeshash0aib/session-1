// home page cards
// cards
// array of objects
let product = [
    // 1
    {
        name: "Zip Closure Handbag",
        price: "$55.00",
        img: "./homepageimages/greenbag.png",
        colorCode: "#56a78d",
        hoverimage: "",
        detail:
        "Zip closure handbags are popular for everyday use, work, travel, and casual outings. They can range from small crossbody bags with a single zip compartment to larger totes or satchels with multiple zippered sections for better organization. The choice of materials, colors, and designs can vary widely, allowing individuals to find a zip closure handbag that complements their personal style and meets their practical needs."
      },
      // 2
      {
        name: " Mustard Handbag With Flower Charm",
        price: " $14.30,",
        img: "./homepageimages/card2.png",
        colorCode: "#fac37d",
        id: "head",
        hoverimage: "./homepageimages/card22.webp",
        detail:
        "The term 'mustard' in this context refers to the color of the handbag. Mustard is a warm and rich yellow-brown shade, reminiscent of the condiment. A mustard handbag adds a pop of color to an outfit, providing a bold and distinctive look."
      },
      // 3
      {
        name: "Baby Pink Three-Fold Wallet",
        price: "$11.51",
        img: "./homepageimages/card5.png",
        colorCode: "#dab09a",
        id: "head",
        hoverimage: "",
        detail:
        "A baby pink three-fold wallet is likely to have various card slots for credit cards, ID cards, and business cards. Additionally, it may feature compartments for cash and a zippered section for coins. The tri-fold design is practical for those who prefer a wallet with designated spaces for different items."
      },
      // 4
      {
        name: "Blue Zig-Zag Pattern Tote",
        price: "$16.39",
        img: "./homepageimages/card7.png",
        colorCode: "#58698c",
        id: "head",
        hoverimage: "",
        detail:
        "A blue zig-zag pattern tote, therefore, is a fashionable accessory that incorporates a trendy color and a dynamic design. It can serve as a statement piece, adding flair to your ensemble while providing practicality for carrying your belongings. Whether for a casual outing, a day at work, or a weekend getaway, this tote combines style and functionality in one versatile package."
      },
      // 5
      {
        name: "Capucines Compact Wallet",
        price: "$14.00",
        img: "./homepageimages/card8.webp",
        colorCode: "#7395a3",
        id: "head",
        hoverimage: "",
        detail:
        "As the name suggests, the Capucines Compact Wallet is designed to be smaller and more streamlined than traditional wallets. Despite its compact size, it typically offers well-organized compartments for essential items such as cards, coins, and bills. Compact wallets are favored for their portability and the ability to fit into smaller handbags or pockets."
      },
      // 6
      {
        name: "Flap Nude - Light Gray",
        price: "$13.25",
        img: "./homepageimages/card9.png",
        colorCode: "#acaea6",
        id: "head",
        hoverimage: "",
        detail:
        "If this is a specific product from a particular brand, I recommend checking the official website of that brand or contacting their customer support for the most accurate and up-to-date information"
      },
      // 7
      {
        name: "Dior pink cannage lambskin large lady dior",
        price: "$70.00",
        img: "./homepageimages/bag4.webp",
        colorCode: "#ea72ad",
        id: "head",
        hoverimage: "",
        detail:
        "The Dior Pink Cannage Lambskin Large Lady Dior is a statement piece that combines timeless design, quality materials, and the craftsmanship associated with the Dior brand. It's a coveted accessory for those who appreciate luxury fashion. Keep in mind that specific details, such as shades of pink or additional embellishments, may vary based on the particular release or edition of the Lady Dior bag."
      },
      // 8
      {
        name: "Capri - Black",
        price: "$3.400",
        img: "./homepageimages/card1.png",
        colorCode: "#575457",
        id: "head",
        hoverimage: "",
        detail:
        "If 'Capri - Black' is a specific bag model or design, I recommend checking the official website or contacting the brand or retailer directly for the most accurate and up-to-date information. Brands often release new products, and details can vary based on the brand, collection, or season."
      },
]
// cards
let variables = document.querySelector(".containers")
// loop
for (let index = 0; index < product.length; index++) {
    variables.innerHTML += `
     <div class="col" data-aos="fade-up" data-aos-duration="2500">
               
     <div class="card product_card" style="width: 18rem">
         <img src=${product[index].img}  class="card-img-top" alt="...">
      
         <div class="card-body">
           <h5 class="card-title">${product[index].name}</h5>
           <p class="card-text">${product[index].price}
           </p>
         </div>
    <button class="card_btn" style="background-color: ${product[index].colorCode}" ><a class="btnbuy" href="singlepage.html?id=${index}">Buy Now</a></button>
       </div>
    </div> `
 }
// let product_container = document.querySelector(".sec4-card-container ")
// function renderProduct(wallets) {
//     product_container.innerHTML = ""
//     for (let index = 0; index < wallets.length; index++) {
//         product_container.innerHTML += ` <div class="sec4-card" data-aos="fade-up" data-aos-duration="2500">
//     <img src="${wallets[index].img}" alt="">
//     <h2>${wallets[index]}</h2>
//     <div class="discount">
//     <span>${wallets[index].sellprice}</span>
//     </div>
//     <button  type="button"style="background-color: ${wallets[index].colorcode}"
//      onclick='read(${wallets[index].id})'  data-bs-toggle="modal" data-bs-target="#exampleModal">
//     <span>View More</span>
//     </button>
//   </div>`
//     }
// }
// renderProduct(wallets)
