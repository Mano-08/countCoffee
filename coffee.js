let count=0

let bount=0

let countEl=document.getElementById("count-el")
let incrementEl=document.getElementById("increment-btn")
let saveEl=document.getElementById("save-el")
let totalEl=document.getElementById("total-el")

function increment() {
  count+=1
  bount+=1
  totalEl.textContent=bount
  countEl.textContent=count
}


function save() {
  saveEl.textContent+= count + " - "
  count=0
  countEl.textContent=0
}
