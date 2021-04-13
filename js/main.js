function backgroundeffect() {
  let getImg = document.querySelectorAll("#serv-grid-img");
  let getBackground = document.querySelectorAll(".background-effect");

  getImg.forEach((i, j) => {
    i.addEventListener("mouseenter", function () {
      getBackground.forEach((i) => {
        getBackground[j].style.cssText = "opacity: 0.7";
      });
    });
  });
  getImg.forEach((i, j) => {
    i.addEventListener("mouseleave", function () {
      getBackground.forEach((i) => {
        getBackground[j].style.cssText = "opacity: 0";
      });
    });
  });
}

function createGrid() {
  const teamMembers = 22;
  let getTeam = document.querySelector(".team");
  for (let i = 0; i < teamMembers; i++) {
    let newDiv = document.createElement("div");
    getTeam.appendChild(newDiv);
    newDiv.setAttribute("class", "team-grid-img" + (i + 1));
    newDiv.style.gridArea = "team-img" + (i + 1);
    newDiv.style.backgroundImage = "url(../images/team" + (i + 1) + ".jpg)";
  }
}

function portNext() {
  let getImgSrc = document.getElementById("port-img").src;
  let getImgUrl = getImgSrc.split("/port");
  let getImgNumber = getImgUrl[1].split(".jpg");
  if (parseInt(getImgNumber[0]) !== 5) {
    let newNumber = parseInt(getImgNumber[0]) + 1;
    document.getElementById("port-img").src = "../images/port" + newNumber + ".jpg";
  }
}

function portPrev() {
  let getImgSrc = document.getElementById("port-img").src;
  let getImgUrl = getImgSrc.split("/port");
  let getImgNumber = getImgUrl[1].split(".jpg");
  if (parseInt(getImgNumber[0]) !== 1) {
    let newNumber = parseInt(getImgNumber[0]) - 1;
    document.getElementById("port-img").src = "../images/port" + newNumber + ".jpg";
  }
}

backgroundeffect();
createGrid();
