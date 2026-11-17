/* Prototype-only art. No collision geometry or progression changes. */
window.BoxieCosmetics=(()=>{
 const state={color:'green',outfit:'none',background:'none',rainbow:false};
 const palettes={green:['#119467','#6eeb9c','#baff5c','#4fe68c','#064b3e'],blue:['#237dc3','#80dfff','#b3edff','#54aaff','#143c72'],red:['#a83e54','#ff9b9b','#ffc3ad','#ff6679','#64243c'],pink:['#bd4d9a','#ffb0de','#ffe0f3','#f774be','#69264e'],purple:['#7551ba','#c9b2ff','#e6d7ff','#a381ff','#43256c'],yellow:['#ab8c31','#ffe899','#fff5b5','#f5c751','#57451a']};
 const gold=['#b69c38','#fff0a2','#fff3aa','#ffd562','#675221'];
 const color=(t=0)=>`hsl(${((performance.now()*.14+t)%360+360)%360} 90% 65%)`;
 const palette=boost=>boost?gold:palettes[state.color];
 function shape(c,points,fill,stroke,width=1.2){c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke()}}
 function block(c,x,y,w,h,r,fill,stroke){c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=1.2;c.stroke()}}
 function disk(c,x,y,r,fill){c.fillStyle=fill;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill()}
 function accessory(c,kind){
  c.save(); // Head-local coordinates: +X faces forward, -X points toward the neck.
  if(kind==='country'){
   // Wrap the bandana around the neck, not around the side of the face.
   block(c,-18,-10,7,20,3,'#da5963','#6c293c');
   shape(c,[[-16,-2],[-25,4],[-17,9]],'#da5963','#6c293c');
   c.strokeStyle='#fac0b9';c.lineWidth=1;c.beginPath();c.moveTo(-15,-7);c.lineTo(-15,7);c.stroke();
  }
  if(['street','country','wizard','queen'].includes(kind)){
   // The original hats were drawn pointing up (-Y). Rotate into the rear
   // (-X), then tuck the base into the back third of the head. The game
   // already rotates the entire head and accessory together on every turn.
   c.translate(3,0);c.rotate(-Math.PI/2);c.scale(.82,.9);
  }
  if(kind==='street'){
   // Backward cap: the rounded crown covers the rear scalp; brim points back.
   block(c,-10,-27,20,11,5,'#81a5ff','#172e61');
   block(c,-14,-22,28,18,7,'#4773d8','#172e61');
   block(c,-10,-7,20,3,1.5,'#284b9d');
   c.strokeStyle='#b0c6ff';c.lineWidth=1.2;c.beginPath();c.moveTo(0,-20);c.quadraticCurveTo(-5,-15,0,-8);c.stroke();disk(c,0,-17,1.3,'#afc4ff');
  }else if(kind==='country'){
   shape(c,[[-13,-12],[-11,-22],[-6,-24],[0,-20],[6,-24],[11,-22],[13,-12]],'#ba8651','#5a3d29');
   block(c,-19,-15,38,5,2.5,'#e0b47a','#5a3d29');block(c,-11,-18,22,3,1,'#805136');
  }else if(kind==='wizard'){
   shape(c,[[-12,-12],[-4,-32],[3,-26],[7,-17],[12,-12]],'#8e6ae1','#322353');
   block(c,-18,-14,36,5,2,'#a78aee','#322353');shape(c,[[-9,-17],[8,-16],[9,-13],[-10,-14]],'#ffce78');disk(c,-1,-23,1.7,'#ffe9ac');
  }else if(kind==='agent'){
   for(const ey of [-6.2,6.2]){block(c,-1,ey-4.8,10.5,9.6,3,'#131b2b','#91acc1');c.strokeStyle='#9fbad6';c.lineWidth=1;c.beginPath();c.moveTo(1,ey-2);c.lineTo(5,ey-3);c.stroke()}
   block(c,2,-2,4,4,1,'#101827');
  }else if(kind==='queen'){
   shape(c,[[-13,-10],[-16,-23],[-7,-18],[0,-27],[7,-18],[16,-23],[13,-10]],'#f9cd62','#91632e');
   block(c,-13,-14,26,4,1,'#ffe899','#91632e');disk(c,0,-18,2.1,'#df568f');disk(c,-10,-18,1.4,'#9cf4df');disk(c,10,-18,1.4,'#9cf4df');
  }
  c.restore();
 }
 const sceneCache={};
 function scene(key){
  if(key==='none')return null;if(sceneCache[key])return sceneCache[key];
  const canvas=document.createElement('canvas');canvas.width=canvas.height=600;const c=canvas.getContext('2d');
  const base={street:['#142d39','#254756'],country:['#223c36','#3d6551'],wizard:['#1d273e','#304b55'],agent:['#131f36','#2d3c56'],queen:['#2b2338','#544257'],rainbow:['#14132c','#493968']}[key];
  if(!base)return null;const g=c.createLinearGradient(0,0,600,600);g.addColorStop(0,base[0]);g.addColorStop(1,base[1]);c.fillStyle=g;c.fillRect(0,0,600,600);
  c.save();c.globalAlpha=.48;
  if(key==='street'||key==='agent'){
   for(let i=0;i<10;i++){let x=i*65,y=30+(i*67)%120,h=160-y;block(c,x,y,57,h,2,key==='street'?'#325364':'#38465e');for(let j=0;j<3;j++)block(c,x+9+j*14,y+14,5,12,1,'#72889b')}
   if(key==='street'){c.strokeStyle='#7a9ca4';c.lineWidth=7;c.beginPath();c.moveTo(0,430);c.quadraticCurveTo(77,550,180,535);c.lineTo(420,535);c.quadraticCurveTo(540,550,600,430);c.stroke();c.font='bold 42px system-ui';c.fillStyle='#75b6a6';c.fillText('RIDE!',28,110);block(c,465,435,85,12,6,'#b78287');disk(c,482,452,7,'#c3d4db');disk(c,535,452,7,'#c3d4db')}
   else{disk(c,505,55,30,'#a8b8d2');c.setLineDash([18,18]);c.strokeStyle='#8392a9';c.lineWidth=3;c.beginPath();c.moveTo(0,530);c.lineTo(600,530);c.stroke();c.setLineDash([])}
  }else if(key==='country'){
   disk(c,510,62,40,'#e5c58a');shape(c,[[0,210],[90,115],[180,175],[270,100],[390,190],[470,115],[600,175],[600,600],[0,600]],'#517e55');
   block(c,430,95,115,95,2,'#a66a58');shape(c,[[415,97],[488,40],[560,97]],'#79534a');block(c,466,136,43,54,2,'#ccb18b');
   c.strokeStyle='#b9b290';c.lineWidth=5;for(const y of [468,500]){c.beginPath();c.moveTo(0,y);c.lineTo(600,y);c.stroke()}for(let x=20;x<600;x+=85)block(c,x,448,6,74,1,'#b9b290');
   for(const [x,y] of [[60,390],[490,372]]){block(c,x,y,52,27,10,'#ebe0d4');disk(c,x+49,y+9,13,'#ead9c9');disk(c,x+13,y+9,8,'#414c45');disk(c,x+33,y+17,6,'#414c45');block(c,x+7,y+22,6,15,2,'#b7a99a');block(c,x+35,y+22,6,15,2,'#b7a99a')}
  }else if(key==='wizard'){
   disk(c,490,67,33,'#b6b8ef');for(let i=0;i<8;i++){let x=i*86-20,y=30+(i*41)%100;shape(c,[[x,y],[x-35,y+105],[x-15,y+105],[x-55,y+190],[x+55,y+190],[x+15,y+105],[x+35,y+105]],'#38665c')}
   for(let i=0;i<25;i++)disk(c,(i*137+27)%600,(i*91+145)%600,1+i%3,'#a1f2d6');
  }else if(key==='queen'){
   for(const x of [20,440]){block(c,x,90,140,240,3,'#77657a');for(let i=0;i<3;i++)block(c,x+i*50,65,30,35,2,'#77657a');block(c,x+55,150,25,50,11,'#352e43')}
   block(c,160,180,280,140,3,'#77657a');block(c,265,232,70,100,24,'#332b42');for(let i=0;i<8;i++)disk(c,35+i*75,500,3,'#f6ce7e');
  }else if(key==='rainbow'){
   for(let i=0;i<90;i++)disk(c,(i*137+27)%600,(i*91+15)%600,i%7===0?2.2:.8,'#d7d8ff');disk(c,490,110,52,'#9d83bf');c.save();c.translate(490,110);c.rotate(-.4);c.beginPath();c.ellipse(0,0,77,18,0,0,Math.PI*2);c.strokeStyle='#cfbdec';c.lineWidth=5;c.stroke();c.restore();disk(c,78,470,28,'#6c97b3');
  }
  c.restore();c.fillStyle='rgba(5,13,25,.40)';c.fillRect(0,0,600,600);sceneCache[key]=canvas;return canvas;
 }
 return {state,palette,color,accessory,scene};
})();
