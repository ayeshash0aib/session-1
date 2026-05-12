var product = [{
    "id": 0,
    "title": "",
    "price": "",
    "description": "",
    "brand": "",
    "material":"",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
  }, {
    "id": 1,
    "title": "Cream Plaid Wristlet",
    "price":"$70.00",
    "description": "A cream plaid wristlet typically refers to a small, compact purse or wallet that is designed to be worn around the wrist. The term 'cream'suggests that the wristlet isof a light beige or off-white color, and 'plaid' indicates a pattern characterized by intersecting lines forming squares or rectangles.",
    "brand": " Channel",
    "image": "./homepageimages/images/bags/bag3.png",
    "material":"Suede",
  }, {
    "id": 2,
    "title":"Pink handbags",
    "price": "$59.00",
    "description": "This handbag boasts a design that seamlessly marries fashion and functionality. Its sleek silhouette and high-quality craftsmanship make it a standout piece. The supple texture of the material not only exudes luxury but also ensures durability, promising a lasting companion for your everyday adventures or special events.",
    "brand": " Channel",
    "image": "./homepageimages/images/bags/BAGS18.png",
    "material":"Polyester",

  }, {
    "id": 3,
    "title":"Zip Closure Handbag",
    "price": "$40.00",
    "description": "Zip closure handbags are popular for everyday use, work, travel, and casual outings. They can range from small crossbody bags with a single zip compartment to larger totes or satchels with multiple zippered sections for better organization. The choice of materials, colors, and designs can vary widely, allowing individuals to find a zip closure handbag that complements their personal style and meets their practical needs.",
    "brand": "Channel",
    "image": "./homepageimages/images/bags/bag1.png",
    "material":"Leather",

  },  {
    "id": 5,
    "title": "Three-Red Bags pack",
    "price":  "$43.00",
    "description": "Putting it together, a 'Three-Red Bags Pack' refers to a package or set that contains three bags, and each of these bags is red in color. This type of product description is straightforward, providing information about both the quantity and the color of the items included in the pack.",
    "image":"./homepageimages/images/bags/BAGS10.jpg",
    "brand": "Channel",
    "material":"Polyester",

}]
  var product1 = [{
    "id": 0,
    "title": "",
    "price": "",
    "description": "",
    "brand": "",
    "material":"",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
  }, {
    "id": 1,
    "title": "Quilted Wallet On Chain Iridescent Purple",
    "price":"$70.00",
    "description": "This chic shoulder bag is crafted of metallic lambskin leather in purple.The wallet features a rear pocket, a polished silver below the waist cross-body chain threaded with leather, and opens to an interior of fabric with card slots, zipper, and patch pockets.",
    "brand": " Dior",
    "image": "./homepageimages/images/bags/BAGS13.png",
    "material":"Suede",

  }, {
    "id": 2,
    "title":"Peach Pink Belle The Tote Bag",
    "price":"$56.00",
    "description": "Embrace sophistication and make a statement with this peach-colored handbag. Elevate your style effortlessly while enjoying the blend of fashion-forward design and practicality that this accessory offers.",
    "brand": "Dior",
    "image": "./homepageimages/images/bags/BAGS1.png",
    "material":"Polyester",

  }, {
    "id": 3,
    "title": "Pink Mammon Handbag",
    "price":  "$40.00",
    "brand": " Dior",
    "description": "Introducing the epitome of chic and sophistication - the Pink Mamoon Bag. Crafted to captivate with its elegant allure, this bag is a fusion of exquisite design and contemporary style. The soft, rosy hue of this accessory radiates a subtle charm, adding a touch of femininity and grace to any ensemble. ",
    "image": "./homepageimages/images/bags/bag2.png",
    "material":"Leather",

  },  {
    "id": 5,
    "title": "Red Belle The Tote Bag",
    "price":" $40.00", 
    "description": "Introducing the Red Belle Tote Bag - a statement of bold sophistication and timeless style. This striking accessory in a vibrant red hue exudes confidence and allure. The rich, fiery tone of the bag captures attention while adding a touch of glamour to any ensemble.",
    "brand": "Dior",
    "image": "./homepageimages/images/bags/BAGS9.jpg",
    "material":"Polyester",
    }
]
  function item1(a) {
    if (a != select2) {
        document.getElementById("img1").src = product[a].image
        document.getElementById("price1").innerHTML = product[a].price
        document.getElementById("desc1").innerHTML = product[a].description
        document.getElementById("brand1").innerHTML = product[a].brand
        document.getElementById("material1").innerHTML = product[a].material

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = product[0].image
        document.getElementById("price1").innerHTML = ""
        document.getElementById("desc1").innerHTML = ""
        document.getElementById("brand1").innerHTML = ""
        document.getElementById("material1").innerHTML = ""

    }
  }
  function item2(b) {
    if (b != select1) {
        document.getElementById("img2").src = product1[b].image
        document.getElementById("price2").innerHTML = product1[b].price
        document.getElementById("desc2").innerHTML = product1[b].description
        document.getElementById("brand2").innerHTML = product1[b].brand
        document.getElementById("material2").innerHTML = product[b].material

    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = product1[0].image
        document.getElementById("price2").innerHTML = ""
        document.getElementById("desc2").innerHTML = ''
        document.getElementById("brand2").innerHTML = ""
        document.getElementById("material2").innerHTML = ""


    }
  }