let menuState = "closed";

function openMenu() {
  const closedMenu = document.getElementsByClassName(
    "mobile-menu-icon-container"
  );

  const openedMenu = document.getElementsByClassName("expand-menu");
  const menuIcon = document.getElementById("mobile-menu-icon");
  const mobileMenu = document.getElementById("mobile-navigation");
  if (menuState == "closed") {
    closedMenu[0].classList.add("expand-menu");
    closedMenu[0].classList.remove("mobile-menu-icon-container");
    menuIcon.style.webkitTransform = "rotate3d(0,1,0,180deg)";
    menuIcon.style.mozTransform = "rotate3d(0,1,0,180deg)";
    menuIcon.style.msTransform = "rotate3d(0,1,0,180deg)";
    menuIcon.style.oTransform = "rotate3d(0,1,0,180deg)";
    menuIcon.style.transform = "rotate3d(0,1,0,180deg)";
    setTimeout(function () {
      mobileMenu.style.display = "block";
    }, 250);
    menuState = "open";
  } else if (menuState == "open") {
    openedMenu[0].classList.add("mobile-menu-icon-container");
    openedMenu[0].classList.remove("expand-menu");
    menuIcon.style.webkitTransform = "rotate3d(0,1,0,0deg)";
    menuIcon.style.mozTransform = "rotate3d(0,1,0,0deg)";
    menuIcon.style.msTransform = "rotate3d(0,1,0,0deg)";
    menuIcon.style.oTransform = "rotate3d(0,1,0,0deg)";
    menuIcon.style.transform = "rotate3d(0,1,0,0deg)";
    mobileMenu.style.display = "none";
    menuState = "closed";
  }
}
