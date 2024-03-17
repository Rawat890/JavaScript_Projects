const HexBtn= document.querySelector(".Hex-btn");
const HexValue = document.querySelector(".Hex-value");
const HexContainer = document.querySelector(".hexContainer");
const HexCopyBtn = document.querySelector('.HexCopy');
const RgbCopyBtn = document.querySelector('.rgbCopy');


//Creating random color
HexBtn.addEventListener('click', () => {
let characterSet = '0123456789ABCDEF';
let HexColorOutput="";

for (let i = 0, characterSetLength = characterSet.length; i<6; ++i) {
    
    HexColorOutput+=characterSet.charAt(Math.floor(Math.random()*characterSetLength));
    
}


HexValue.textContent =`#${HexColorOutput}`


console.log('=====================');
console.log(HexColorOutput);
console.log('=====================');


HexContainer.style.backgroundColor = `#${HexColorOutput}`

HexBtn.style.color = `#${HexColorOutput}`;

});


//RGB COLOR GENERATOR
const RGBbtn = document.querySelector(".rgbButton");
const GetRedInput = document.querySelector(".red");
const GetGreenInput = document.querySelector(".green");
const GetBlueInput = document.querySelector(".blue");

const rgbColorContainer = document.querySelector('.rgbContainer');

RGBbtn.addEventListener('click', () => {

    let ExtraRedValue = GetRedInput.value;
    let ExtraGreenValue = GetGreenInput.value;
    let ExtraBlueValue = GetBlueInput.value;

    console.log("====================");
    console.log(ExtraRedValue, ExtraGreenValue, ExtraBlueValue);
    console.log("====================");

    rgbColorContainer.style.backgroundColor = `rgb(${ExtraRedValue}, ${ExtraGreenValue}, ${ExtraBlueValue})`;

    RGBbtn.style.color = `rgb(${ExtraRedValue}, ${ExtraGreenValue}, ${ExtraBlueValue})`;
});



//COPY TO CLIPBOARD

function CopyHexColorToClipboard() {
    console.log('=====================');
    console.log(HexValue.textContent);
    console.log('=====================');

    navigator.clipboard.writeText(HexValue.textContent);
    alert("Hex value copied to clipboard");
}


//event listener encountered
HexCopyBtn.addEventListener('click', CopyHexColorToClipboard)


function CopyRGBColorToClipboard() {
    console.log("====================");
    console.log(ExtraRedValue, ExtraGreenValue, ExtraBlueValue);
    console.log("====================");
}