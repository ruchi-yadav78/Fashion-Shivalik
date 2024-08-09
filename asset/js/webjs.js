var x=0;
function addtc() {
 x++;
    document.getElementById("countnum").innerHTML = x;
}
var y=0;
function metafun() {
 y++;
    document.getElementById("countnum2").innerHTML = y;
}
var z=0;
function metaev() {
 z++;
    document.getElementById("countnum3").innerHTML = z;
}
var a=0; 
function showcont() {
  a++;
  if(a>2){
    a=1;
  }
  if (a==1) {
    document.getElementById("showdatas").style.display = "block";
  }
  else if (a==2) {
    document.getElementById("showdatas").style.display = "none";
  }
}

var b=0;
function mainfunc(){
 b++;
 if(b>2){
  b=1;
 }
 if (b==1) {
  document.getElementById("pop").style.display = "block";
}
else if (b==2) {
  document.getElementById("pop").style.display = "none";
}
}
var c=0;
function mainfunc1(){
 c++;
 if(c>2){
  c=1;
 }
 if (c==1) {
  document.getElementById("pop1").style.display = "block";
}
else if (c==2) {
  document.getElementById("pop1").style.display = "none";
}
}
var d=0;
function mainfunc2(){
 d++;
 if(d>2){
  d=1;
 }
 if (d==1) {
  document.getElementById("pop2").style.display = "block";
}
else if (d==2) {
  document.getElementById("pop2").style.display = "none";
}
}
var e=0;
function mainfunc3(){
 e++;
 if(e>2){
  e=1;
 }
 if (e==1) {
  document.getElementById("pop3").style.display = "block";
}
else if (e==2) {
  document.getElementById("pop3").style.display = "none";
}
}
var f=0;
function mainfunc4(){
 f++;
 if(f>2){
  f=1;
 }
 if (f==1) {
  document.getElementById("pop4").style.display = "block";
}
else if (f==2) {
  document.getElementById("pop4").style.display = "none";
}
}
// var g=0;
// function category(){
//   g++;
//   if(g>2){
//     g=1;
//    }
//    if (g==1) {
//     document.getElementById("collecpage").style.display = "block";
//   }
//   else if (g==2) {
//     document.getElementById("collecpage").style.display = "none";
//   }

// }

// swiper code start here
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  