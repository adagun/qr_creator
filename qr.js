function generateQR() {
  var userInput = document.getElementById("inputText").value;
  var codeOutput = document.getElementById("generatedCode");
  codeOutput.innerHTML = ""; // stop from adding multiple codes
  let qrcode = new QRCode(codeOutput, {
    text: userInput ? userInput : "test",
    width: 250,
    height: 250,
    colorDark: "#000000",
    colorLight: "#FFFFFF",
    correctLevel: QRCode.CorrectLevel.H,
  });

  document.getElementById('result').style.display = "block";

}

function copy() {
  var img = document.querySelector("#generatedCode").querySelector("img");
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height);
  canvas.toBlob((blob) => {
    navigator.clipboard.write([
      new ClipboardItem({
        "image/png": blob,
      }),
    ]);
  }, "image/png");
  var myToast = Toastify({
    text: "Image copied to clipboard",
    duration: 5000,
 
   })
   myToast.showToast();
}


function download()
{
    var img = document.querySelector("#generatedCode").querySelector('img').src; 
    var link = document.createElement('a');
    link.download = "qrcode.png";
    link.href=img;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;

}
