// navbar ka color change krte haii
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>150){
            $(".navbar").css("background","#222");
            $(".navbar").css("box-shadow","rgba(0,0,0,0.1) 0px 4px 12px");
        }
        else{
            $(".navbar").css("background","transparent");
            $(".navbar").css("box-shadow","none");
        }
    })
});




// scrool lo smooth krte haii


var navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top - navbarHeight
    },1000)
    e.preventDefault();
})







var swiper = new Swiper(".mySwiper",
{
    loop:true,
    // iss line se kya hogga jo hmara swipwer hai voh hmersha chalta hi rahega

    autoplay: {
        delay:2500,disableOnInteraction: false,
    },
    slidesPerView:1,
    // kitni slides akk time parr visible honni chahiye
    spaceBetween:10,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints:{
        640:{
            slidesPerView:2,
            spaceBetween:20,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024:{
            slidesPerView:3,
            spaceBetween:50,
        }
    }
})



// mobile navbar version


const mobile = document.querySelector(".menu-toggle");
const mobilelink = document.querySelector(".nabar-menu");

mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobilelink.classList.toggle("active");
})

mobilelink.addEventListener("click",function(){
    const menubars= document.querySelector(".is-active");
    if(window.innerWidth <= 768 && menubars){
        mobile.classList.toggle("is-active");
        mobilelink.classList.remove("active");
    }
})