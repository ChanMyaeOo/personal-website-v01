const nav = document.getElementById("navbar");
const toogleCollapse = document.querySelector(".toggleCollapse");
//transparent background
window.onscroll = ()=>{
    if(window.pageYOffset > 100){
        nav.style.background = "#000";
    }
    else{
        nav.style.background = "transparent";
    }
}

//click event for toggle navbar
toogleCollapse.addEventListener('click', function(){
    nav.classList.toggle('collapse');
})

