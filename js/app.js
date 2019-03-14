//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

var disc = document.getElementById('disclaimer');
disc.innerHTML = finePrint;

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.\

var brand1 = document.getElementById('brand1')
brand1.innerHTML = 'Nabisco'

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

var item1 = document.getElementById('item1');
item1.innerHTML = 'Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.
var price1 = document.getElementById('price1');
price1.innerHTML = '$8.99'

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

var discount1 = document.getElementById('discount1');
discount1.innerHTML = 'Free fries with purchase!'

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.
var item2 = document.createElement('div')
item2.id = 'item2'
item2.innerHTML = "Hendrick's Gin";

var brand2 = document.getElementById('brand2');
brand2.appendChild(item2);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

var price2 = document.createElement('div');
price2.id = 'price2';
price2.innerHTML = '$34.99';
item2.appendChild(price2);

var images = document.getElementsByTagName('img');


//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

var discount3 = document.createElement('button');
discount3.id = 'discount3';
discount3.innerHTML = '50% OFF Axe body soap!';
var block3 = document.getElementsByClassName('block3');
block3[0].appendChild(discount3);
//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.
var pandaItem = document.getElementsByClassName('item')
pandaItem[0].innerHTML = 'Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.
var discounts = document.createElement('button');
discounts.className = 'discount';
discounts.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
pandaItem[0].appendChild(discounts);
//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.
var brand = document.getElementsByClassName('brand');
brand[1].innerHTML = 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 
var price = document.getElementsByClassName('price');
price[1].innerHTML = '10,000'

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 
var brandHif = document.createElement('div');
brandHif.innerHTML = 'Hifiman Shangri-La';
block3[1].appendChild(brandHif);


//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 
var itemm = document.createElement('div');
itemm.className = 'item';
itemm.innerHTML = 'Electronstatic Headphones';
block3[1].appendChild(itemm);


//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.
var pricee = document.createElement('div');
pricee.className = 'price';
pricee.innerHTML = '$18,000';
block3[1].appendChild(pricee);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.
var disc = document.createElement('button');
disc.className = 'discount';
disc.innerHTML = 'Free Barry Manilow CD with purchase!'
block3[1].appendChild(disc);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!
console.log(brand)
var item = document.getElementsByClassName('item')
var discount = document.getElementsByClassName('discount')
console.log(item)
console.log(price)
console.log(discount)
brand[2].innerHTML = 'H&M';
item[3].innerHTML = 'Unicorn-Head Slippers';
price[3].innerHTML = '$21.99';
discount[3].innerHTML = 'Free knee-high tube socks with purchase!'


//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.
brand[3].innerHTML = 'Frito Lay';
item[4].innerHTML = 'Poppin Jalapeno Doritos';
price[4].innerHTML = '$7.77';
discount[4].innerHTML = '33% OFF any 6 pack Budweiser or Bud Light'

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!
brand[4].innerHTML = 'Any Dog Breeder';
item[5].innerHTML = 'Baby Puggy';
price[5].innerHTML = 'Priceless';
discount[5].innerHTML = 'No Discounts. This cutie is worth every penny!'

//Final Boss 
//Create your own product for the last three sections.

brand[5].innerHTML = 'Whole Foods';
item[6].innerHTML = 'Buffalo Chicken Mac and Cheese';
price[6].innerHTML = 'Small kine expensive';
discount[6].innerHTML = '17% off with coupon cuz'

images[10].src = 'https://www.momontimeout.com/wp-content/uploads/2018/10/homemade-mac-and-cheese-recipe-titled.jpg'


var block2 = document.getElementsByClassName('block2');
console.log(block2)

var firstBrand = document.createElement('div');
firstBrand.innerHTML = 'Doritos';
firstBrand.className = 'brand'
block2[3].appendChild(firstBrand);

var firstItem = document.createElement('div');
firstItem.className = 'item';
firstItem.innerHTML = 'Ghost Pepper Chips';
block2[3].appendChild(firstItem);

var firstPrice = document.createElement('div');
firstPrice.className = 'price';
firstPrice.innerHTML = '$666.66';
block2[3].appendChild(firstPrice);

var firstDisc = document.createElement('button');
firstDisc.className = 'discount';
// firstDisc.innnerHTML = '6 Free Gallons of milk upon purchase!';
block2[3].appendChild(firstDisc);
// images[11].src = 'http://carlandjinger.com/wp-content/uploads/2017/10/eating-worlds-hottest-pepper-chi.jpg'

brand[6].innerHTML = 'Whole Foods';
item[7].innerHTML = 'Buffalo Chicken Mac and Cheese';
price[7].innerHTML = 'Small kine expensive';
discount[7].innerHTML = '17% off with coupon cuz'

// final boss part 2
console.log(block3)
var secBrand = document.createElement('div');
secBrand.className = 'brand';
secBrand.innerHTML = 'NASA';
block3[3].appendChild(secBrand);

var secItem = document.createElement('div');
secItem.className = 'item';
secItem.innerHTML = 'Alien guy';
block3[3].appendChild(secItem);

var secPrice = document.createElement('div');
secPrice.className = 'price';
secPrice.innerHTML = 'brah no price this guys gonna abduct you';
block3[3].appendChild(secPrice);

var secBut = document.createElement('button');
secBut.className = 'discount';
secBut.innerHTML = 'I hope he doesnt have a probe';
block3[3].appendChild(secBut);


images[12].src = 'https://images-na.ssl-images-amazon.com/images/I/5167B0JEilL._SY550_.jpg'
console.log(images)

images[2].src = 'https://dydza6t6xitx6.cloudfront.net/ci-hendricks-gin-d1d68ad95a63a898.png'