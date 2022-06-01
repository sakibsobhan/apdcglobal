// scroll animation
AOS.init();



// banner slider
$(".banner-slider").slick({
    prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
          }
        }
      ]
})


// product part slider
$(".products").slick({
  slidesToShow:3,
  prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow:2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow:2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }
  ]
})




// ===========back to top==========

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 



// contact form start

function sendMail(params) {
  var templateParams = {
      from_name: document.getElementById("Sender").value,
      to_name: document.getElementById("Name").value,
      message: document.getElementById("Message").value,
      
  };
   
  emailjs.send('service_szu5non', 'template_vvlp9e9', templateParams,"hN0-MoCBU8_Mky76H")
      .then(function(response) {
          alert('Your mail has been send. Thank you for connecting.');
      }, function(error) {
          alert('There is error at sending message. ')
      });
}

// contact form end