let original;
let correction;
let correction2;
let switched = false;
let og;
let fake;

const Arabic = ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج",
  "د", "ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط", "ئ", "ء", "ؤ", "ر",
  "لا", "ى", "ة", "و", "ز", "ظ", " "];
const English = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
  "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m",
  ",", ".", "/", " "];

function switcher() {
  switched = !switched;
  if (switched === false) {
    document.getElementById("upperText").innerText = "♡ English Misspell ♡";
    document.getElementById("lowerText").innerText = "♡ Arabic Correction ♡";
    document.getElementById("languages").value = "English To Arabic";
  } else {
    document.getElementById("upperText").innerText = "♡ Arabic Misspell ♡";
    document.getElementById("lowerText").innerText = "♡ English Correction ♡";
    document.getElementById("languages").value = "Arabic To English";
  }
}


function corrector() {
  original = document.getElementById("original").value;
  correction = "";

  if(switched === false){
    og= English;
    fake= Arabic;
  }
  else if (switched=== true){
    og= Arabic;
    fake= English;
  }

  for (let i = 0; i < original.length; i++) {
    let found = false;
    for (let j = 0; j < og.length; j++) {
      if (original.charAt(i).toUpperCase() === og[j].toUpperCase()) {
        correction += fake[j];
        found = true;
        break;
      }
    }
    if (!found) {
      correction += original.charAt(i);
    }
  }
  document.getElementById("correction").value = correction;
}

function copied(){
  var copyText = document.getElementById("correction");

  copyText.select();
  navigator.clipboard.writeText(copyText.value);
}

function pasted(){
  var pasteText = document.getElementById("original");
  navigator.clipboard.readText().then(function (text){pasteText.value = text; corrector();})

}
