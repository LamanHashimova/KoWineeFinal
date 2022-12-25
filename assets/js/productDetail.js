$('.top-slider').slick({
    dots: false,
    arrows:true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  

  $('.detailslider').slick({
    dots: false,
    arrows:true,
    infinite: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  function OpenContent (evt, tapname) {
    let tabcontent = document.querySelectorAll(".tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
    tabcontent [i].style.display = 'none';
    }
    let tablinks = document.querySelectorAll(".tabclick");
    for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className= tablinks[i].className.replace("active", "");
    }
    document.getElementById(tapname).style.display="block";
    evt.currentTarget.className + "active";
    }

    
var magnifying_area = document.querySelector(".detailphoto")
var magnifying_img = document.querySelector(".zoom");
magnifying_area.addEventListener("mousemove",function(event){
let clientX = event.clientX- magnifying_area.offsetLeft
let clientY = event.clientY- magnifying_area.offsetTop

let mWidth = magnifying_area.offsetWidth
let mHeight= magnifying_area.offsetHeight

clientX = clientX / mWidth *100
clientY = clientY / mHeight * 100

magnifying_img.style.transform = 'translate(-'+clientX+'%,-'+clientY+'%) scale(2)'
});





let productbutton= document.querySelector('.productbutton');
let dropdownsearchproduct= document.querySelector('.dropdownsearchproduct')
let loginregproductt= document.querySelector('.loginreg');
 let loginproduct= document.querySelector('.loginproduct')


const display2 = () =>{
  dropdownsearchproduct.style.display = "none"
loginproduct.style.display = "none"
}
display2();
productbutton.addEventListener('click',()=>{
  const {display} = dropdownsearchproduct.style
  display == "none" ? dropdownsearchproduct.style.display = "block" : dropdownsearchproduct.style.display = "none"
 })
 

 loginregproductt.addEventListener('click',()=>{
  const {display} = loginproduct.style
  display == "none" ? loginproduct.style.display = "block" : loginproduct.style.display = "none"
  })

  function ProductNumber(){
    let basket=JSON.parse(localStorage.getItem('products'))
    let count=document.querySelector('.basket')
    count.innerHTML=basket.length;
    document.querySelector('.totalcount').innerHTML=basket.length;
 }
 ProductNumber();