function onReq(request, sender, sendResponse) {
  ph = request;
  console.log("msg: " + ph.name);

  document.getElementById("Container").style.display = "block";
  document.getElementById("product-name").innerText = ph.name;
  document.getElementById("product-price").innerText = ph.price;
  document.getElementById("product-stock").innerText = ph.stock;
  document.getElementById("product-img").src = ph.image_uri;
  document.getElementById("product-image-uri").href = ph.image_uri;
  document.getElementById(
    "product-copy"
  ).innerText = `${ph.name} ; ${ph.price} ; ${ph.stock} ; ${ph.image_uri}`;
}

chrome.runtime.onMessage.addListener(onReq);

function download() {
  console.log("Gonna copy");
  let text = document.getElementById("product-copy");
  // text.focus();
  // text.select();
  // try {
  //   var successful = document.execCommand("copy");
  //   var msg = successful ? "successful" : "unsuccessful";
  //   console.log("Fallback: Copying text command was " + msg);
  //   text.blur();
  // } catch (err) {
  //   console.error("Fallback: Oops, unable to copy", err);
  // }
}
