let search= document.querySelector('.test124');
let dropdownsearch= document.querySelector('.dropdownsearch')
let loginreg= document.querySelector('.loginreg');
 let login= document.querySelector('.login')


const display12 = () =>{
dropdownsearch.style.display = "none"
login.style.display = "none"

}
display12()
search.addEventListener('click',()=>{
  const {display} = dropdownsearch.style
  display == "none" ? dropdownsearch.style.display = "block" : dropdownsearch.style.display = "none"
 })
 

 loginreg.addEventListener('click',()=>{
  const {display} = login.style
  display == "none" ? login.style.display = "block" : login.style.display = "none"
  })



 let form=document.querySelector('#Newletters .inputs ')
let email=document.querySelector('#Newletters .inputs input');
let RegEmail = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkError();
});


function checkError() {
  if (email.value === "") {
    errorHandling("The field is required.", email)
} else if (!RegEmail.test(email.value)) {
    errorHandling("The e-mail address entered is invalid.", email)
} else {
  successMessage(email);
}
}
function errorHandling(text, input) {
  let parentElement = input.parentElement;
  let message = parentElement.querySelector(".error");
  message.innerText = text;
  let meesagetoclient=parentElement.querySelector('.messagetoclient')
  meesagetoclient.classList.remove('d-none')
  meesagetoclient.classList.add('d-block')

}
function successMessage(input,text) {
  let parentElement = input.parentElement;
  let errorMessage = parentElement.querySelector(".error");
  if (errorMessage) {
      errorMessage.remove();
  }
  let meesagetoclient=parentElement.querySelector('.messagetoclient')
  let succcessmessage=meesagetoclient.querySelector('.scss')
  meesagetoclient.style.border='2px solid #46b450';
  succcessmessage.innerHTML='Thank you for your message. It has been sent.';
}


$('.main-slider').slick({
    dots: false,
    arrows:true,
    autoplay:true,
    autoplayspeed:5000,
    infinite: true, 
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay:true,
          autoplayspeed:5000,
          arrows:true,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay:true,
          autoplayspeed:5000,
          arrows:true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay:true  ,
          autoplayspeed:5000,
          arrows:true,
        }
      }
    ]
  });

$('.slider2').slick({
    dots: true,
    infinite: true,
    arrows:false,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          infinite: true,
          arrows:false,
          speed: 900,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          arrows:false,
          speed: 900,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          dots: true,
          infinite: true,
          arrows:false,
          speed: 900,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.top-slider').slick({
    dots: false,
    arrows:true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows:true,
          infinite: true,
          speed: 900,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows:true,
          infinite: true,
          speed: 900,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          dots: false,
          arrows:true,
          infinite: true,
          speed: 900,
          slidesToShow: 2,
          slidesToScroll: 2,
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



       


let buttons=document.querySelectorAll('.btn');

 if(localStorage.getItem('products')===null){
 localStorage.setItem('products', JSON.stringify([]))
 }

 for(let btn of buttons){
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
         let pr_id=e.target.parentElement.parentElement.parentElement.parentElement.id;
         let pr_image=e.target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.src;
         let pr_name=e.target.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerHTML;
         let pr_price=e.target.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.lastElementChild.innerHTML;

        let basket= JSON.parse(localStorage.getItem('products'));
        let exist_pr=basket.find(item => item.Id===pr_id);
        if(exist_pr===undefined){
            basket.push({
                Id:pr_id,
                Name:pr_name,
                Price: pr_price,
                Image:pr_image,
                Count:1,
                TotalPrice:pr_price,
            })
            // alert.style.right='50px'
            // alert.innerHTML='Product successfully added...'
            // setTimeout(() => {
            //     alert.style.right='-400px'
            // }, 3000);
        }
        else{
         exist_pr.Count++;
        //  alert.style.right='50px'
        //  alert.style.background='rgb(253, 176, 148)'
        //  alert.innerHTML='Product already existed...'
        //  setTimeout(() => {
        //     alert.style.right='-400px'
        //  }, 3000);
        }
        
        
        localStorage.setItem('products', JSON.stringify(basket))
        ProductNumber();
      
    })
 }

 function ProductNumber(){
    let basket=JSON.parse(localStorage.getItem('products'))
    let count=document.querySelector('.basket')
    count.innerHTML=basket.length;
    document.querySelector('.totalcount').innerHTML=basket.length;
 }
 ProductNumber();

 
