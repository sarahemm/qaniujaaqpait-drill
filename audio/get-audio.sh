#!/bin/bash

# get the audio clips from Tusaalanga (so that we hit our site each time instead of banging on theirs)
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/a.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ga.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/gi.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/gu.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/i.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ja.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ji.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ju.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ka.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ki.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ku.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/la.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ła.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/li.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/łi.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/lu.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/łu.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ma.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/mi.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/mu.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/na.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/nga.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ngi.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ngu.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ni.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/nu.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/pa.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/pi.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/pu.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/qa.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/qi.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/qu.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ra.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ri.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ru.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/sa_ha.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/si_hi.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/su_hu.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ta.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/ti.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/tu.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/u.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/va.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/vi.wav; sleep 1
wget https://tusaalanga.ca/modules/custom/pronunciation/audio/vu.wav; sleep 1

# build the padded versions
for WAV in ?.wav ??.wav ???.wav ??_??.wav; do sox 1s-silent.wav $WAV -b 16 -t wavpcm padded-$WAV; done

ln -s si_hi.wav si.wav
ln -s si_hi.wav hi.wav
ln -s su_hu.wav su.wav
ln -s su_hu.wav hu.wav
ln -s sa_ha.wav sa.wav
ln -s sa_ha.wav ha.wav

ln -s padded-si_hi.wav padded-si.wav
ln -s padded-si_hi.wav padded-hi.wav
ln -s padded-su_hu.wav padded-su.wav
ln -s padded-su_hu.wav padded-hu.wav
ln -s padded-sa_ha.wav padded-sa.wav
ln -s padded-sa_ha.wav padded-ha.wav

