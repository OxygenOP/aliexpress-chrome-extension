document.getElementById("get-button").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { type: "getText" },
      function (response) {
        console.log(response);
        ph = response;

        if (response != null && response != undefined) {
          console.log("msg: " + ph.name);
          document.getElementById("product-uri").href = ph.uri;

          document.getElementById("Container").style.display = "block";
          document.getElementById("product-name").innerText = ph.name;
          document.getElementById("product-price").innerText = ph.price;
          document.getElementById("product-stock").innerText = ph.stock;
          document.getElementById("product-img").src = ph.image_uri;
          document.getElementById("product-image-uri").href = ph.image_uri;
          document.getElementById(
            "product-copy"
          ).innerText = `${ph.name} ; ${ph.price} ; ${ph.stock} ; ${ph.uri} ; ${ph.image_uri}`;
        }
      }
    );
  });
});

function get() {
  console.log("Gonna get");
  // let text = document.getElementById("product-copy");
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
