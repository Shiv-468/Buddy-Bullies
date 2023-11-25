const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".menuList");
menuIcon.addEventListener("click", function () {
    menuList.classList.toggle("show");
});
