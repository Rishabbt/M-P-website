const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

document.addEventListener("DOMContentLoaded", () => {
  const sideBar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

  if (menuIcon && sideBar) {
    menuIcon.addEventListener("click", () => {
      sideBar.classList.remove("close-sidebar");
      sideBar.classList.add("open-sidebar");
    });
  }

  if (closeIcon && sideBar) {
    closeIcon.addEventListener("click", () => {
      sideBar.classList.remove("open-sidebar");
      sideBar.classList.add("close-sidebar");
    });
  }

  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      sideBar.classList.remove("open-sidebar");
      sideBar.classList.add("close-sidebar");
    });
  });
});


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")

    
})
})
