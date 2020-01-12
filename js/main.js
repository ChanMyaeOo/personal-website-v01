const nav = document.getElementById("navbar");
window.onscroll = ()=>{
    if(window.pageYOffset > 100){
        nav.style.background = "#000";
    }
    else{
        nav.style.background = "transparent";
    }
}

//click event for toggle navbar
$(document).ready(function(){
    $navbar = $(".navbar");
    $toggleCollapse = $(".toggleCollapse");
    $toggleCollapse.click(function(){
        $navbar.toggleClass("collapse");
    })
})

