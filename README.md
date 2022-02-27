# qaniujaaqpait-drill

Inuktitut syllabics practice app, plays audio clips of a character and has you type what you hear. Keeps track of how many tries it takes you to get the right one on average, and how many seconds.

Fully client-side, nothing special required hosting-wise.

# Installation
1. Put the files somewhere available to a web server.
2. Make sure you have 'sox' installed, then run ./get-audio.sh in the 'audio' subdirectory. This will fetch all the audio clips from Tusaalanga, then use sox to generate the padded versions.

Currently hosted at https://ᖃᓂᐅᔮᖅᐸᐃᑦ.ᓴᕋᐃᒥᓕ.net

# TODO
- Support iOS better. iOS doesn't let audio files be played from a timer, we'll need to trigger things immediately upon button press instead for this platform.

