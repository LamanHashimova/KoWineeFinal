let basketbutton= document.querySelector('.basketbutton');
let dropdownsearchbasket= document.querySelector('.dropdownsearchbasket')
let loginregbasket= document.querySelector('.loginreg');
 let loginbasket= document.querySelector('.loginbasket')


const display2 = () =>{
dropdownsearchbasket.style.display = "none"
loginbasket.style.display = "none"
}
display2();
basketbutton.addEventListener('click',()=>{
  const {display} = dropdownsearchbasket.style
  display == "none" ? dropdownsearchbasket.style.display = "block" : dropdownsearchbasket.style.display = "none"
 })
 

 loginregbasket.addEventListener('click',()=>{
  const {display} = loginbasket.style
  display == "none" ? loginbasket.style.display = "block" : loginbasket.style.display = "none"
  })



function GetItems() {
    let basket = JSON.parse(localStorage.getItem('products'))
    if (basket.length === 0) {
        let a=document.querySelector('.all-products');
        a.remove(a.firstChild);
        document.querySelector('.empty').classList.remove('d-none')
        document.querySelector('.all-price').classList.add('d-none')
    } else {
        let html = '';
        for (let item of basket) {
            html += `
            <div class="products">
          <div class="photo">
              <img src=${item.Image}>
          </div>
          <div class="info">
              <p class="m-0">${item.Name}</p>
              <div class="price">
              <span class="m-0 ">$${item.TotalPrice}</span>
          </div>
          </div>
          <div class="others">
              <div class="number">
                  <button class="plus" onclick="changeCount('plus',${item.Id})">+</button>
                  <input type="text" value=${item.Count}>
                  <button class="minus" onclick="changeCount('minus',${item.Id})">-</button>
              </div>
              <div class="delete" onclick="deleteItem(${item.Id})">
              <i class="fa-regular fa-circle-xmark"></i>
              </div>
          </div>
      </div>
        `
        }
        document.querySelector('.all-products').innerHTML = html;
    }  
}
function ProductNumber() {
    let basket = JSON.parse(localStorage.getItem('products'))
    let count = document.querySelector('.basket')
    count.innerHTML = basket.length;
    document.querySelector('.totalcount').innerHTML=basket.length;
    document.querySelector('.showprice').innerHTML=basket.length;
   
}


let changeCount = (action, id, price) => {
    let basket = JSON.parse(localStorage.getItem('products'))
    basket = basket.map((item) => {
        let newCount = Number(item.Count)
        let newPrice = Number(item.Price)
        let totalprice = Number(item.TotalPrice)
        if (item.Id == Number(id)) {
            if (action === 'plus') {
                newCount = newCount + 1
                totalprice = newPrice * newCount
            } else if (action === 'minus') {
                item.totalPrice = newPrice / newCount
                if (item.Count != 1) {
                    newCount = newCount - 1
                    totalprice = newPrice * newCount
                }
            }
        }
        return {
            ...item,
            Count: newCount,
            TotalPrice: totalprice.toFixed(1)
        }
    })
    localStorage.setItem('products', JSON.stringify(basket))
    GetItems();
    showTotalOrder();
}
const deleteItem = (id) => {
    let basket = JSON.parse(localStorage.getItem('products'))
    basket = basket.filter(item => item.Id != id);
    localStorage.removeItem('products')
    localStorage.setItem('products', JSON.stringify(basket))
    GetItems();
    ProductNumber();
    showTotalOrder();
}

function showTotalOrder() {
    let totalPrice = 0;
    let basket = JSON.parse(localStorage.getItem("products"));
    basket.forEach(item => {
        totalPrice += Number(item.TotalPrice);
        return totalPrice;
    }); 
    document.querySelector(".totalprice").innerHTML = `$${totalPrice.toFixed(2)}`;
   
}

 
GetItems();
showTotalOrder();
ProductNumber();





