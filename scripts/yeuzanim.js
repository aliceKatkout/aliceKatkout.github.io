let delay = 100;
let imgNumber = 0;
let totalimgNumber = 9;
let anim = [];
let start = document.getElementById("cligne");
let timer;

for (i=0; i<totalimgNumber; i++){
  anim[i]= new Image (2000, 815);
  anim[i].src ="images/oeil"+ (i+1)+ ".png";
}

function switch2() {
  document.oeilAnim.src = anim[imgNumber].src;
  imgNumber++;
  if (imgNumber >= totalimgNumber) {
   imgNumber = 0;
   clearInterval(timer);
 }
}

function animate1() {
  console.log("animate ok");
  //  switch2();
  timer= setInterval(switch2, delay);
  //setTimeout(animate1, delay);
}

start.addEventListener("mouseover", function(event) {
  console.log("j'ai vu");
  animate1();
});




  // options
// let paint = document.getElementById("peinture");
//
//
//
// paint.addEventListener("click", function(event) {
//   console.log("coucoupaint");
// });
