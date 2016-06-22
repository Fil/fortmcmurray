#! /usr/bin/env node

for (var i=1; i<=48; i++) {
   var date = '' + (20160500 + ((i>31) ? (i-31+100) : i));
   var out = 'build/' + date + "-2.gif";
   var gm = require('gm') || console.log("npm install gm");
   
   datet = ((i>31) ? (i-31) + ' JUIN' : i + ' MAI') + ' 2016'
   
   gm("build/"+date+".png")
       .rotate('transparent', -13.5)
       .gravity('North')
       .crop(2048,2048)
       .resize(2048,2048)
       .page('+')
       .fill('#f59323')
       .fontSize(48)
       .font("/System/Library/Fonts/Keyboard.ttf")
       .drawText(1457,100, datet, "SouthEast")
       .write(out, function(){
          console.log(''+out);
       });
}


// 90 - Math.atan2(609,147) * 180 / Math.PI = 13,5°

