// TODO: figure out hi/hu/ha to better support non-qikiqtaaluk dialects (once we have set selection)
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

var stats = {};
var nbrGuesses = 0;

function startOrSkip() {
  document.getElementById('guess').disabled = false;
  var chr = document.getElementById('char');
  document.getElementById('guess').value = chr.value;
  
  setTimeout(function(){getNext()}, 1000);
}

function getNext() {
  nbrGuesses = 0;
  var chr = document.getElementById('char');
  var audio = document.getElementById('audio');

  document.getElementById('startButton').innerHTML = 'Skip';
  document.getElementById('result').innerHTML = '';
  guessField = document.getElementById('guess')
  guessField.value = ''
  guessField.focus();

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
  document.getElementById('guess').focus();
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

  nbrGuesses++;
  if(guess.value == correct.value) {
    result.innerHTML = '✔️';
    setTimeout(function(){getNext()}, 1000);
    if(stats.hasOwnProperty(correct.value)) {
      // average the new one with the existing value
      stats[correct.value] = (stats[correct.value] + nbrGuesses) / 2;
    } else {
      // first entry for this one
      stats[correct.value] = nbrGuesses;
    }
    updateStats();
  } else {
    result.innerHTML = '❌';
    setTimeout(function(){guess.value = ''; playClip();}, 1000);
  }
}

function updateStats() {
  var statsHtml = "<table class='table table-striped'>";

  Object.keys(stats).sort().forEach(function(key) {
    statsHtml = statsHtml + "<tr><td>" + key + "</td><td>" + stats[key] + " tries avg.</td></tr>";
  });

  statsHtml = statsHtml + "</table>"
  document.getElementById('stats').innerHTML = statsHtml;
}

function changeTitle() {
  title = document.getElementById('title');

  if(title.innerHTML.substring(0, 1) == 'q') {
    title.innerHTML = 'ᖃᓂᐅᔮᖅᐸᐃᑦ practice';
  } else if(title.innerHTML.substring(0, 1) == 'ᖃ') {
    title.innerHTML = 'syllabics practice';
  } else {
    title.innerHTML = 'qaniujaaqpait practice';
  }
}
