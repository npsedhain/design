var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function displayDivs(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var button = document.getElementsByClassName("circle");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    button[i].style.backgroundColor = "#979797";
  }
  x[slideIndex - 1].style.display = "block";
  button[slideIndex - 1].style.backgroundColor = "#8f33c4";
}

let buttonArr = document.getElementsByClassName("button");
let teamArr = document.getElementsByClassName("team-image-con");

function activeTeam(n) {
  for (let i = 0; i < buttonArr.length; i++) {
    buttonArr[i].style.backgroundColor = "#979797";
  }
  buttonArr[n].style.backgroundColor = "#8f33c4";
}
