// TODO: figure out hi/hu/ha to better support non-qikiqtaaluk dialects
const chars = {
 "i": "ᐃ",
 "u": "ᐅ",
 "a": "ᐊ",
 
 "pi": "ᐱ",
 "pu": "ᐳ",
 "pa": "ᐸ",

 "ti": "ᑎ",
 "tu": "ᑐ",
 "ta": "ᑕ",

 "ki": "ᑭ",
 "ku": "ᑯ",
 "ka": "ᑲ",

 "gi": "ᒋ",
 "gu": "ᒍ",
 "ga": "ᒐ",

 "mi": "ᒥ",
 "mu": "ᒧ",
 "ma": "ᒪ",

 "ni": "ᓂ",
 "nu": "ᓄ",
 "na": "ᓇ",

 "li": "ᓕ",
 "lu": "ᓗ",
 "la": "ᓚ",

 "ji": "ᔨ",
 "ju": "ᔪ",
 "ja": "ᔭ",

 "vi": "ᕕ",
 "vu": "ᕗ",
 "va": "ᕙ",

 "ri": "ᕆ",
 "ru": "ᕈ",
 "ra": "ᕋ",

 "qi": "ᕿ",
 "qu": "ᖁ",
 "qa": "ᖃ",

 "ngi": "ᖏ",
 "ngu": "ᖑ",
 "nga": "ᖓ",

 "si": "ᓯ",
 "su": "ᓱ",
 "sa": "ᓴ",

 "łi": "ᖠ",
 "łu": "ᖢ",
 "ła": "ᖤ"
}

function getNext() {
  document.getElementById('guess').value = ''
  document.getElementById('result').value = '';

  chr = document.getElementById('char');
  audio = document.getElementById('audio');

  idx = Math.floor(Math.random() * Object.keys(chars).length);
  chr.value = chars[Object.keys(chars)[idx]];
  audio.value = Object.keys(chars)[idx];

  var audioClip = new Audio("./audio/" + audio.value + ".wav")
  audioClip.preload = 'auto';
  audioClip.onloadeddata = function () {
  };
  audioClip.play();
}
  
function playClip() {
  audio = document.getElementById('audio');
  var audioClip = new Audio("./audio/" + audio.value + ".wav")
  audioClip.preload = 'auto';
  audioClip.onloadeddata = function () {
  };
  audioClip.play();
}

function checkGuess() {
  guess = document.getElementById('guess')
  correct = document.getElementById('char')
  result = document.getElementById('result')

  if(guess.value == correct.value) {
    result.innerHTML = '✅';
    setTimeout(function(){getNext()}, 1000);
  } else {
    result.innerHTML = '❌';
    setTimeout(function(){guess.value = ''}, 1000);
  }
}
