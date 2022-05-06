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
}
