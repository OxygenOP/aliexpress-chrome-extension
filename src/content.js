console.log("Hello world");

let name = document.getElementsByClassName("product-title-text")[0].innerText;
let image_uri = document.getElementById("poster");
if (image_uri == null || image_uri == undefined) {
  image_uri = document.getElementsByClassName("magnifier-image")[0];
}

let price = document.getElementsByClassName("uniform-banner-box-price")[0]
  .innerText;

let quantity = document
  .getElementsByClassName("product-quantity-tip")[0]
  .getElementsByTagName("span")[0].innerText;

console.log("image", image_uri.src);
console.log("name", name);

console.log("price", price);
console.log("quantity", quantity);
// let tab_uri;
// chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//     tab_uri = tabs[0].url;
// });

chrome.runtime.sendMessage(
  { name, price, stock: quantity, image_uri: image_uri.src },

  function (response) {
    console.log("sending message");
  }
);
