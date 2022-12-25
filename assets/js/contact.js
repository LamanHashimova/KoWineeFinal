let cntctbutton= document.querySelector('.cntctbutton');
let dropdownsearchcontact= document.querySelector('.dropdownsearchcontact')
let loginregcontact= document.querySelector('.loginreg');
 let logincontact= document.querySelector('.logincontact')


const display2 = () =>{
dropdownsearchcontact.style.display = "none"
logincontact.style.display = "none"
}
display2();
cntctbutton.addEventListener('click',()=>{
  const {display} = dropdownsearchcontact.style
  display == "none" ? dropdownsearchcontact.style.display = "block" : dropdownsearchcontact.style.display = "none"
 })
 

 loginregcontact.addEventListener('click',()=>{
  const {display} = logincontact.style
  display == "none" ? logincontact.style.display = "block" : logincontact.style.display = "none"
  })



  let formcontact=document.querySelector('#SignUpContact .signinputscontact ')
  let emailcontact=document.querySelector('#SignUpContact .signinputscontact input');
  let RegEmailcontact = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
  formcontact.addEventListener("submit", (e) => {
    e.preventDefault();
    checkErrorContact();
  });
  
  
  function checkErrorContact() {
    if (emailcontact.value === "") {
      errorHandlingContact("The field is required.", emailcontact)
  } else if (!RegEmailcontact.test(emailcontact.value)) {
    errorHandlingContact("The e-mail address entered is invalid.", emailcontact)
  } else {
    successMessagecontact(emailcontact);
  }
  }
  function errorHandlingContact(text, input) {
    let parentElementcontact = input.parentElement;
    let messagecontact = parentElementcontact.querySelector(".errorcontact");
    messagecontact.innerHTML = text;
    let meesagetoclientcontact=parentElement.querySelector('.messagetoclientcontact')
    meesagetoclientcontact.classList.remove('d-none')
    meesagetoclientcontact.classList.add('d-block')
  
  }
  function successMessagecontact(input,text) {
    let parentElement = input.parentElement;
    let errorMessagecontact = parentElement.querySelector(".errorcontact");
    if (errorMessagecontact) {
        errorMessagecontact.remove();
    }
    let meesagetoclientcontact=parentElement.querySelector('.messagetoclientcontact')
    let succcessmessagecontact=meesagetoclientcontact.querySelector('.success')
    meesagetoclientcontact.style.border='2px solid #46b450';
    succcessmessagecontact.innerHTML='Thank you for your message. It has been sent.';
  }
  
  function ProductNumber(){
    let basket=JSON.parse(localStorage.getItem('products'))
    let count=document.querySelector('.basket')
    count.innerHTML=basket.length;
    document.querySelector('.totalcount').innerHTML=basket.length;
 }
 ProductNumber();