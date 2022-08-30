console.log("Hello world");
let regex = /https:\/\/[a-z]*.aliexpress.com\/item\/[0-9]*.html/;

let currentUrl = window.location.href;
let importantUrl = currentUrl.match(regex)[0];
console.log("url", importantUrl);
function onReq(request, sender, sendResponse) {
  console.log(request);
  if (importantUrl != null && importantUrl != undefined) {
    let name =
      document.getElementsByClassName("product-title-text")[0].innerText;
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

    sendResponse({
      uri: importantUrl,
      name,
      price,
      stock: quantity,
      image_uri: image_uri.src,
    });
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>
  onReq(request, sender, sendResponse)
);
