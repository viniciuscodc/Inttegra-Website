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
    newDiv.style.backgroundImage = "url(images/team" + (i + 1) + ".jpg)";
  }
}

function portNext() {
  let getImgSrc = document.getElementById("port-img").src;
  let getImgUrl = getImgSrc.split("/port");
  let getImgNumber = getImgUrl[1].split(".jpg");
  if (parseInt(getImgNumber[0]) !== 5) {
    document.getElementById("port-text" + getImgNumber[0]).style.display = "none";
    document.getElementById("port-header" + getImgNumber[0]).style.display = "none";
    document.getElementById("ball" + getImgNumber[0]).style.backgroundColor = "#686868";
    let newNumber = parseInt(getImgNumber[0]) + 1;
    document.getElementById("port-text" + newNumber).style.display = "block";
    document.getElementById("port-header" + newNumber).style.display = "block";
    document.getElementById("port-img").src = "images/port" + newNumber + ".jpg";
    document.getElementById("ball" + newNumber).style.backgroundColor = "#b31217";
  }
}

function portPrev() {
  let getImgSrc = document.getElementById("port-img").src;
  let getImgUrl = getImgSrc.split("/port");
  let getImgNumber = getImgUrl[1].split(".jpg");
  if (parseInt(getImgNumber[0]) !== 1) {
    document.getElementById("port-text" + getImgNumber[0]).style.display = "none";
    document.getElementById("port-header" + getImgNumber[0]).style.display = "none";
    document.getElementById("ball" + getImgNumber[0]).style.backgroundColor = "#686868";
    let newNumber = parseInt(getImgNumber[0]) - 1;
    document.getElementById("port-text" + newNumber).style.display = "block";
    document.getElementById("port-header" + newNumber).style.display = "block";
    document.getElementById("ball" + newNumber).style.backgroundColor = "#b31217";
    document.getElementById("port-img").src = "images/port" + newNumber + ".jpg";
  }
}

function hideElements() {
  let portfolioNumber = 5;
  for (let i = 2; i < portfolioNumber + 1; i++) {
    document.getElementById("port-text" + i).style.display = "none";
    document.getElementById("port-header" + i).style.display = "none";
    document.getElementById("ball" + i).style.backgroundColor = "#686868";
  }
}

hideElements();
backgroundeffect();
createGrid();
