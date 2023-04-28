var tittle = document.getElementById("tittle");
var context = document.getElementById("context");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

btn.addEventListener("click",function(){
   list.innerHTML = list.innerHTML + `
   <div class="article">
   <h2>${tittle.value}</h2>
   <p>${context.value}</p>
 </div>
    `;
    tittle.value = "";
    console.value = "";
})