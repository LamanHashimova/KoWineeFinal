let srcbutton= document.querySelector('.srcbutton');
let dropdownsearchabout= document.querySelector('.dropdownsearchabout')
let loginregabout= document.querySelector('.loginreg');
 let loginabout= document.querySelector('.loginabout')


const display1 = () =>{
dropdownsearchabout.style.display = "none"
loginabout.style.display = "none"

}
display1()
srcbutton.addEventListener('click',()=>{
  const {display} = dropdownsearchabout.style
  display == "none" ? dropdownsearchabout.style.display = "block" : dropdownsearchabout.style.display = "none"
 })
 

 loginregabout.addEventListener('click',()=>{
  const {display} = loginabout.style
  display == "none" ? loginabout.style.display = "block" : loginabout.style.display = "none"
  })


// $('.meetslider').slick({
//     dots: false,
//     arrows:false,
//     infinite: true,
//     speed: 900,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });

  $('.clientslider').slick({
    dots: false,
    arrows:true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows:false,
          infinite: true,
          speed: 900,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows:false,
          infinite: true,
          speed: 900,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          dots: false,
          arrows:false,
          infinite: true,
          speed: 900,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  
  $('.brand-slider').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows:false,
          infinite: true,
          speed: 900,
          slidesToShow:3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows:false,
          infinite: true,
          speed: 900,
          slidesToShow:3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 567,
        settings: {
          dots: false,
          arrows:false,
          infinite: true,
          speed: 900,
          slidesToShow:3,
          slidesToScroll: 3,
        }
      }
    ]
  });


  let forms=document.querySelector('#SignUp .signinputs ')
let emails=document.querySelector('#SignUp .signinputs input');
let RegEmails = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
forms.addEventListener("submit", (e) => {
  e.preventDefault();
  checkError();
});


function checkError() {
  if (emails.value === "") {
    errorHandling("The field is required.", emails)
} else if (!RegEmails.test(emails.value)) {
    errorHandling("The e-mail address entered is invalid.", emails)
} else {
  successMessage(emails);
}
}
function errorHandling(text, input) {
  let parentElement = input.parentElement;
  let messages = parentElement.querySelector(".error");
  messages.innerText = text;
  let meesagetoclients=parentElement.querySelector('.messagetoclient')
  meesagetoclients.classList.remove('d-none')
  meesagetoclients.classList.add('d-block')

}
function successMessage(input,text) {
  let parentElement = input.parentElement;
  let errorMessages = parentElement.querySelector(".error");
  if (errorMessages) {
      errorMessages.remove();
  }
  let meesagetoclients=parentElement.querySelector('.messagetoclient')
  let succcessmessages=meesagetoclients.querySelector('.saccess')
  meesagetoclients.style.border='2px solid #46b450';
  succcessmessages.innerHTML='Thank you for your message. It has been sent.';
}


function ProductNumber(){
    let basket=JSON.parse(localStorage.getItem('products'))
    let count=document.querySelector('.basket')
    count.innerHTML=basket.length;
    document.querySelector('.totalcount').innerHTML=basket.length;
 }
 ProductNumber();