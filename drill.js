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
var startTime;

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
  var includeChars = Array.from(document.querySelector("#selectedChars")).map(x => x.value).join('');

  document.getElementById('startButton').innerHTML = 'Skip';
  document.getElementById('result').innerHTML = '';
  guessField = document.getElementById('guess')
  guessField.value = ''
  guessField.focus();

  // pick a random character from the list of included ones the user gave
  var thisChar = includeChars.substr(Math.floor(Math.random() * includeChars.length), 1)
  var idx = Object.values(chars).findIndex(char => char == thisChar);
  chr.value = chars[Object.keys(chars)[idx]];
  audio.value = Object.keys(chars)[idx];

  playClip(true);
}
  
function playClip(firstPlay) {
  document.getElementById('guess').focus();
  audio = document.getElementById('audio');
  var audioClip;
  if(document.getElementById('padAudio').checked) {
    audioClip = new Audio("./audio/padded-" + audio.value + ".wav")
  } else {
    audioClip = new Audio("./audio/" + audio.value + ".wav")
  }
  audioClip.preload = 'auto';
  audioClip.onloadeddata = function () {
  };
  audioClip.play();
  // TODO: should start the timer once the audio has played through instead
  if(firstPlay) {
    startTime = Date.now();
  }
}

function checkGuess() {
  guess = document.getElementById('guess')
  correct = document.getElementById('char')
  result = document.getElementById('result')

  nbrGuesses++;
  timeSpent = Date.now() - startTime;
  if(guess.value == correct.value) {
    result.innerHTML = '✔️';
    setTimeout(function(){getNext()}, 1000);
    if(stats.hasOwnProperty(correct.value)) {
      // average the new stats with the existing values
      stats[correct.value][0] = (stats[correct.value][0] + nbrGuesses) / 2;
      stats[correct.value][1] = (stats[correct.value][1] + timeSpent) / 2;
    } else {
      // first entry for this one
      stats[correct.value] = [nbrGuesses, timeSpent];
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
    if(stats[key] == 1) {
     statsHtml = statsHtml + "<tr><td>" + key + "</td><td>" + stats[key][0] + " try, " + stats[key][1]/1000 + " secs avg.</td></tr>";
    } else {
     statsHtml = statsHtml + "<tr><td>" + key + "</td><td>" + stats[key][0] + " tries, " + stats[key][1]/1000 + " secs avg.</td></tr>";
    }
  });

  statsHtml = statsHtml + "</table>"
  document.getElementById('stats').innerHTML = statsHtml;
}

function updateSettings() {
  padAudio = document.getElementById('padAudio').checked;
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
  document.title = title.innerHTML;
}

function moveSelectedListItems(from, to) {
 // move any selected characters from the Selected box to the Unselected box
 document.querySelectorAll("#" + from + " option:checked").forEach(opt => {
  unselOpt = document.createElement('option');
  unselOpt.value = opt.value;
  unselOpt.text = opt.text;
  document.querySelector("#" + to).add(unselOpt);
  opt.remove();
 });

 // sort the list that had items added
 $("#" + to).append($("#" + to + " option")
  .remove().sort(function(a, b) {
   var at = $(a).text(),
       bt = $(b).text();
   return (at > bt) ? 1 : ((at < bt) ? -1 : 0);
  }));
}

window.addEventListener('DOMContentLoaded', (event) => {
 var selectedBox = document.getElementById('selectedChars');
 const allChars = "ᐃᐅᐊᐱᐳᐸᑎᑐᑕᑭᑯᑲᒋᒍᒐᒥᒧᒪᓂᓄᓇᓯᓱᓴᓕᓗᓚᔨᔪᔭᕕᕗᕙᕆᕈᕋᕿᖁᖃᖏᖑᖓᖠᖢᖤ";
 for (var i = 0; i < allChars.length; i++) {
   var thisChar = allChars.charAt(i);
   var newOpt = document.createElement('option');
   newOpt.value = thisChar;
   newOpt.text = thisChar;
   selectedBox.add(newOpt);
 }
});


