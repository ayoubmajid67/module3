let hamber=document.getElementById('hamburger'); 
let home_title=document.getElementById('home_title'); 
let nav_phone=document.getElementById('nav_phone'); 



hamber.addEventListener("click", function() {
    if (nav_phone.style.display === "none") {
      nav_phone.style.display = "flex";
      home_title.classList.add("active"); 
      hamber.style.filter = "invert()";
    } else {
      nav_phone.style.display = "none";
      home_title.classList.remove("active"); 
      hamber.style.filter = "none";
    }
  });