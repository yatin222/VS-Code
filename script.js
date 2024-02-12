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



const splash = document.querySelector(".splash");
document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    },2000);
})













// document.addEventListener('DOMContentLoaded', function () {
//     const text = "This is a typewriter effect!"; // Text you want to display
//     let index = 0;
  
//     function type() {
//       document.getElementById('typewriter-text').textContent += text[index];
//       index++;
  
//       if (index < text.length) {
//         setTimeout(type, 100); // Adjust typing speed (in milliseconds)
//       }
//     }
  
//     type();
//   });
  












// const container = document.querySelector('.sliding-text-container');
// const text = document.querySelector('.sliding-text');
// const textWidth = text.getBoundingClientRect().width;

// // Set the width of the container to the width of the text content
// container.style.width = `${textWidth}px`;

// // Reset the animation when it finishes
// text.addEventListener('animationiteration', () => {
//     text.style.animation = 'none';
//     void text.offsetWidth; // Trigger reflow
//     text.style.animation = 'slide 20s linear infinite'; // Restart animation
// });







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




// document.getElementById('feedbackForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     // Get form values
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;
    
//     // Display confirmation message
//     var confirmation = document.getElementById('confirmation');
//     confirmation.innerHTML = '<p>Thank you for your feedback, ' + name + '!</p>';
//     confirmation.style.display = 'block';
    
//     // You can send the feedback data to your server here for further processing
    
//     // Reset form fields
//     document.getElementById('feedbackForm').reset();
//   });



// document.getElementById('feedbackForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission behavior
    
//     // Get form values
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;
    
//     // Display confirmation message
//     var confirmation = document.getElementById('confirmation');
//     confirmation.innerHTML = '<p>Thank you for your feedback, ' + name + '!</p>';
//     confirmation.style.display = 'block';
    
//     // Reset form fields
//     document.getElementById('feedbackForm').reset();
//     return false;
//   });
  


// document.getElementById('feedbackForm').addEventListener('submit', function(event) {
//     console.log("Form submitted"); // Debugging statement
    
//     event.preventDefault(); // Prevent default form submission behavior
    
//     // Get form values
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;
    
//     // console.log("Name:", name); // Debugging statement
//     // console.log("Email:", email); // Debugging statement
//     // console.log("Message:", message); // Debugging statement
    
//     // Display confirmation message
//     var confirmation = document.getElementById('confirmation');
//     confirmation.innerHTML = `<p>Thank you for your feedback, ` + name + `!</p>`;
//     confirmation.style.display = 'block';
    
//     // Reset form fields
//     document.getElementById('feedbackForm').reset();
    
//     // console.log("Confirmation displayed"); // Debugging statement
    
//     return false;
// });

  