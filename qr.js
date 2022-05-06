function generateQR() {
  var userInput = document.getElementById("inputText").value;
  var element = document.getElementById("generatedCode");
  let qrcode = new QRCode(element, {
    text: userInput ? userInput : "test",
    width: 250,
    height: 250,
    colorDark: "#000000",
    colorLight: "#FFFFFF",
     correctLevel : QRCode.CorrectLevel.H
  });
}
