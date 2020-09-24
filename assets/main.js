const navList = document.querySelector(".nav-list");
const bars = document.querySelector(".fas");

bars.addEventListener("click", toggleNav);

function toggleNav() {
    if(navList.id){
        navList.removeAttribute("id");
    }
    else{
        navList.id="show";
    }
}
 
