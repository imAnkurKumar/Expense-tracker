var form = document.getElementById("addform");
var amount = document.getElementById("amount");
var description = document.getElementById("description");
var category = document.getElementById("category");
var itemlist = document.getElementById("users");
// console.log(users);
form.addEventListener('submit', addItem);


function addItem(e){
 e.preventDefault();

 let obj = {
  amount:amount.value,
  description:description.value,
  category:category.value
 }
 console.log(1);
 localStorage.setItem()
}