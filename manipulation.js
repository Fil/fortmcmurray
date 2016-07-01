#! /usr/bin/env node

function doit (lang) {
for (var i=1; i<=48; i++) {
   var date = '' + (20160500 + ((i>31) ? (i-31+100) : i));
   var out = 'build/' + date + "-"+lang+".gif";
   var gm = require('gm') || console.log("npm install gm");
   
   var jour = (i>31) ? (i-31) : i, mois =  (i>31) ? 6 : 5;
   if (lang == 'fr') {
       if (jour ==1) jour = '1er';
       datet = (jour + ' ' + (mois == 6 ? 'JUIN' : ' MAI')) + ' 2016'
   } else {
       if (jour%10 == 1) jour += 'st';
       else if (jour%10 == 2) jour += 'nd';
       else if (jour%10 == 3) jour += 'rd';
       else jour += 'th';
       datet = ((mois == 6 ? 'JUNE' : 'MAY') + ' ' + jour) + ', 2016'
   }

   gm("build/"+date+".png")
       .rotate('transparent', -13.5)
       .gravity('North')
       .crop(2048,2048)
       .resize(2048,2048)
       .page('+')
       .fill('#f59323')
       .fontSize(48)
       .font("/System/Library/Fonts/AquaKana.ttc")
       .drawText(1457,100, datet, "SouthEast")
       .write(out, function(){
          console.log(''+out);
       });
}
}

doit('fr');
doit('en');

// 90 - Math.atan2(609,147) * 180 / Math.PI = 13,5°

