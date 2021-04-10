
function backgroundeffect(){
let getImg = document.querySelectorAll("#x");
let getBackground = document.querySelectorAll(".background-effect");

getImg.forEach((i,j) => {

 i.addEventListener("mouseenter", function () {
    getBackground.forEach((i) =>{
        getBackground[j].style.cssText = "opacity: 0.7";
    });
  });
});
getImg.forEach((i,j) => {
    i.addEventListener("mouseleave", function () {
        getBackground.forEach((i) =>{
            getBackground[j].style.cssText = "opacity: 0";
        });
      });
  });
}

backgroundeffect()